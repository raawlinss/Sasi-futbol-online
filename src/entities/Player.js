import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { ACTION_TYPES } from '../../shared/protocol/index.js';
import { shortestAngleDiff, stepCharacterMotion, wrapAngle } from '../../shared/sim/movementCore.js';
import { getFaceAtlas } from '../visual/FaceAtlas.js';

const ACTIVE_PLAYER_Y = 0.92;

function angleLerp(current, target, alpha) {
  const diff = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + diff * alpha;
}

function getStatePosition(state) {
  if (!state) return null;
  if (state.pos) return state.pos;
  if (state.position) return state.position;
  return null;
}

function getStateYaw(state) {
  if (!state) return 0;
  if (Number.isFinite(state.yaw)) return state.yaw;
  if (Number.isFinite(state.rotation)) return state.rotation;
  return 0;
}

export class Player {
  constructor(world, position = { x: 0, y: ACTIVE_PLAYER_Y, z: 5 }) {
    this.world = world;

    this.maxSpeed = 17;
    this.sprintSpeed = 24;
    this.accelRate = 18;
    this.frictionRate = 10.5;
    this.rotationSmoothing = 13.5;
    this.maxTurnRateRad = 6.5;
    this.lookSensitivity = 0.0026;
    this.cameraAngle = { x: -0.2, y: 0 };
    this.defaultCameraPitch = -0.2;
    this.modelYawOffset = 0;
    this.bodyYaw = 0;
    this.simBasisYaw = this.cameraAngle.y;
    this.movementMode = 'basis_yaw';
    this.planarVelocity = { x: 0, z: 0 };
    this.activeGroundY = ACTIVE_PLAYER_Y;
    this.fixedStep = 1 / 60;
    this.moveAccumulator = 0;
    this.networkAccumulator = 0;
    this.tmpTargetPos = new THREE.Vector3();
    this.tmpQuat = new THREE.Quaternion();
    this.upAxis = new THREE.Vector3(0, 1, 0);
    this.tmpCamOffset = new THREE.Vector3();
    this.tmpCamTarget = new THREE.Vector3();
    this.tmpLookTarget = new THREE.Vector3();
    this.renderPos = new THREE.Vector3();
    this.slideDir = { x: 0, z: 1 };
    this.slideSpeed = 0;

    this.physicsHalfHeight = 0.9;
    this.visualOffsetY = 0;
    this.extraFootLift = -0.02;

    this.stamina = 1;
    this.canSprint = true;

    this.shotChargeTime = 0;
    this.maxChargeTime = 1.0;
    this.chargeRatio = 0;
    this.isCharging = false;

    this.curveCharge = 0;
    this.maxCurve = 0.9;
    this.curveRate = 2.6;

    this.keys = {};
    this.keyEdge = {};
    this.walkCycle = 0;

    this.isSliding = false;
    this.slideTime = 0;
    this.slideCooldown = 0;

    this.isGoalkeeper = false;
    this.role = 'active';
    this.isSpectator = false;
    this.seatId = null;

    this.lastInputSeq = 0;
    this.lastAckSeq = 0;
    this.localTick = 0;
    this.pendingInputs = [];
    this.maxPendingInputs = 240;
    this.hardSnapDist = 1.2;
    this.softMinDist = 0.10;
    this.correctionSamples = [];
    this.maxCorrectionSamples = 180;
    this.lastCorrectionP95 = 0;

    this.lastServerSnapshot = 0;
    this.wasSpectatorMode = false;
    this.lastMouseMoveAt = performance.now();
    this.rearLockDelayMs = 250;
    this.rearLockDurationSec = 0.6;
    this.rearLockActive = true;

    this.faceSeed = null;
    this.faceAtlas = null;
    this.facePlane = null;
    this.faceMat = null;
    this.faceTex = null;

    this.nick = '';
    this.nameTagSprite = null;

    this.emoteSprite = null;
    this.emoteUntilMs = 0;

    // Mobile/touch inputs (analog).
    this.mobileMoveX = 0;
    this.mobileMoveZ = 0;

    this.initVisuals();
    this.initPhysics(position);
    this.initControls();
    this.initCurveArrow();
    this.renderPos.set(position.x, this.activeGroundY, position.z);
  }

  getLockedHeadingYaw(team = this.team) {
    return team === 'blue' ? Math.PI : 0;
  }

