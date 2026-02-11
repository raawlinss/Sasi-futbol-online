import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Goal } from '../entities/Goal.js';

function disposeMaterial(material) {
    if (!material) return;

    const maps = [
        'map',
        'roughnessMap',
        'metalnessMap',
        'normalMap',
        'emissiveMap',
        'alphaMap'
    ];

    for (const key of maps) {
        const tex = material[key];
        if (tex && typeof tex.dispose === 'function') {
            tex.dispose();
        }
    }

    if (typeof material.dispose === 'function') {
        material.dispose();
    }
}

function disposeObject3D(obj) {
    if (!obj) return;

    obj.traverse((child) => {
        if (!child) return;
        if (child.isMesh) {
            if (child.geometry && typeof child.geometry.dispose === 'function') {
                child.geometry.dispose();
            }

            const mat = child.material;
            if (Array.isArray(mat)) {
                for (const m of mat) {
                    disposeMaterial(m);
                }
            } else {
                disposeMaterial(mat);
            }
        }
    });
}

export class Stadium {
    constructor(world, pitchConfig = null) {
        this.world = world;
        this.clouds = [];
        this.cloudsInitialized = false;
        this.cloudTime = 0;
        this.cloudUpdateAccumulator = 0;
        this.weatherMode = 'day';
        this.nightLights = [];
        this.nightLightTargets = [];
        this.atmoLights = null;
        this.atmoDefaults = null;
        this.spectatorSeats = [];
        this.adBoards = [];
        this.skyDome = null;
        this.skyTexDay = null;
        this.skyTexNight = null;
        this.fieldMaterial = null;
        this.fieldMesh = null;
        this.goal1 = null;
        this.goal2 = null;
        this.root = new THREE.Group();
        this.world.scene.add(this.root);
        this.physicsBodies = [];
        this.pitch = this.normalizePitchConfig(pitchConfig);
        this.pitchScale = Math.max(1, this.pitch.halfWidth / 24);
        this.fieldWidth = this.pitch.halfWidth * 2;
        this.fieldLength = this.pitch.halfDepth * 2;
        this.featureGates = {
            stabilizationMode: false,
            cloudsEnabled: true,
            atmosphereEnabled: true
        };
        this.applyFeatureGates(window.__perfFlags || null);

        this.rebuild(this.pitch);
    }

    normalizePitchConfig(pitchConfig) {
        const halfWidth = Number.isFinite(pitchConfig?.halfWidth) ? Number(pitchConfig.halfWidth) : 24;
        const halfDepth = Number.isFinite(pitchConfig?.halfDepth) ? Number(pitchConfig.halfDepth) : 39;
        const goalHalfWidth = Number.isFinite(pitchConfig?.goalHalfWidth) ? Number(pitchConfig.goalHalfWidth) : 5;
        const goalHeight = Number.isFinite(pitchConfig?.goalHeight) ? Number(pitchConfig.goalHeight) : 2.44;
        return {
            halfWidth,
            halfDepth,
            goalHalfWidth,
            goalHeight
        };
    }

    clear() {
        if (this.goal1?.dispose) {
            this.goal1.dispose();
        }
        if (this.goal2?.dispose) {
            this.goal2.dispose();
        }
        this.goal1 = null;
        this.goal2 = null;

        for (const body of this.physicsBodies) {
            try {
                this.world.physicsWorld.removeBody(body);
            } catch { }
        }
        this.physicsBodies = [];

        for (const child of [...this.root.children]) {
            this.root.remove(child);
            disposeObject3D(child);
        }

        this.clouds = [];
        this.cloudsInitialized = false;
        this.spectatorSeats = [];
        this.adBoards = [];
        this.skyDome = null;
        this.skyTexDay = null;
        this.skyTexNight = null;
        this.fieldMaterial = null;
        this.fieldMesh = null;
        this.cloudUpdateAccumulator = 0;
        this.nightLights = [];
        this.nightLightTargets = [];
        this.atmoLights = null;
        this.atmoDefaults = null;
    }

    rebuild(pitchConfig = null) {
        const normalized = this.normalizePitchConfig(pitchConfig);
        const changed = (
            !this.pitch
            || normalized.halfWidth !== this.pitch.halfWidth
            || normalized.halfDepth !== this.pitch.halfDepth
            || normalized.goalHalfWidth !== this.pitch.goalHalfWidth
            || normalized.goalHeight !== this.pitch.goalHeight
        );

        if (!changed && this.fieldMesh) {
            return;
        }

        this.clear();
        this.pitch = normalized;
        this.pitchScale = Math.max(1, this.pitch.halfWidth / 24);
        this.fieldWidth = this.pitch.halfWidth * 2;
        this.fieldLength = this.pitch.halfDepth * 2;

        this.initSurroundings();
        this.initOuterDetail();
        this.initSkyDome();
        this.initField();
        this.initGoals();
        this.initFencing();
        this.initAdBoards();
        this.initCornerFlags();
        this.initFloodlights();
        this.initCeiling();
        if (this.featureGates.cloudsEnabled) {
            this.initClouds();
            this.cloudsInitialized = true;
        }
        this.initSpectatorSeats();
        this.setWeatherMode(this.world?.weatherMode || this.weatherMode || 'day');
    }

