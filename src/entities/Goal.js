import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Goal {
    constructor(world, position, rotation = 0, parent = null) {
        this.world = world;
        this.position = position;
        this.rotation = rotation;
        this.parent = parent;
        this.bodies = [];

        this.initVisuals();
        this.initPhysics();
    }

    initVisuals() {
        const group = new THREE.Group();

        // Goal dimensions (Smaller, Pro size)
        const width = 10.0;
        const height = 2.35;
        const depth = 2.4;

        // Goal posts (Metal cylinders)
        const postGeometry = new THREE.CylinderGeometry(0.09, 0.09, height, 16);
        const postMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.4,
            metalness: 0.3,
        });

        // Left post
        const leftPost = new THREE.Mesh(postGeometry, postMaterial);
        leftPost.position.set(-width / 2, height / 2, 0);
        leftPost.castShadow = true;
        group.add(leftPost);

        // Right post
        const rightPost = new THREE.Mesh(postGeometry, postMaterial);
        rightPost.position.set(width / 2, height / 2, 0);
        rightPost.castShadow = true;
        group.add(rightPost);

        // Crossbar
        const crossbarGeometry = new THREE.CylinderGeometry(0.09, 0.09, width + 0.25, 16);
        const crossbar = new THREE.Mesh(crossbarGeometry, postMaterial);
        crossbar.position.set(0, height, 0);
        crossbar.rotation.z = Math.PI / 2;
        crossbar.castShadow = true;
        group.add(crossbar);

        const ropeMat = new THREE.LineBasicMaterial({ color: 0xdedede, transparent: true, opacity: 0.55 });
        const addRopeWire = (geometry, x, y, z, rx, ry, rz) => {
            const wire = new THREE.WireframeGeometry(geometry);
            const lines = new THREE.LineSegments(wire, ropeMat);
            lines.position.set(x, y, z);
            lines.rotation.set(rx, ry, rz);
            group.add(lines);
        };

        addRopeWire(new THREE.PlaneGeometry(width, height, 12, 10), 0, height / 2, -depth, 0, 0, 0);
        addRopeWire(new THREE.PlaneGeometry(width, depth, 12, 6), 0, height, -depth / 2, Math.PI / 2, 0, 0);
        addRopeWire(new THREE.PlaneGeometry(depth, height, 6, 10), -width / 2, height / 2, -depth / 2, 0, Math.PI / 2, 0);
        addRopeWire(new THREE.PlaneGeometry(depth, height, 6, 10), width / 2, height / 2, -depth / 2, 0, Math.PI / 2, 0);

        const netBackGeo = new THREE.PlaneGeometry(width, height);
        const netBackMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.4 });
        const netBack = new THREE.Mesh(netBackGeo, netBackMat);
        netBack.position.set(0, height / 2, -depth / 2 - 0.05);
        group.add(netBack);

        const sideGeo = new THREE.PlaneGeometry(depth, height);
        const leftSide = new THREE.Mesh(sideGeo, netBackMat);
        leftSide.position.set(-width / 2, height / 2, -depth / 2);
        leftSide.rotation.y = Math.PI / 2;
        group.add(leftSide);

        const rightSide = new THREE.Mesh(sideGeo, netBackMat);
        rightSide.position.set(width / 2, height / 2, -depth / 2);
        rightSide.rotation.y = -Math.PI / 2;
        group.add(rightSide);

        const topGeo = new THREE.PlaneGeometry(width, depth);
        const top = new THREE.Mesh(topGeo, netBackMat);
        top.position.set(0, height, -depth / 2);
        top.rotation.x = Math.PI / 2;
        group.add(top);

        // Support bars (Diagonal)
        const stayGeo = new THREE.CylinderGeometry(0.04, 0.04, Math.sqrt(depth * depth + height * height), 8);
        const stayMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

        const leftStay = new THREE.Mesh(stayGeo, stayMat);
        leftStay.position.set(-width / 2, height / 2, -depth / 2);
        leftStay.rotation.x = Math.atan2(depth, height);
        group.add(leftStay);

        const rightStay = new THREE.Mesh(stayGeo, stayMat);
        rightStay.position.set(width / 2, height / 2, -depth / 2);
        rightStay.rotation.x = Math.atan2(depth, height);
        group.add(rightStay);

        group.position.set(this.position.x, this.position.y, this.position.z);
        group.rotation.y = this.rotation;

        this.mesh = group;
        if (this.parent) {
            this.parent.add(this.mesh);
        } else {
            this.world.scene.add(this.mesh);
        }
    }

    initPhysics() {
        const width = 10.0;
        const height = 2.35;
        const depth = 2.4;

        // Visual is built facing -Z local.
        // Rotation handling via quaternion/position logic.

        const addPart = (size, pos) => {
            const body = new CANNON.Body({ mass: 0 });
            body.addShape(new CANNON.Box(size));

            // Rotate position vector by goal rotation
            const vec = new THREE.Vector3(pos.x, pos.y, pos.z);
            vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation);

            body.position.set(
                this.position.x + vec.x,
                this.position.y + vec.y,
                this.position.z + vec.z
            );

            body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), this.rotation);
            this.world.physicsWorld.addBody(body);
            this.bodies.push(body);
        };

        // Posts (Collider approximation)
        addPart(new CANNON.Vec3(0.1, height / 2, 0.1), { x: -width / 2, y: height / 2, z: 0 }); // Left Post
        addPart(new CANNON.Vec3(0.1, height / 2, 0.1), { x: width / 2, y: height / 2, z: 0 }); // Right Post
        addPart(new CANNON.Vec3(width / 2, 0.1, 0.1), { x: 0, y: height, z: 0 }); // Crossbar
    }

    update() { }

    dispose() {
        if (this.mesh) {
            const parent = this.mesh.parent || this.parent || this.world.scene;
            parent?.remove?.(this.mesh);

            this.mesh.traverse((obj) => {
                if (!obj || !obj.isMesh) return;
                obj.geometry?.dispose?.();

                if (Array.isArray(obj.material)) {
                    for (const m of obj.material) {
                        m?.dispose?.();
                    }
                } else {
                    obj.material?.dispose?.();
                }
            });

            this.mesh = null;
        }

        if (this.bodies?.length) {
            for (const body of this.bodies) {
                try {
                    this.world.physicsWorld.removeBody(body);
                } catch { }
            }
        }
        this.bodies = [];
    }
}