  setServerState(serverPlayer, ackSeq = null) {
    if (!serverPlayer) return;

    if (Number.isFinite(ackSeq)) {
      if (ackSeq < this.lastAckSeq) {
        return;
      }
      this.lastAckSeq = Math.max(this.lastAckSeq, ackSeq);
      while (this.pendingInputs.length && this.pendingInputs[0].seq <= ackSeq) {
        this.pendingInputs.shift();
      }
    }

    this.lastServerSnapshot = performance.now();
    const movingNow = (
      !!this.keys['w'] || !!this.keys['arrowup']
      || !!this.keys['s'] || !!this.keys['arrowdown']
      || !!this.keys['a'] || !!this.keys['arrowleft']
      || !!this.keys['d'] || !!this.keys['arrowright']
    );

    this.role = serverPlayer.role || this.role;
    this.isSpectator = this.role === 'spectator' || !!serverPlayer.isSpectator;
    this.seatId = Number.isInteger(serverPlayer.seatId) ? serverPlayer.seatId : null;
    this.isGoalkeeper = !!serverPlayer.isGoalkeeper;
    if (this.isSpectator) {
      this.pendingInputs.length = 0;
    }

    if (Number.isFinite(serverPlayer.stamina)) {
      this.stamina = Math.max(0, Math.min(1, serverPlayer.stamina));
      this.canSprint = this.stamina > 0.08;
    }

    if (serverPlayer.team && serverPlayer.team !== this.team) {
      this.team = serverPlayer.team;
      const color = this.team === 'red' ? 0xff3030 : this.team === 'blue' ? 0x3088ff : 0x888888;
      this.bodyMat.color.setHex(color);
      this.armMat.color.setHex(color);
    }

    if (`${serverPlayer.nick || ''}` && serverPlayer.nick !== this.nick) {
      this.nick = serverPlayer.nick;
      this.redrawNameTag();
    }

    if (serverPlayer.actionState?.isSliding) {
      this.isSliding = true;
      const dirX = Number(serverPlayer.actionState.slideDirX);
      const dirZ = Number(serverPlayer.actionState.slideDirZ);
      if (Number.isFinite(dirX) && Number.isFinite(dirZ)) {
        const len = Math.hypot(dirX, dirZ);
        if (len > 1e-5) {
          this.slideDir.x = dirX / len;
          this.slideDir.z = dirZ / len;
        }
      }

      const speed = Number(serverPlayer.actionState.slideSpeed);
      if (Number.isFinite(speed) && speed > 0) {
        this.slideSpeed = speed;
      }
      this.slideTime = Math.max(this.slideTime, 0.08);
    } else if (this.slideTime <= 0) {
      this.isSliding = false;
      this.slideSpeed = 0;
    }

    const pos = getStatePosition(serverPlayer);
    if (pos && this.body) {
      const serverVel = serverPlayer.vel || serverPlayer.velocity;
      let targetState = {
        posX: Number(pos.x) || 0,
        posZ: Number(pos.z) || 0,
        velX: Number(serverVel?.x) || 0,
        velZ: Number(serverVel?.z) || 0,
        yaw: getStateYaw(serverPlayer),
        stamina: this.stamina,
        slideActive: this.isSliding && this.slideTime > 0,
        slideDirX: this.slideDir.x,
        slideDirZ: this.slideDir.z,
        slideSpeed: this.slideSpeed
      };

      if (!this.isSpectator && this.pendingInputs.length > 0) {
        const movementConfig = this.getMovementConfig();
        for (const frame of this.pendingInputs) {
          targetState = stepCharacterMotion(
            targetState,
            frame.input,
            movementConfig,
            frame.dt
          );
        }
      }

      const errX = targetState.posX - this.body.position.x;
      const errZ = targetState.posZ - this.body.position.z;
      const err = Math.hypot(errX, errZ);
      const targetY = this.isSpectator ? pos.y : this.activeGroundY;

      if (this.isSpectator || err > this.hardSnapDist) {
        this.body.position.set(targetState.posX, targetY, targetState.posZ);
        this.planarVelocity.x = targetState.velX;
        this.planarVelocity.z = targetState.velZ;
        this.bodyYaw = wrapAngle(targetState.yaw);
        this.recordCorrectionSample(err);
      } else if (err >= this.softMinDist) {
        const t = Math.min(1, Math.max(0, (err - this.softMinDist) / (this.hardSnapDist - this.softMinDist)));
        let correction = movingNow
          ? THREE.MathUtils.lerp(0.035, 0.14, t)
          : THREE.MathUtils.lerp(0.14, 0.30, t);
        this.body.position.x += errX * correction;
        this.body.position.z += errZ * correction;
        this.body.position.y = targetY;
        this.recordCorrectionSample(err);
      } else {
        this.body.position.y = targetY;
      }

      const velBlend = movingNow ? 0.16 : 0.28;
      this.planarVelocity.x = THREE.MathUtils.lerp(this.planarVelocity.x, targetState.velX, velBlend);
      this.planarVelocity.z = THREE.MathUtils.lerp(this.planarVelocity.z, targetState.velZ, velBlend);

      const yawBlend = movingNow ? 0.14 : 0.3;
      this.bodyYaw = wrapAngle(angleLerp(
        this.bodyYaw,
        targetState.yaw,
        yawBlend
      ));
      this.stamina = targetState.stamina;
    }

    if (Number.isFinite(serverPlayer.faceSeed)) {
      this.applyFaceSeed(serverPlayer.faceSeed);
    }
  }