    setWeatherMode(mode = 'day') {
        const next = `${mode || ''}`.trim().toLowerCase() === 'night' ? 'night' : 'day';
        this.weatherMode = next;

        if (this.skyDome?.material && this.skyTexDay && this.skyTexNight) {
            this.skyDome.material.map = this.weatherMode === 'night' ? this.skyTexNight : this.skyTexDay;
            this.skyDome.material.needsUpdate = true;
        }

        if (this.atmoLights && this.atmoDefaults) {
            const sun = this.atmoLights.sun;
            const hemi = this.atmoLights.hemi;
            const haze = this.atmoLights.haze;
            if (this.weatherMode === 'night') {
                if (sun) sun.intensity = 0.12;
                if (hemi) hemi.intensity = 0.08;
                if (haze) haze.intensity = 0.06;
            } else {
                if (sun) sun.intensity = this.atmoDefaults.sun;
                if (hemi) hemi.intensity = this.atmoDefaults.hemi;
                if (haze) haze.intensity = this.atmoDefaults.haze;
            }
        }

        if (this.weatherMode === 'night') {
            if (!this.nightLights.length) {
                const addNightLight = (x, z, targetX, targetZ) => {
                    const light = new THREE.SpotLight(0xffffff, 1.65, 260, Math.PI / 5.5, 0.35, 1.05);
                    light.position.set(x, 28, z);
                    light.castShadow = false;
                    const target = new THREE.Object3D();
                    target.position.set(targetX, 0.5, targetZ);
                    this.root.add(target);
                    light.target = target;
                    this.root.add(light);
                    this.nightLights.push(light);
                    this.nightLightTargets.push(target);
                };

                const hw = this.pitch.halfWidth;
                const hz = this.pitch.halfDepth;
                const dx = hw + 26;
                const dz = hz + 26;
                addNightLight(dx, dz, 0, 0);
                addNightLight(-dx, dz, 0, 0);
                addNightLight(dx, -dz, 0, 0);
                addNightLight(-dx, -dz, 0, 0);
            }

            for (const light of this.nightLights) {
                light.visible = true;
            }
        } else {
            for (const light of this.nightLights) {
                light.visible = false;
            }
        }
    }

    applyFeatureGates(perfFlags) {
        if (!perfFlags || typeof perfFlags !== 'object') {
            return;
        }

        const gates = (perfFlags.featureGates && typeof perfFlags.featureGates === 'object')
            ? perfFlags.featureGates
            : null;
        this.featureGates.stabilizationMode = !!perfFlags.stabilizationMode;
        if (typeof perfFlags.cloudsEnabled === 'boolean') {
            this.featureGates.cloudsEnabled = perfFlags.cloudsEnabled;
        } else if (gates && typeof gates.clouds === 'boolean') {
            this.featureGates.cloudsEnabled = gates.clouds;
        } else if (this.featureGates.stabilizationMode) {
            this.featureGates.cloudsEnabled = false;
        }

        if (typeof perfFlags.atmosphereEnabled === 'boolean') {
            this.featureGates.atmosphereEnabled = perfFlags.atmosphereEnabled;
        } else if (gates && typeof gates.atmosphere === 'boolean') {
            this.featureGates.atmosphereEnabled = gates.atmosphere;
        } else if (this.featureGates.stabilizationMode) {
            this.featureGates.atmosphereEnabled = false;
        }

        if (this.cloudsInitialized && !this.featureGates.cloudsEnabled) {
            for (const layer of this.clouds) {
                layer.group.visible = false;
            }
        } else if (this.cloudsInitialized && this.featureGates.cloudsEnabled) {
            for (const layer of this.clouds) {
                layer.group.visible = true;
            }
        }
    }

