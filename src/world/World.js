import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Stadium } from '../environment/Stadium.js';
import { Ball } from '../entities/Ball.js';
import { Player } from '../entities/Player.js';

export class World {
  constructor(container) {
    this.container = container;
    this.clientPhysicsEnabled = false;
    this.matchConfig = null;
    this.weatherMode = 'day';
    this.isMobile = (() => {
      try {
        if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true;
      } catch {
        // ignore
      }
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    })();

    this.frameCount = 0;
    this.fpsTimer = performance.now();
    this.fpsAccum = 0;
    this.fpsSampleCount = 0;
    this.fpsAvg = 0;
    this.maxFrameSamples = 300;
    this.frameMsRing = new Float32Array(this.maxFrameSamples);
    this.frameMsRingCount = 0;
    this.frameMsRingIndex = 0;
    this.frameP95 = 0;
    this.shadowUpdateAccumulator = 0;
    this.shadowUpdateInterval = 1 / 20;
    this.lastCameraPos = new THREE.Vector3();
    this.cameraMotion = 0;
    this.perfFlags = {
      stabilizationMode: false,
      replayEnabled: true,
      cloudsEnabled: true,
      atmosphereEnabled: true
    };

    this.initScene();
    this.initPhysics();
    this.initLights();
    this.initCamera();
    this.initRenderer();
    this.initUI();

    this.stadium = new Stadium(this);

    this.ball = new Ball(this, { x: 0, y: 2, z: 0 });
    this.player = new Player(this, { x: 0, y: 0.92, z: 5 });

    window.addEventListener('resize', () => this.onWindowResize(), false);

    this.applyPerfFlags(window.__perfFlags || null);
  }

  setMatchConfig(matchConfig) {
    this.matchConfig = matchConfig || null;
    const pitch = matchConfig?.pitch || null;
    const weatherMode = `${matchConfig?.weather?.mode || ''}`.toLowerCase();
    if (weatherMode === 'day' || weatherMode === 'night') {
      this.applyWeatherMode(weatherMode);
    }

    if (pitch && this.sunLight?.shadow?.camera) {
      const size = Math.max(85, Math.max(Number(pitch.halfWidth) || 24, Number(pitch.halfDepth) || 39) * 2.6);
      this.sunLight.shadow.camera.left = -size;
      this.sunLight.shadow.camera.right = size;
      this.sunLight.shadow.camera.top = size;
      this.sunLight.shadow.camera.bottom = -size;
      this.sunLight.shadow.camera.updateProjectionMatrix?.();
      this.renderer.shadowMap.needsUpdate = true;
    }

    if (pitch && this.stadium?.rebuild) {
      this.stadium.rebuild(pitch);
    }
  }