  initVisuals() {
    const group = new THREE.Group();
    this.mesh = group;
    group.scale.set(1.18, 1.18, 1.18);

    this.torsoGroup = new THREE.Group();
    group.add(this.torsoGroup);

    this.addNameTag();
    this.addEmoteBubble();

    const bodyGeo = new THREE.BoxGeometry(0.6, 0.7, 0.35);
    this.bodyMat = new THREE.MeshStandardMaterial({ color: 0x3088ff, roughness: 0.6, metalness: 0.08 });
    this.chest = new THREE.Mesh(bodyGeo, this.bodyMat);
    this.chest.position.y = 0.45;
    this.torsoGroup.add(this.chest);

    const pelvisGeo = new THREE.BoxGeometry(0.5, 0.2, 0.3);
    const pelvisMat = new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.8 });
    this.pelvis = new THREE.Mesh(pelvisGeo, pelvisMat);
    this.pelvis.position.y = 0.05;
    this.torsoGroup.add(this.pelvis);

    const headGeo = new THREE.SphereGeometry(0.22, 20, 20);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.45 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 0.9;
    this.torsoGroup.add(this.head);

    // Face decal (random per player, server-seeded). Unlit so it stays readable under shadows.
    const faceGeo = new THREE.PlaneGeometry(0.62, 0.62);
    this.faceMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      alphaTest: 0.12,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });
    this.faceMat.toneMapped = false;
    this.facePlane = new THREE.Mesh(faceGeo, this.faceMat);
    this.facePlane.position.set(0, 0.9, 0.28);
    this.facePlane.castShadow = false;
    this.facePlane.receiveShadow = false;
    this.torsoGroup.add(this.facePlane);

    const hairGeo = new THREE.SphereGeometry(0.225, 18, 14);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x2b1c10, roughness: 0.85 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 1.02;
    hair.scale.set(1.0, 0.58, 1.0);
    this.torsoGroup.add(hair);

    const eyeGeo = new THREE.SphereGeometry(0.02, 8, 8);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1f2c3a, roughness: 0.2, metalness: 0.2 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.06, 0.9, 0.2);
    this.torsoGroup.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.06, 0.9, 0.2);
    this.torsoGroup.add(rightEye);

    const jerseyStripeGeo = new THREE.BoxGeometry(0.06, 0.7, 0.02);
    const jerseyStripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const stripeLeft = new THREE.Mesh(jerseyStripeGeo, jerseyStripeMat);
    stripeLeft.position.set(-0.1, 0.45, 0.18);
    this.torsoGroup.add(stripeLeft);
    const stripeRight = new THREE.Mesh(jerseyStripeGeo, jerseyStripeMat);
    stripeRight.position.set(0.1, 0.45, 0.18);
    this.torsoGroup.add(stripeRight);

    const limbMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.75 });
    const thighGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.45, 10);
    const calfGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.45, 10);
    const footGeo = new THREE.BoxGeometry(0.3, 0.1, 0.3);
    const footMat = new THREE.MeshStandardMaterial({ color: 0xf1f1f1, roughness: 0.7 });

    this.leftThigh = new THREE.Group();
    this.leftThigh.position.set(-0.18, 0.05, 0);
    const lThigh = new THREE.Mesh(thighGeo, limbMat);
    lThigh.position.y = -0.225;
    this.leftThigh.add(lThigh);
    this.torsoGroup.add(this.leftThigh);

    this.leftCalf = new THREE.Group();
    this.leftCalf.position.y = -0.45;
    const lCalf = new THREE.Mesh(calfGeo, limbMat);
    lCalf.position.y = -0.225;
    this.leftCalf.add(lCalf);
    this.leftThigh.add(this.leftCalf);

    this.leftFoot = new THREE.Mesh(footGeo, footMat);
    this.leftFoot.position.set(0, -0.45, 0.05);
    this.leftCalf.add(this.leftFoot);

    this.rightThigh = new THREE.Group();
    this.rightThigh.position.set(0.18, 0.05, 0);
    const rThigh = new THREE.Mesh(thighGeo, limbMat);
    rThigh.position.y = -0.225;
    this.rightThigh.add(rThigh);
    this.torsoGroup.add(this.rightThigh);

    this.rightCalf = new THREE.Group();
    this.rightCalf.position.y = -0.45;
    const rCalf = new THREE.Mesh(calfGeo, limbMat);
    rCalf.position.y = -0.225;
    this.rightCalf.add(rCalf);
    this.rightThigh.add(this.rightCalf);

    this.rightFoot = new THREE.Mesh(footGeo, footMat);
    this.rightFoot.position.set(0, -0.45, 0.05);
    this.rightCalf.add(this.rightFoot);

    const armGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.4, 10);
    this.armMat = new THREE.MeshStandardMaterial({ color: 0x3088ff, roughness: 0.65 });

    this.leftUpperArm = new THREE.Group();
    this.leftUpperArm.position.set(-0.35, 0.7, 0);
    const lUpper = new THREE.Mesh(armGeo, this.armMat);
    lUpper.position.y = -0.2;
    this.leftUpperArm.add(lUpper);
    this.torsoGroup.add(this.leftUpperArm);

    this.leftForearm = new THREE.Group();
    this.leftForearm.position.y = -0.4;
    const lFore = new THREE.Mesh(armGeo, this.armMat);
    lFore.position.y = -0.2;
    this.leftForearm.add(lFore);
    this.leftUpperArm.add(this.leftForearm);

    this.rightUpperArm = new THREE.Group();
    this.rightUpperArm.position.set(0.35, 0.7, 0);
    const rUpper = new THREE.Mesh(armGeo, this.armMat);
    rUpper.position.y = -0.2;
    this.rightUpperArm.add(rUpper);
    this.torsoGroup.add(this.rightUpperArm);

    this.rightForearm = new THREE.Group();
    this.rightForearm.position.y = -0.4;
    const rFore = new THREE.Mesh(armGeo, this.armMat);
    rFore.position.y = -0.2;
    this.rightForearm.add(rFore);
    this.rightUpperArm.add(this.rightForearm);

    group.updateMatrixWorld(true);
    const bbox = new THREE.Box3().setFromObject(group);
    if (Number.isFinite(bbox.min.y)) {
      this.visualOffsetY = -this.physicsHalfHeight - bbox.min.y + this.extraFootLift;
    }

    group.traverse((obj) => {
      if (obj && obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    this.world.scene.add(group);
  }

  addNameTag() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    context.font = 'bold 38px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('', 128, 46);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
    this.nameTagSprite = new THREE.Sprite(spriteMat);
    this.nameTagSprite.position.y = 1.35;
    this.nameTagSprite.scale.set(2, 0.5, 1);
    this.nameTagSprite.renderOrder = 999;
    this.mesh.add(this.nameTagSprite);
  }

  redrawNameTag() {
    if (!this.nameTagSprite) return;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    context.font = 'bold 38px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText(this.nick || '', 128, 46);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const mat = this.nameTagSprite.material;
    if (mat && mat.map) {
      mat.map.dispose?.();
    }
    mat.map = texture;
    mat.needsUpdate = true;
  }

  addEmoteBubble() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 384;
    canvas.height = 96;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
    this.emoteSprite = new THREE.Sprite(spriteMat);
    this.emoteSprite.position.y = 1.75;
    this.emoteSprite.scale.set(2.4, 0.6, 1);
    this.emoteSprite.visible = false;
    this.emoteSprite.renderOrder = 999;
    this.mesh.add(this.emoteSprite);
  }

  showEmote(text, durationMs = 3000) {
    if (!this.emoteSprite) return;
    const t = `${text || ''}`.trim();
    if (!t) return;

    this.emoteUntilMs = performance.now() + Math.max(200, Number(durationMs) || 3000);

    const mat = this.emoteSprite.material;
    const map = mat?.map;
    const canvas = map?.image;
    if (!canvas) {
      this.emoteSprite.visible = true;
      return;
    }

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 3;
    const pad = 10;
    const r = 18;
    const w = canvas.width - pad * 2;
    const h = canvas.height - pad * 2;
    ctx.beginPath();
    ctx.moveTo(pad + r, pad);
    ctx.lineTo(pad + w - r, pad);
    ctx.quadraticCurveTo(pad + w, pad, pad + w, pad + r);
    ctx.lineTo(pad + w, pad + h - r);
    ctx.quadraticCurveTo(pad + w, pad + h, pad + w - r, pad + h);
    ctx.lineTo(pad + r, pad + h);
    ctx.quadraticCurveTo(pad, pad + h, pad, pad + h - r);
    ctx.lineTo(pad, pad + r);
    ctx.quadraticCurveTo(pad, pad, pad + r, pad);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 44px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(t.slice(0, 18), canvas.width / 2, canvas.height / 2);

    map.needsUpdate = true;
    this.emoteSprite.visible = true;
  }

  applyFaceSeed(seed) {
    const s = Number.isFinite(seed) ? Math.floor(seed) : 0;
    if (this.faceSeed === s) return;
    this.faceSeed = s;

    getFaceAtlas().then((atlas) => {
      this.faceAtlas = atlas;
      if (!this.faceMat) return;

      if (this.faceTex) {
        this.faceTex.dispose?.();
        this.faceTex = null;
      }
      this.faceTex = atlas.makeTextureForSeed(s);
      this.faceMat.map = this.faceTex;
      this.faceMat.needsUpdate = true;
    }).catch(() => {
      // ignore load failures, keep default head.
    });
  }

  initPhysics(position) {
    const shape = new CANNON.Sphere(0.55);
    this.body = new CANNON.Body({
      mass: 0,
      type: CANNON.Body.KINEMATIC,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      fixedRotation: true
    });
    this.body.addShape(shape);
    this.body.collisionResponse = false;
    this.world.physicsWorld.addBody(this.body);
  }

  initControls() {
    window.addEventListener('keydown', (e) => { this.keys[e.key.toLowerCase()] = true; });
    window.addEventListener('keyup', (e) => { this.keys[e.key.toLowerCase()] = false; });

    // Desktop: click to lock pointer. Mobile: pointer lock is not available; controls use touch UI.
    const mobileLike = (() => {
      try {
        if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true;
      } catch {
        // ignore
      }
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    })();
    this.world.renderer.domElement.addEventListener('click', () => {
      if (mobileLike) return;
      this.world.renderer.domElement.requestPointerLock?.();
    });

    window.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === this.world.renderer.domElement && !this.isSpectator) {
        this.applyLookDelta(e.movementX, e.movementY, 1.0);
      }
    });
  }

  setMobileMove(x, z) {
    this.mobileMoveX = Number.isFinite(x) ? Math.max(-1, Math.min(1, x)) : 0;
    this.mobileMoveZ = Number.isFinite(z) ? Math.max(-1, Math.min(1, z)) : 0;
  }

  applyLookDelta(dx, dy, scale = 1.0) {
    if (this.isSpectator) return;
    const s = Math.max(0.1, Number(scale) || 1.0);
    const mx = Number(dx) || 0;
    const my = Number(dy) || 0;

    this.cameraAngle.y -= mx * this.lookSensitivity * s;
    this.cameraAngle.x -= my * this.lookSensitivity * s;
    const minPitch = THREE.MathUtils.degToRad(-35);
    const maxPitch = THREE.MathUtils.degToRad(20);
    this.cameraAngle.x = Math.max(minPitch, Math.min(maxPitch, this.cameraAngle.x));
    this.lastMouseMoveAt = performance.now();
    this.rearLockActive = false;
  }

  initCurveArrow() {
    const curvePath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 2),
      new THREE.Vector3(0, 0, 4)
    ]);
    const tubeGeo = new THREE.TubeGeometry(curvePath, 10, 0.05, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0 });
    this.curveArrow = new THREE.Mesh(tubeGeo, tubeMat);
    this.curveArrow.position.y = 0.5;
    this.world.scene.add(this.curveArrow);
  }

  wasPressed(key) {
    const down = !!this.keys[key];
    const prev = !!this.keyEdge[key];
    this.keyEdge[key] = down;
    return down && !prev;
  }

  updateStaminaUI() {
    const uiStamina = this.world.ui?.staminaBar;
    if (!uiStamina) return;
    uiStamina.style.width = `${this.stamina * 100}%`;
    uiStamina.style.background = this.canSprint
      ? 'linear-gradient(90deg, #0099ff, #00ffff)'
      : '#4d4d4d';
  }

  getMovementConfig() {
    const pitch = window.network?.matchConfig?.pitch;
    const xLimit = (pitch?.halfWidth ?? 24) - 0.6;
    const zLimit = (pitch?.halfDepth ?? 39) - 0.6;
    return {
      walkSpeed: this.maxSpeed,
      sprintSpeed: this.sprintSpeed,
      accelGround: this.accelRate,
      friction: this.frictionRate,
      rotationSmoothing: this.rotationSmoothing,
      maxTurnRateRad: this.maxTurnRateRad,
      sprintDrain: 0.34,
      staminaRefill: 0.12,
      staminaMinSprint: 0.08,
      maxPlayerSpeed: 25,
      slideDecel: 28,
      slideStopSpeed: 0.25,
      xLimit,
      zLimit
    };
  }

  advanceSimBasisYaw(stepDt) {
    const dt = Math.max(0, Number(stepDt) || 0);
    if (dt <= 0) return;

    const maxDelta = 0.35 * (dt / this.fixedStep);
    const diff = shortestAngleDiff(this.simBasisYaw, this.cameraAngle.y);
    if (Math.abs(diff) > maxDelta) {
      this.simBasisYaw = wrapAngle(this.simBasisYaw + Math.sign(diff) * maxDelta);
    } else {
      this.simBasisYaw = wrapAngle(this.cameraAngle.y);
    }
  }

  recordCorrectionSample(distance) {
    if (!Number.isFinite(distance) || distance <= 0) return;
    this.correctionSamples.push(distance);
    if (this.correctionSamples.length > this.maxCorrectionSamples) {
      this.correctionSamples.shift();
    }
  }

  consumeCorrectionP95() {
    if (!this.correctionSamples.length) {
      return this.lastCorrectionP95;
    }
    const sorted = [...this.correctionSamples].sort((a, b) => a - b);
    const idx = Math.min(sorted.length - 1, Math.floor(sorted.length * 0.95));
    this.lastCorrectionP95 = sorted[idx];
    this.correctionSamples.length = 0;
    return this.lastCorrectionP95;
  }

  startLocalSlide() {
    const speed = Math.hypot(this.planarVelocity.x, this.planarVelocity.z);
    if (speed > 0.2) {
      this.slideDir.x = this.planarVelocity.x / speed;
      this.slideDir.z = this.planarVelocity.z / speed;
    } else {
      this.slideDir.x = Math.sin(this.bodyYaw);
      this.slideDir.z = Math.cos(this.bodyYaw);
    }

    this.slideSpeed = Math.max(9, speed + 6.2);
    this.slideTime = 0.65;
    this.isSliding = true;
  }

  stepMovement(moveX, moveZ, sprintInput, dt) {
    if (this.slideTime > 0) {
      this.slideTime = Math.max(0, this.slideTime - dt);
    }
    this.advanceSimBasisYaw(dt);

    const next = stepCharacterMotion(
      {
        posX: this.body.position.x,
        posZ: this.body.position.z,
        velX: this.planarVelocity.x,
        velZ: this.planarVelocity.z,
        yaw: this.bodyYaw,
        stamina: this.stamina,
        slideActive: this.isSliding && this.slideTime > 0,
        slideDirX: this.slideDir.x,
        slideDirZ: this.slideDir.z,
        slideSpeed: this.slideSpeed
      },
      {
        moveX,
        moveZ,
        sprint: sprintInput,
        basisYaw: this.simBasisYaw,
        headingYaw: 0,
        movementMode: this.movementMode,
        lookYaw: this.cameraAngle.y
      },
      this.getMovementConfig(),
      dt
    );

    this.body.position.x = next.posX;
    this.body.position.z = next.posZ;
    this.body.position.y = this.activeGroundY;
    this.planarVelocity.x = next.velX;
    this.planarVelocity.z = next.velZ;
    this.bodyYaw = wrapAngle(next.yaw);
    this.stamina = next.stamina;
    this.slideDir.x = next.slideDirX;
    this.slideDir.z = next.slideDirZ;
    this.slideSpeed = next.slideSpeed;
    this.isSliding = next.slideActive && this.slideTime > 0;
    if (!this.isSliding && this.slideTime <= 0) {
      this.slideSpeed = 0;
    }
    this.canSprint = this.stamina > 0.08;
  }

  update(delta) {
    if (this.emoteSprite) {
      if (performance.now() >= this.emoteUntilMs) {
        this.emoteSprite.visible = false;
      }
    }
    if (this.isSpectator) {
      this.body.velocity.set(0, 0, 0);
      this.planarVelocity.x = 0;
      this.planarVelocity.z = 0;
      this.moveAccumulator = 0;
      this.networkAccumulator = 0;
      this.renderPos.copy(this.body.position);
      this.mesh.position.copy(this.body.position);
      this.mesh.position.y += this.visualOffsetY;
      this.mesh.visible = false;
      this.curveArrow.material.opacity = 0;
      if (!window.isReplayActive) this.updateSpectatorCamera(delta);
      return;
    }

    this.mesh.visible = true;

    if (window.isReplayActive) {
      this.body.quaternion.set(0, 0, 0, 1);
      this.body.angularVelocity.set(0, 0, 0);
      this.body.velocity.set(0, 0, 0);
      this.planarVelocity.x = 0;
      this.planarVelocity.z = 0;
      this.moveAccumulator = 0;
      this.networkAccumulator = 0;
      this.renderPos.copy(this.body.position);
      this.mesh.position.copy(this.body.position);
      this.mesh.position.y = this.body.position.y + this.visualOffsetY;
      this.curveArrow.material.opacity = 0;
      return;
    }

    this.body.quaternion.set(0, 0, 0, 1);
    this.body.angularVelocity.set(0, 0, 0);
    this.body.velocity.set(0, 0, 0);
    this.body.position.y = this.activeGroundY;

    if (this.slideCooldown > 0) {
      this.slideCooldown = Math.max(0, this.slideCooldown - delta);
    }

    const forward = !!(this.keys['w'] || this.keys['arrowup']);
    const backward = !!(this.keys['s'] || this.keys['arrowdown']);
    const left = !!(this.keys['a'] || this.keys['arrowleft']);
    const right = !!(this.keys['d'] || this.keys['arrowright']);

    let moveZ = (forward ? 1 : 0) - (backward ? 1 : 0);
    let moveX = (right ? 1 : 0) - (left ? 1 : 0);

    // Mobile joystick overrides digital keys when active.
    if (Math.abs(this.mobileMoveX) + Math.abs(this.mobileMoveZ) > 0.01) {
      moveX = this.mobileMoveX;
      moveZ = this.mobileMoveZ;
    }
    const isMoving = moveX !== 0 || moveZ !== 0;

    const sprint = !!this.keys['shift'] && isMoving && this.canSprint;
    const flowFrozen = (window.matchFlowState || 'live') !== 'live';
    if (performance.now() - this.lastMouseMoveAt >= this.rearLockDelayMs) {
      this.rearLockActive = true;
    }

    if (flowFrozen) {
      this.body.velocity.set(0, 0, 0);
      this.planarVelocity.x = 0;
      this.planarVelocity.z = 0;
      this.slideTime = 0;
      this.slideSpeed = 0;
      this.isSliding = false;
      this.moveAccumulator = 0;
      this.networkAccumulator += delta;
      if (this.networkAccumulator >= 0.1) {
        this.sendInputFrame(moveX, moveZ, sprint, false);
        this.networkAccumulator = 0;
      }

      this.updateStaminaUI();
      this.renderPos.copy(this.body.position);
      this.tmpQuat.setFromAxisAngle(this.upAxis, this.bodyYaw + this.modelYawOffset);
      this.mesh.quaternion.slerp(this.tmpQuat, 1 - Math.exp(-14 * delta));
      this.tmpTargetPos.set(
        this.body.position.x,
        this.body.position.y + this.visualOffsetY,
        this.body.position.z
      );
      this.mesh.position.copy(this.tmpTargetPos);
      this.curveArrow.material.opacity = 0;
      if (!window.isReplayActive) this.updateCamera(delta);
      return;
    }

    const myId = window.network?.myId || null;
    const localOwnsBall = !!(myId && this.world?.ball?.controlledBy === myId);

    if (this.wasPressed('x') && this.slideCooldown === 0 && !localOwnsBall) {
      this.slideCooldown = 0.9;
      this.startLocalSlide();
      this.sendAction(ACTION_TYPES.slide);
    }

    if (this.wasPressed('z')) this.sendAction(ACTION_TYPES.pass, 0.45, this.curveCharge);
    if (this.wasPressed('c')) this.sendAction(ACTION_TYPES.through, 0.58, this.curveCharge);
    if (this.wasPressed('v')) this.sendAction(ACTION_TYPES.cross, 0.62, this.curveCharge);
    if (this.wasPressed('g')) this.sendAction(ACTION_TYPES.keeperCatch, 0, 0);

    if (this.keys['q']) {
      this.curveCharge = Math.max(-this.maxCurve, this.curveCharge - this.curveRate * delta);
    } else if (this.keys['e']) {
      this.curveCharge = Math.min(this.maxCurve, this.curveCharge + this.curveRate * delta);
    } else if (!this.isCharging) {
      if (Math.abs(this.curveCharge) < 0.08) this.curveCharge = 0;
      else this.curveCharge -= Math.sign(this.curveCharge) * this.curveRate * delta;
    }

    if (this.keys[' ']) {
      if (!this.isCharging) {
        this.isCharging = true;
        this.shotChargeTime = 0;
      }
      this.shotChargeTime = Math.min(this.maxChargeTime, this.shotChargeTime + delta);
      this.chargeRatio = this.shotChargeTime / this.maxChargeTime;
    } else if (this.isCharging) {
      this.sendAction(ACTION_TYPES.shoot, this.chargeRatio, this.curveCharge);
      this.isCharging = false;
      this.shotChargeTime = 0;
      this.chargeRatio = 0;
      this.curveCharge = 0;
    }

    this.moveAccumulator += delta;
    if (this.moveAccumulator > this.fixedStep * 3) {
      this.moveAccumulator = this.fixedStep * 3;
    }
    let simSteps = 0;
    while (this.moveAccumulator >= this.fixedStep) {
      this.stepMovement(moveX, moveZ, sprint, this.fixedStep);
      this.moveAccumulator -= this.fixedStep;
      simSteps += 1;
      if (simSteps >= 3) {
        this.moveAccumulator = 0;
        break;
      }
    }
    this.networkAccumulator += delta;
    if (this.networkAccumulator > this.fixedStep * 3) {
      this.networkAccumulator = this.fixedStep * 3;
    }
    let sentFrames = 0;
    while (this.networkAccumulator >= this.fixedStep && sentFrames < 3) {
      this.sendInputFrame(moveX, moveZ, sprint, true);
      this.networkAccumulator -= this.fixedStep;
      sentFrames += 1;
    }

    this.updateStaminaUI();

    this.tmpTargetPos.set(
      this.body.position.x,
      this.body.position.y,
      this.body.position.z
    );
    const renderBlend = 1 - Math.exp(-20 * delta);
    this.renderPos.lerp(this.tmpTargetPos, renderBlend);
    if (this.renderPos.distanceToSquared(this.tmpTargetPos) > 16) {
      this.renderPos.copy(this.tmpTargetPos);
    }

    this.tmpQuat.setFromAxisAngle(this.upAxis, this.bodyYaw + this.modelYawOffset);
    this.mesh.quaternion.slerp(this.tmpQuat, 1 - Math.exp(-14 * delta));

    const currentSpeed = Math.hypot(this.planarVelocity.x, this.planarVelocity.z);
    this.updateAnimation(delta, currentSpeed);

    this.mesh.position.set(
      this.renderPos.x,
      this.renderPos.y + this.visualOffsetY,
      this.renderPos.z
    );

    if (this.isCharging || Math.abs(this.curveCharge) > 0.1) {
      this.curveArrow.material.opacity = 0.8;
      this.curveArrow.position.copy(this.renderPos);
      this.curveArrow.position.y = 0.12;
      this.curveArrow.rotation.y = this.bodyYaw;
    } else {
      this.curveArrow.material.opacity = 0;
    }
    if (!window.isReplayActive) this.updateCamera(delta);
  }

  sendInputFrame(moveX, moveZ, sprint, trackPrediction = true) {
    if (!window.network?.sendInputFrame) return;
    this.lastInputSeq += 1;
    this.localTick += 1;

    if (trackPrediction && !this.isSpectator && !window.isReplayActive) {
      this.pendingInputs.push({
        seq: this.lastInputSeq,
        tick: this.localTick,
        dt: this.fixedStep,
        input: {
          moveX,
          moveZ,
          sprint: !!sprint,
          basisYaw: this.simBasisYaw,
          headingYaw: 0,
          movementMode: this.movementMode,
          lookYaw: this.cameraAngle.y
        }
      });
      if (this.pendingInputs.length > this.maxPendingInputs) {
        this.pendingInputs.splice(0, this.pendingInputs.length - this.maxPendingInputs);
      }
    }

    window.network.sendInputFrame({
      seq: this.lastInputSeq,
      tick: this.localTick,
      moveX,
      moveZ,
      sprint,
      dtMs: Math.round(this.fixedStep * 1000),
      basisYaw: this.simBasisYaw,
      headingYaw: 0,
      movementMode: this.movementMode,
      lookYaw: this.cameraAngle.y,
      facingYaw: this.bodyYaw,
      lookPitch: this.cameraAngle.x
    });
  }

  sendAction(type, charge = 0, curve = 0) {
    if (!window.network?.sendActionRequest) return;
    window.network.sendActionRequest({ type, charge, curve });
  }

  updateAnimation(delta, speed) {
    if (this.isSliding) {
      const poseLerp = 14 * delta;
      this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, 0.05, poseLerp);
      this.leftThigh.rotation.x = THREE.MathUtils.lerp(this.leftThigh.rotation.x, -0.62, poseLerp);
      this.leftCalf.rotation.x = THREE.MathUtils.lerp(this.leftCalf.rotation.x, 0.2, poseLerp);
      this.rightThigh.rotation.x = THREE.MathUtils.lerp(this.rightThigh.rotation.x, 0.16, poseLerp);
      this.rightCalf.rotation.x = THREE.MathUtils.lerp(this.rightCalf.rotation.x, -0.72, poseLerp);
      this.leftUpperArm.rotation.x = THREE.MathUtils.lerp(this.leftUpperArm.rotation.x, -0.15, poseLerp);
      this.rightUpperArm.rotation.x = THREE.MathUtils.lerp(this.rightUpperArm.rotation.x, 0.22, poseLerp);
      return;
    }

    if (speed > 0.45) {
      const sprintFactor = Math.min(1, speed / this.sprintSpeed);
      const stride = 0.74 + sprintFactor * 0.36;
      const cadence = 4.3 + sprintFactor * 4.6;
      this.walkCycle += delta * cadence;

      const phase = Math.sin(this.walkCycle);
      const legSwing = phase * stride;
      const kneeBend = Math.max(0, -phase) * (0.3 + sprintFactor * 0.34);

      this.leftThigh.rotation.x = legSwing;
      this.rightThigh.rotation.x = -legSwing;
      this.leftCalf.rotation.x = phase < 0 ? -kneeBend : 0;
      this.rightCalf.rotation.x = phase > 0 ? -kneeBend : 0;
      this.leftUpperArm.rotation.x = -legSwing * 0.5;
      this.rightUpperArm.rotation.x = legSwing * 0.5;
      this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, -0.06 * sprintFactor, 10 * delta);
    } else {
      const l = 6 * delta;
      this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, 0, l);
      this.leftThigh.rotation.x = THREE.MathUtils.lerp(this.leftThigh.rotation.x, 0, l);
      this.rightThigh.rotation.x = THREE.MathUtils.lerp(this.rightThigh.rotation.x, 0, l);
      this.leftCalf.rotation.x = THREE.MathUtils.lerp(this.leftCalf.rotation.x, 0, l);
      this.rightCalf.rotation.x = THREE.MathUtils.lerp(this.rightCalf.rotation.x, 0, l);
      this.leftUpperArm.rotation.x = THREE.MathUtils.lerp(this.leftUpperArm.rotation.x, 0, l);
      this.rightUpperArm.rotation.x = THREE.MathUtils.lerp(this.rightUpperArm.rotation.x, 0, l);
    }
  }

  updateCamera(delta) {
    const sinceMouse = performance.now() - this.lastMouseMoveAt;
    if (sinceMouse >= this.rearLockDelayMs) {
      this.rearLockActive = true;
    }

    if (this.rearLockActive) {
      const recenterRate = 6 / Math.max(0.1, this.rearLockDurationSec);
      this.cameraAngle.y = angleLerp(this.cameraAngle.y, this.bodyYaw, 1 - Math.exp(-recenterRate * delta));
      this.cameraAngle.x = THREE.MathUtils.lerp(
        this.cameraAngle.x,
        this.defaultCameraPitch,
        1 - Math.exp(-4 * delta)
      );
    }

    const distance = 8;
    const height = 4;
    this.tmpCamOffset.set(
      -Math.sin(this.cameraAngle.y) * Math.cos(this.cameraAngle.x) * distance,
      Math.sin(-this.cameraAngle.x) * distance + height,
      -Math.cos(this.cameraAngle.y) * Math.cos(this.cameraAngle.x) * distance
    );

    this.tmpCamTarget.copy(this.renderPos).add(this.tmpCamOffset);
    this.world.camera.position.lerp(this.tmpCamTarget, 1 - Math.exp(-12 * delta));

    this.tmpLookTarget.copy(this.renderPos);
    this.tmpLookTarget.y += 1.45;
    this.world.camera.lookAt(this.tmpLookTarget);
  }

  updateSpectatorCamera(delta) {
    const seat = this.world.stadium?.getSpectatorSeat(this.seatId ?? 0);
    if (seat) {
      this.body.position.set(seat.position.x, seat.position.y, seat.position.z);
      this.tmpCamTarget.set(seat.position.x, seat.position.y + 0.9, seat.position.z);
      this.world.camera.position.lerp(this.tmpCamTarget, 1 - Math.exp(-8 * delta));
      this.world.camera.lookAt(seat.lookAt);
      return;
    }

    const pos = this.body.position;
    this.tmpCamTarget.set(pos.x, pos.y + 0.8, pos.z);
    this.world.camera.position.lerp(this.tmpCamTarget, 1 - Math.exp(-8 * delta));
    this.world.camera.lookAt(0, 2.5, 0);
  }

  shoot() {
    // Shot logic is handled in update() via actionRequest.
  }
}