    initSurroundings() {
        // Concrete/Dark Asphalt ground (Optimized)
        const groundGeo = new THREE.PlaneGeometry(300, 300);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x151a1f,
            roughness: 0.94,
            metalness: 0.02
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.55;
        ground.receiveShadow = true;
        this.root.add(ground);

        const ringInner = this.pitch.halfDepth + 13;
        const ringOuter = ringInner + 14;
        const ringGeo = new THREE.RingGeometry(ringInner, ringOuter, 96);
        const ringMat = new THREE.MeshStandardMaterial({
            color: 0x2a2f36,
            roughness: 0.86,
            metalness: 0.08,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = -0.49;
        ring.receiveShadow = true;
        this.root.add(ring);
    }

    initOuterDetail() {
        const skyline = new THREE.Group();
        const boxMatA = new THREE.MeshStandardMaterial({ color: 0x2f3640, roughness: 0.92 });
        const boxMatB = new THREE.MeshStandardMaterial({ color: 0x38414c, roughness: 0.9 });

        const placeBlock = (x, z, w, h, d, mat) => {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
            mesh.position.set(x, h * 0.5 - 0.55, z);
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            skyline.add(mesh);
        };

        for (let i = 0; i < 24; i += 1) {
            const lane = i % 2 === 0 ? 86 : 102;
            const side = i % 4 < 2 ? 1 : -1;
            const x = -120 + i * 10 + (Math.random() - 0.5) * 2.5;
            const z = side * lane + (Math.random() - 0.5) * 5;
            const w = 6 + Math.random() * 5;
            const h = 10 + Math.random() * 32;
            const d = 6 + Math.random() * 5;
            placeBlock(x, z, w, h, d, i % 3 === 0 ? boxMatB : boxMatA);
        }

        for (let i = 0; i < 18; i += 1) {
            const lane = i % 2 === 0 ? 84 : 108;
            const side = i % 3 === 0 ? 1 : -1;
            const z = -90 + i * 10 + (Math.random() - 0.5) * 3;
            const x = side * lane + (Math.random() - 0.5) * 4;
            const w = 7 + Math.random() * 5;
            const h = 12 + Math.random() * 26;
            const d = 7 + Math.random() * 6;
            placeBlock(x, z, w, h, d, i % 2 === 0 ? boxMatA : boxMatB);
        }

        this.root.add(skyline);
    }

    initSkyDome() {
        const makeDay = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            const grad = ctx.createLinearGradient(0, 0, 0, 512);
            grad.addColorStop(0, '#80cfff');
            grad.addColorStop(0.55, '#a2dcff');
            grad.addColorStop(1, '#f7fbff');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 1024, 512);
            return canvas;
        };

        const makeNight = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            const grad = ctx.createLinearGradient(0, 0, 0, 512);
            grad.addColorStop(0, '#081427');
            grad.addColorStop(0.55, '#050a12');
            grad.addColorStop(1, '#020409');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 1024, 512);

            // Stars (cheap, static)
            for (let i = 0; i < 420; i += 1) {
                const x = Math.random() * 1024;
                const y = Math.random() * 380;
                const r = Math.random() < 0.9 ? 0.8 : 1.4;
                const a = 0.18 + Math.random() * 0.65;
                ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
            return canvas;
        };

        this.skyTexDay = new THREE.CanvasTexture(makeDay());
        this.skyTexDay.colorSpace = THREE.SRGBColorSpace;
        this.skyTexDay.needsUpdate = true;

        this.skyTexNight = new THREE.CanvasTexture(makeNight());
        this.skyTexNight.colorSpace = THREE.SRGBColorSpace;
        this.skyTexNight.needsUpdate = true;