  initUI() {
    this.ui = {
      powerBarContainer: document.getElementById('power-bar-container'),
      powerBar: document.getElementById('power-bar'),
      staminaBar: document.getElementById('stamina-bar'),
      fpsLabel: document.getElementById('fps-label')
    };
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x8ec3e0);
    this.scene.fog = new THREE.Fog(0x8ec3e0, 95, 330);
  }

  initPhysics() {
    this.physicsWorld = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0)
    });

    const defaultMaterial = new CANNON.Material('default');
    const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
      friction: 0.32,
      restitution: 0.2
    });
    this.physicsWorld.addContactMaterial(defaultContactMaterial);
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0x3f4a5a, 0.72);
    this.ambientLight = ambientLight;
    this.scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0x8fd0ff, 0x55704a, 0.52);
    this.hemisphereLight = hemisphereLight;
    this.scene.add(hemisphereLight);

    const sunLight = new THREE.DirectionalLight(0xfff4df, 1.28);
    sunLight.position.set(52, 95, 38);
    this.sunLight = sunLight;
    sunLight.castShadow = true;
    sunLight.shadow.bias = -0.00018;
    sunLight.shadow.normalBias = 0.025;
    sunLight.shadow.radius = 2.5;
    sunLight.shadow.mapSize.width = this.isMobile ? 1024 : 2048;
    sunLight.shadow.mapSize.height = this.isMobile ? 1024 : 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 260;
    sunLight.shadow.camera.left = -85;
    sunLight.shadow.camera.right = 85;
    sunLight.shadow.camera.top = 85;
    sunLight.shadow.camera.bottom = -85;
    this.scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0xbcd8ff, 0.24);
    rimLight.position.set(-40, 32, -28);
    rimLight.castShadow = false;
    this.rimLight = rimLight;
    this.scene.add(rimLight);
  }

  applyWeatherMode(mode) {
    const next = `${mode || ''}`.toLowerCase() === 'night' ? 'night' : 'day';
    if (this.weatherMode === next) {
      // Still propagate to stadium in case it was rebuilt.
      this.stadium?.setWeatherMode?.(this.weatherMode);
      return;
    }

    this.weatherMode = next;

    if (this.weatherMode === 'night') {
      this.scene.background = new THREE.Color(0x070b12);
      this.scene.fog = new THREE.Fog(0x070b12, 70, 260);

      if (this.sunLight) {
        this.sunLight.color.setHex(0xaac7ff);
        this.sunLight.intensity = 0.42;
      }
      if (this.ambientLight) {
        this.ambientLight.color.setHex(0x223048);
        this.ambientLight.intensity = 0.38;
      }
      if (this.hemisphereLight) {
        this.hemisphereLight.color.setHex(0x284b70);
        this.hemisphereLight.groundColor.setHex(0x0b0f12);
        this.hemisphereLight.intensity = 0.36;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x7fb0ff);
        this.rimLight.intensity = 0.14;
      }

      if (this.renderer) {
        this.renderer.toneMappingExposure = 0.95;
        this.renderer.shadowMap.needsUpdate = true;
      }
    } else {
      this.scene.background = new THREE.Color(0x8ec3e0);
      this.scene.fog = new THREE.Fog(0x8ec3e0, 95, 330);

      if (this.sunLight) {
        this.sunLight.color.setHex(0xfff4df);
        this.sunLight.intensity = 1.28;
      }
      if (this.ambientLight) {
        this.ambientLight.color.setHex(0x3f4a5a);
        this.ambientLight.intensity = 0.72;
      }
      if (this.hemisphereLight) {
        this.hemisphereLight.color.setHex(0x8fd0ff);
        this.hemisphereLight.groundColor.setHex(0x55704a);
        this.hemisphereLight.intensity = 0.52;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0xbcd8ff);
        this.rimLight.intensity = 0.24;
      }

      if (this.renderer) {
        this.renderer.toneMappingExposure = 1.12;
        this.renderer.shadowMap.needsUpdate = true;
      }
    }

    this.stadium?.setWeatherMode?.(this.weatherMode);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 18, 34);
    this.camera.lookAt(0, 0, 0);
    this.lastCameraPos.copy(this.camera.position);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    const cap = this.isMobile ? 0.85 : 1.0;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, cap));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);
  }

  applyPerfFlags(perfFlags) {
    if (!perfFlags || typeof perfFlags !== 'object') {
      return;
    }

    this.perfFlags = {
      ...this.perfFlags,
      ...perfFlags
    };

    const stabilization = !!this.perfFlags.stabilizationMode;
    this.shadowUpdateInterval = stabilization ? 0.22 : (1 / 20);
    const baseCap = stabilization ? 0.9 : 1.0;
    const mobileCap = this.isMobile ? 0.85 : 1.0;
    const targetPixelRatio = Math.min(window.devicePixelRatio, baseCap * mobileCap);
    this.renderer?.setPixelRatio(targetPixelRatio);
    this.stadium?.applyFeatureGates?.(this.perfFlags);
  }

  getPerfMetrics() {
    return {
      fpsAvg: this.fpsAvg,
      frameP95: this.frameP95
    };
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  update(delta) {
    if (this.clientPhysicsEnabled) {
      this.physicsWorld.step(1 / 60, delta, 1);
    }

    const frameMs = Math.max(0.1, delta * 1000);
    this.frameMsRing[this.frameMsRingIndex] = frameMs;
    this.frameMsRingIndex = (this.frameMsRingIndex + 1) % this.maxFrameSamples;
    this.frameMsRingCount = Math.min(this.maxFrameSamples, this.frameMsRingCount + 1);

    this.stadium?.update(delta);
    this.ball?.update();

    if (this.player) {
      this.player.update(delta);

      if (this.ui.powerBarContainer) {
        if (this.player.isCharging) {
          this.ui.powerBarContainer.style.display = 'block';
          this.ui.powerBar.style.width = `${this.player.chargeRatio * 100}%`;
        } else {
          this.ui.powerBarContainer.style.display = 'none';
        }
      }
    }

    const cameraStep = this.camera.position.distanceTo(this.lastCameraPos);
    this.cameraMotion = THREE.MathUtils.lerp(this.cameraMotion, cameraStep, 1 - Math.exp(-10 * delta));
    this.lastCameraPos.copy(this.camera.position);

    this.shadowUpdateAccumulator += delta;
    let shadowInterval = this.shadowUpdateInterval;
    if (this.cameraMotion > 0.16) {
      shadowInterval *= 2.2;
    } else if (this.cameraMotion > 0.08) {
      shadowInterval *= 1.5;
    }

    if (this.shadowUpdateAccumulator >= shadowInterval) {
      this.shadowUpdateAccumulator = 0;
      this.renderer.shadowMap.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
    this.updateFpsLabel();
  }

  updateFpsLabel() {
    if (!this.ui.fpsLabel) return;

    this.frameCount += 1;
    const now = performance.now();
    if (now - this.fpsTimer < 500) return;

    const fps = Math.round((this.frameCount * 1000) / (now - this.fpsTimer));
    this.ui.fpsLabel.textContent = `FPS: ${fps}`;

    this.fpsAccum += fps;
    this.fpsSampleCount += 1;
    this.fpsAvg = this.fpsSampleCount > 0 ? (this.fpsAccum / this.fpsSampleCount) : fps;
    if (this.fpsSampleCount > 80) {
      this.fpsAccum *= 0.5;
      this.fpsSampleCount = Math.ceil(this.fpsSampleCount * 0.5);
    }

    if (this.frameMsRingCount > 10) {
      const sorted = Array.from(this.frameMsRing.subarray(0, this.frameMsRingCount)).sort((a, b) => a - b);
      const idx = Math.min(sorted.length - 1, Math.floor(sorted.length * 0.95));
      this.frameP95 = sorted[idx];
    }

    this.frameCount = 0;
    this.fpsTimer = now;
  }
}