        const domeGeo = new THREE.SphereGeometry(260, 40, 24);
        const domeMat = new THREE.MeshBasicMaterial({ map: this.skyTexDay, side: THREE.BackSide });
        this.skyDome = new THREE.Mesh(domeGeo, domeMat);
        this.skyDome.position.y = 15;
        this.root.add(this.skyDome);
    }

    createGrassTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Base turf
        ctx.fillStyle = '#2f7a2f';
        ctx.fillRect(0, 0, 512, 512);

        // Blade noise
        for (let i = 0; i < 38000; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const w = 1 + Math.random() * 1.6;
            const h = 1.4 + Math.random() * 3.2;
            ctx.fillStyle = Math.random() > 0.5 ? '#2a652b' : '#4cae4f';
            ctx.fillRect(x, y, w, h);
        }

        // Mowed stripes with tone variation
        const stripeH = 512 / 12;
        for (let i = 0; i < 12; i += 1) {
            const tone = i % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.055)';
            ctx.fillStyle = tone;
            ctx.fillRect(0, i * stripeH, 512, stripeH);
        }

        // Worn areas for a less flat look
        for (let i = 0; i < 70; i += 1) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const r = 6 + Math.random() * 22;
            const g = Math.floor(110 + Math.random() * 45);
            ctx.fillStyle = `rgba(${g - 20},${g},${g - 25},0.16)`;
            ctx.beginPath();
            ctx.ellipse(x, y, r, r * (0.45 + Math.random() * 0.65), Math.random() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 6);
        texture.anisotropy = 4;
        return texture;
    }

    createGrassRoughnessTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#d0d0d0';
        ctx.fillRect(0, 0, 512, 512);

        for (let i = 0; i < 24000; i += 1) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const v = 165 + Math.floor(Math.random() * 60);
            ctx.fillStyle = `rgb(${v},${v},${v})`;
            ctx.fillRect(x, y, 1, 1);
        }

        const stripeH = 512 / 12;
        for (let i = 0; i < 12; i += 1) {
            const tone = i % 2 === 0 ? 'rgba(12,12,12,0.07)' : 'rgba(255,255,255,0.055)';
            ctx.fillStyle = tone;
            ctx.fillRect(0, i * stripeH, 512, stripeH);
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 6);
        texture.anisotropy = 4;
        return texture;
    }

    initField() {
        // Visual pitch block: single stadium block with top at y=0
        const fieldWidth = this.fieldWidth;
        const fieldLength = this.fieldLength;
        const geometry = new THREE.BoxGeometry(fieldWidth, 0.8, fieldLength);
        const texture = this.createGrassTexture();
        const roughnessTexture = this.createGrassRoughnessTexture();
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            roughnessMap: roughnessTexture,
            roughness: 0.82,
            metalness: 0.01
        });
        this.fieldMaterial = material;
        this.fieldMesh = new THREE.Mesh(geometry, material);
        this.fieldMesh.position.y = -0.4;
        this.fieldMesh.receiveShadow = true;
        this.root.add(this.fieldMesh);

        // Lines (Lift slightly to avoid z-fight)
        const lineWidth = 0.2;
        const innerFieldWidth = Math.max(1, fieldWidth - 0.4);
        const innerFieldLength = Math.max(1, fieldLength - 0.4);

        // Main borders
        this.createLine(0, innerFieldLength / 2, innerFieldWidth, lineWidth);
        this.createLine(0, -innerFieldLength / 2, innerFieldWidth, lineWidth);
        this.createLine(innerFieldWidth / 2, 0, lineWidth, innerFieldLength);
        this.createLine(-innerFieldWidth / 2, 0, lineWidth, innerFieldLength);

        // Center line
        this.createLine(0, 0, innerFieldWidth, lineWidth);

        // Center circle
        const circleGeo = new THREE.RingGeometry(6, 6.2, 64);
        const circleMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        const circle = new THREE.Mesh(circleGeo, circleMat);
        circle.rotation.x = -Math.PI / 2;
        circle.position.y = 0.02;
        this.root.add(circle);

        // Center logo disc
        const logoGeo = new THREE.CircleGeometry(2.5, 32);
        const logoMat = new THREE.MeshBasicMaterial({ color: 0xffd54f, opacity: 0.95, transparent: true });
        const logo = new THREE.Mesh(logoGeo, logoMat);
        logo.rotation.x = -Math.PI / 2;
        logo.position.y = 0.015;
        this.root.add(logo);

        // Single physics block for the whole stadium pitch.
        const pitchShape = new CANNON.Box(new CANNON.Vec3(this.pitch.halfWidth, 0.4, this.pitch.halfDepth));
        const pitchBody = new CANNON.Body({ mass: 0 });
        pitchBody.addShape(pitchShape);
        pitchBody.position.set(0, -0.4, 0);
        this.world.physicsWorld.addBody(pitchBody);
        this.physicsBodies.push(pitchBody);
    }

    createLine(x, z, width, length) {
        const geometry = new THREE.PlaneGeometry(width, length);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const line = new THREE.Mesh(geometry, material);
        line.rotation.x = -Math.PI / 2;
        line.position.set(x, 0.01, z); // Slightly above ground
        line.receiveShadow = true;
        this.root.add(line);
    }

    initGoals() {
        const hz = this.pitch.halfDepth;

        // Goal at one end (behind -Z goal line)
        this.goal1 = new Goal(this.world, { x: 0, y: 0, z: -(hz + 0.1) }, 0, this.root);

        // Goal at other end (behind +Z goal line)
        this.goal2 = new Goal(this.world, { x: 0, y: 0, z: hz + 0.1 }, Math.PI, this.root);

        const zoneW = 14;
        const zoneD = 6;

        const zoneGeo = new THREE.PlaneGeometry(zoneW, zoneD);
        const zoneRedMat = new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
        const zoneBlueMat = new THREE.MeshBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.12, side: THREE.DoubleSide });

        const redZone = new THREE.Mesh(zoneGeo, zoneRedMat);
        redZone.rotation.x = -Math.PI / 2;
        redZone.position.set(0, 0.015, -hz + zoneD / 2);
        this.root.add(redZone);

        const blueZone = new THREE.Mesh(zoneGeo, zoneBlueMat);
        blueZone.rotation.x = -Math.PI / 2;
        blueZone.position.set(0, 0.015, hz - zoneD / 2);
        this.root.add(blueZone);
    }

    initFencing() {
        const fieldWidth = this.fieldWidth;
        const fieldLength = this.fieldLength;
        const halfWidth = fieldWidth / 2;
        const halfLength = fieldLength / 2;
        const fenceHeight = 4; // Visual fence height
        const wallThickness = 2; // Physical wall thickness

        // 1. VISUAL FENCING (Low Advertising Boards)
        const boardHeight = 1.2;
        const boardMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5 });

        // Helper to create visual board
        const createBoard = (length, x, z, rotation) => {
            const geo = new THREE.BoxGeometry(length, boardHeight, 0.2);
            const mesh = new THREE.Mesh(geo, boardMaterial);
            mesh.position.set(x, boardHeight / 2, z);
            mesh.rotation.y = rotation;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.root.add(mesh);
        };

        // Surround the field closely with visual boards (correct axis)
        // Sidelines (along Z)
        createBoard(fieldLength, halfWidth + 0.2, 0, Math.PI / 2); // Right
        createBoard(fieldLength, -halfWidth - 0.2, 0, Math.PI / 2); // Left

        // Goal lines (along X)
        const goalMouthWidth = 10.5;
        const endSegLenVisual = (fieldWidth - goalMouthWidth) / 2;
        const endSegOffsetXVisual = (goalMouthWidth / 2) + (endSegLenVisual / 2);

        createBoard(endSegLenVisual, endSegOffsetXVisual, halfLength + 0.2, 0);
        createBoard(endSegLenVisual, -endSegOffsetXVisual, halfLength + 0.2, 0);
        createBoard(endSegLenVisual, endSegOffsetXVisual, -halfLength - 0.2, 0);
        createBoard(endSegLenVisual, -endSegOffsetXVisual, -halfLength - 0.2, 0);

        // 2. PHYSICAL BARRIERS (Sealing the map)
        // These invisible walls sit EXACTLY on the field boundary to stop the ball leaving the grass
        const wallMat = new CANNON.Material();
        const wallContact = new CANNON.ContactMaterial(wallMat, wallMat, { friction: 0.0, restitution: 0.5 });
        this.world.physicsWorld.addContactMaterial(wallContact);

        const createSealWall = (w, h, d, x, z, rot) => {
            const shape = new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2));
            const body = new CANNON.Body({ mass: 0, material: wallMat });
            body.addShape(shape);
            body.position.set(x, h / 2, z);
            body.quaternion.setFromEuler(0, rot, 0);
            this.world.physicsWorld.addBody(body);
            this.physicsBodies.push(body);
        };

        const wallHeight = 10;
        const wallOffset = 1.2;

        // Seal Long Sides (Sidelines) - along Z
        createSealWall(wallThickness, wallHeight, fieldLength + 6, halfWidth + wallOffset, 0, 0); // Right (+X)
        createSealWall(wallThickness, wallHeight, fieldLength + 6, -halfWidth - wallOffset, 0, 0); // Left (-X)

        // Seal End Lines (Goal lines) - along X, with a gap for the goal mouth
        const endSegLen = (fieldWidth - goalMouthWidth) / 2;
        const endSegOffsetX = (goalMouthWidth / 2) + (endSegLen / 2);

        // Bottom end (+Z)
        createSealWall(endSegLen, wallHeight, wallThickness, endSegOffsetX, halfLength + wallOffset, 0);
        createSealWall(endSegLen, wallHeight, wallThickness, -endSegOffsetX, halfLength + wallOffset, 0);

        // Top end (-Z)
        createSealWall(endSegLen, wallHeight, wallThickness, endSegOffsetX, -halfLength - wallOffset, 0);
        createSealWall(endSegLen, wallHeight, wallThickness, -endSegOffsetX, -halfLength - wallOffset, 0);

        this.initTribunes();
    }

    initTribunes() {
        // DETAILED TRIBUNES
        const createTribuneSection = (x, z, rotY, isLongSide) => {
            const group = new THREE.Group();
            const width = isLongSide ? 70 : 30;
            const steps = 10;
            const stepHeight = 0.8;
            const stepDepth = 1.2;

            const stepMat = new THREE.MeshStandardMaterial({ color: 0x999999 });
            const seatColors = [0xcc0000, 0x1976d2, 0xffeb3b];

            for (let i = 0; i < steps; i++) {
                // Concrete Step
                const geo = new THREE.BoxGeometry(width, stepHeight, stepDepth);
                const mesh = new THREE.Mesh(geo, stepMat);
                mesh.position.set(0, i * stepHeight, -i * stepDepth);
                mesh.receiveShadow = false;
                group.add(mesh);

                // Seats (Visual Strip)
                const seatGeo = new THREE.BoxGeometry(width - 1, 0.4, 0.4);
                const seatColor = seatColors[i % seatColors.length];
                const seatMat = new THREE.MeshStandardMaterial({ color: seatColor, emissive: 0x111111, emissiveIntensity: 0.15 });
                const seat = new THREE.Mesh(seatGeo, seatMat);
                seat.position.set(0, i * stepHeight + 0.6, -i * stepDepth);
                seat.receiveShadow = false;
                group.add(seat);
            }

            // Roof
            const roofGeo = new THREE.BoxGeometry(width, 0.5, steps * stepDepth + 5);
            const roofMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const roof = new THREE.Mesh(roofGeo, roofMat);
            roof.position.set(0, steps * stepHeight + 10, - (steps * stepDepth) / 2);
            roof.castShadow = false;
            roof.receiveShadow = true;
            group.add(roof);

            // Support Pillars
            const pillarGeo = new THREE.CylinderGeometry(0.5, 0.5, steps * stepHeight + 10);
            const pillarMat = new THREE.MeshStandardMaterial({ color: 0x666666 });

            const p1 = new THREE.Mesh(pillarGeo, pillarMat);
            p1.position.set(width / 2 - 2, (steps * stepHeight + 10) / 2, -steps * stepDepth - 2);
            p1.castShadow = false;
            p1.receiveShadow = false;
            group.add(p1);

            const p2 = new THREE.Mesh(pillarGeo, pillarMat);
            p2.position.set(-width / 2 + 2, (steps * stepHeight + 10) / 2, -steps * stepDepth - 2);
            p2.castShadow = false;
            p2.receiveShadow = false;
            group.add(p2);

            group.position.set(x, 2, z);
            group.rotation.y = rotY;
            this.root.add(group);
        };

        const fieldWidth = this.fieldWidth;
        const fieldLength = this.fieldLength;
        const halfWidth = fieldWidth / 2;
        const halfLength = fieldLength / 2;
        const tribuneOffset = 12 + (this.pitchScale - 1) * 12;

        // Long Sides (along Z, outside sidelines)
        createTribuneSection(-halfWidth - tribuneOffset, 0, Math.PI / 2, true); // Left
        createTribuneSection(halfWidth + tribuneOffset, 0, -Math.PI / 2, true); // Right

        // Short Ends (outside goal lines)
        createTribuneSection(0, -halfLength - tribuneOffset, 0, false); // Top (-Z)
        createTribuneSection(0, halfLength + tribuneOffset, Math.PI, false); // Bottom (+Z)
    }

    initAdBoards() {
        const halfWidth = this.fieldWidth / 2;
        const halfLength = this.fieldLength / 2;

        const boardMatRed = new THREE.MeshStandardMaterial({ color: 0x9f1f1f, emissive: 0x4a1010, emissiveIntensity: 0.35 });
        const boardMatBlue = new THREE.MeshStandardMaterial({ color: 0x1a418d, emissive: 0x102654, emissiveIntensity: 0.35 });

        const mkBoard = (w, h, d, x, y, z, rotY, mat) => {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
            mesh.position.set(x, y, z);
            mesh.rotation.y = rotY;
            mesh.castShadow = false;
            mesh.receiveShadow = true;
            this.root.add(mesh);
            this.adBoards.push(mesh);
        };

        const endZ = halfLength + 2.2;
        const endX = halfWidth * 0.5;

        mkBoard(24, 2.2, 0.35, -endX, 2.0, -endZ, 0, boardMatRed);
        mkBoard(24, 2.2, 0.35, endX, 2.0, -endZ, 0, boardMatBlue);
        mkBoard(24, 2.2, 0.35, -endX, 2.0, endZ, 0, boardMatBlue);
        mkBoard(24, 2.2, 0.35, endX, 2.0, endZ, 0, boardMatRed);

        const sideX = halfWidth + 1.5;
        const sideZ = halfLength * 0.41;

        mkBoard(28, 2.2, 0.35, -sideX, 2.0, -sideZ, Math.PI / 2, boardMatBlue);
        mkBoard(28, 2.2, 0.35, -sideX, 2.0, sideZ, Math.PI / 2, boardMatRed);
        mkBoard(28, 2.2, 0.35, sideX, 2.0, -sideZ, Math.PI / 2, boardMatRed);
        mkBoard(28, 2.2, 0.35, sideX, 2.0, sideZ, Math.PI / 2, boardMatBlue);
    }

    initCornerFlags() {
        const addFlag = (x, z, teamColor) => {
            const pole = new THREE.Mesh(
                new THREE.CylinderGeometry(0.03, 0.03, 2.0, 10),
                new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.2 })
            );
            pole.position.set(x, 1.0, z);
            this.root.add(pole);

            const flag = new THREE.Mesh(
                new THREE.PlaneGeometry(0.6, 0.35),
                new THREE.MeshStandardMaterial({
                    color: teamColor,
                    side: THREE.DoubleSide,
                    roughness: 0.7
                })
            );
            flag.position.set(x + Math.sign(x || 1) * 0.28, 1.7, z);
            flag.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
            this.root.add(flag);
        };

        const cornerX = Math.max(1, this.pitch.halfWidth - 0.5);
        const cornerZ = Math.max(1, this.pitch.halfDepth - 0.5);
        addFlag(-cornerX, -cornerZ, 0xff3a3a);
        addFlag(cornerX, -cornerZ, 0x2d7dff);
        addFlag(-cornerX, cornerZ, 0x2d7dff);
        addFlag(cornerX, cornerZ, 0xff3a3a);
    }

    initFloodlights() {
        // Lightweight atmosphere lights (main shadow sun is in World.js)
        const sun = new THREE.DirectionalLight(0xffffee, 0.75);
        sun.position.set(-50, 100, -50);
        sun.castShadow = false;

        this.root.add(sun);

        const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x8B7355, 0.32);
        this.root.add(hemiLight);

        const hazeLight = new THREE.DirectionalLight(0x87CEEB, 0.18);
        hazeLight.position.set(100, 50, 100);
        hazeLight.castShadow = false;
        this.root.add(hazeLight);

        this.atmoLights = { sun, hemi: hemiLight, haze: hazeLight };
        this.atmoDefaults = { sun: sun.intensity, hemi: hemiLight.intensity, haze: hazeLight.intensity };

        // 4. Decorative Floodlight Poles (Visual only for daytime)
        const addPole = (x, z) => {
            const poleGeo = new THREE.CylinderGeometry(0.3, 0.6, 25);
            const poleMat = new THREE.MeshStandardMaterial({ 
                color: 0x444444,
                roughness: 0.8,
                metalness: 0.2
            });
            const pole = new THREE.Mesh(poleGeo, poleMat);
            pole.position.set(x, 12.5, z);
            pole.castShadow = false;
            pole.receiveShadow = true;
            this.root.add(pole);

            // Head (decorative, not emitting light)
            const headGeo = new THREE.BoxGeometry(4, 2, 1);
            const headMat = new THREE.MeshStandardMaterial({ 
                color: 0x333333,
                roughness: 0.9,
                metalness: 0.1
            });
            const head = new THREE.Mesh(headGeo, headMat);
            head.position.set(x, 25, z);
            head.lookAt(0, 0, 0);
            head.castShadow = false;
            this.root.add(head);
        };

        const poleX = this.pitch.halfWidth + 6;
        const poleZ = Math.max(30, this.pitch.halfDepth - 9);
        addPole(poleX, poleZ);
        addPole(-poleX, poleZ);
        addPole(poleX, -poleZ);
        addPole(-poleX, -poleZ);
    }

    initCeiling() {
        // Physical ceiling to keep ball inside
        const ceilingShape = new CANNON.Plane();
        const ceilingBody = new CANNON.Body({ mass: 0 });
        ceilingBody.addShape(ceilingShape);
        ceilingBody.position.set(0, 15, 0);
        ceilingBody.quaternion.setFromEuler(Math.PI / 2, 0, 0);
        this.world.physicsWorld.addBody(ceilingBody);
        this.physicsBodies.push(ceilingBody);
    }

    initClouds() {
        // Create multiple cloud layers for depth
        this.createCloudLayer(80, 0.002, 0.8, 0.9, 8);  // High distant clouds
        this.createCloudLayer(60, 0.005, 0.7, 0.8, 6);  // Mid-level clouds
        this.createCloudLayer(40, 0.008, 0.6, 0.7, 4);  // Lower closer clouds
    }

    createCloudLayer(height, speed, opacityMin, opacityMax, cloudCount) {
        const cloudGroup = new THREE.Group();
        
        for (let i = 0; i < cloudCount; i++) {
            const cloud = this.createCloud();
            cloud.position.set(
                (Math.random() - 0.5) * 200,
                height + Math.random() * 10 - 5,
                (Math.random() - 0.5) * 200
            );
            cloud.scale.setScalar(0.5 + Math.random() * 1.5);
            cloud.userData = {
                speed: speed * (0.8 + Math.random() * 0.4),
                baseX: cloud.position.x,
                baseZ: cloud.position.z
            };
            cloudGroup.add(cloud);
        }
        
        this.clouds.push({
            group: cloudGroup,
            height: height,
            speed: speed
        });
        
        this.root.add(cloudGroup);
    }

    createCloud() {
        // Create a fluffy cloud using multiple spheres
        const cloudGroup = new THREE.Group();
        const cloudMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            roughness: 1.0
        });

        // Create cloud puffs using spheres
        const puffCount = 5 + Math.floor(Math.random() * 3);
        for (let i = 0; i < puffCount; i++) {
            const puffGeometry = new THREE.SphereGeometry(3 + Math.random() * 2, 6, 4);
            const puff = new THREE.Mesh(puffGeometry, cloudMaterial);
            
            // Arrange puffs in a cloud-like formation
            const angle = (i / puffCount) * Math.PI * 2;
            const radius = 2 + Math.random() * 3;
            puff.position.set(
                Math.cos(angle) * radius,
                Math.random() * 2 - 1,
                Math.sin(angle) * radius
            );
            
            cloudGroup.add(puff);
        }

        return cloudGroup;
    }

    updateClouds(delta) {
        this.cloudTime += delta;
        
        this.clouds.forEach((cloudLayer) => {
            cloudLayer.group.children.forEach((cloud) => {
                // Move clouds horizontally
                cloud.position.x = cloud.userData.baseX + 
                    Math.sin(this.cloudTime * cloud.userData.speed) * 30;
                cloud.position.z = cloud.userData.baseZ + 
                    this.cloudTime * cloud.userData.speed * 10;
                
                // Wrap clouds around when they go too far
                if (cloud.position.z > 100) {
                    cloud.position.z = -100;
                    cloud.userData.baseZ = cloud.position.z;
                }
                
                // Subtle vertical movement
                cloud.position.y = cloudLayer.height + 
                    Math.sin(this.cloudTime * 0.5 + cloud.userData.baseX) * 2;
            });
        });
    }


    initSpectatorSeats() {
        const seats = [];
        let id = 0;

        const addSeat = (x, y, z, lookX = 0, lookY = 2.5, lookZ = 0) => {
            seats.push({
                id,
                position: new THREE.Vector3(x, y, z),
                lookAt: new THREE.Vector3(lookX, lookY, lookZ)
            });
            id += 1;
        };

        const yMain = 8;
        const zOuter = this.pitch.halfDepth + 13;
        const xSpan = Math.max(20, this.pitch.halfWidth * 0.85);
        for (let x = -xSpan; x <= xSpan; x += 4) {
            addSeat(x, yMain, -zOuter);
            addSeat(x, yMain, zOuter);
        }

        const zSpan = Math.max(30, this.pitch.halfDepth * 0.75);
        const xOuter = this.pitch.halfWidth + 10;
        for (let z = -zSpan; z <= zSpan; z += 4) {
            addSeat(-xOuter, yMain - 1, z);
            addSeat(xOuter, yMain - 1, z);
        }

        this.spectatorSeats = seats;
    }

    getSpectatorSeat(seatId = 0) {
        if (!this.spectatorSeats.length) {
            return null;
        }

        const idx = ((Math.floor(seatId) % this.spectatorSeats.length) + this.spectatorSeats.length) % this.spectatorSeats.length;
        return this.spectatorSeats[idx];
    }

    updateAtmosphere() {
        const pulse = 0.65 + 0.35 * Math.sin(this.cloudTime * 0.6);
        for (let i = 0; i < this.adBoards.length; i += 1) {
            const board = this.adBoards[i];
            if (!board.material || !board.material.emissive) continue;
            board.material.emissiveIntensity = 0.2 + pulse * 0.35;
        }

        if (this.skyDome) {
            this.skyDome.rotation.y += 0.00025;
        }
    }

    update(delta = 0.016) {
        if (this.featureGates.cloudsEnabled) {
            this.cloudUpdateAccumulator += delta;
            const updateEvery = this.featureGates.stabilizationMode ? 0.12 : 0.05;
            if (this.cloudUpdateAccumulator >= updateEvery) {
                this.updateClouds(this.cloudUpdateAccumulator);
                this.cloudUpdateAccumulator = 0;
            }
        }

        if (this.featureGates.atmosphereEnabled) {
            this.updateAtmosphere();
        }
    }
}

