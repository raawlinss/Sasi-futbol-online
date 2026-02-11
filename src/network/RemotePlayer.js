import * as THREE from 'three';
import { getFaceAtlas } from '../visual/FaceAtlas.js';

const ACTIVE_PLAYER_Y = 0.92;

function angleLerp(current, target, alpha) {
  const diff = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + diff * alpha;
}

function getPos(data) {
  if (!data) return { x: 0, y: ACTIVE_PLAYER_Y, z: 0 };
  return data.pos || data.position || { x: 0, y: ACTIVE_PLAYER_Y, z: 0 };
}

function getYaw(data) {
  if (!data) return 0;
  if (Number.isFinite(data.yaw)) return data.yaw;
  if (Number.isFinite(data.rotation)) return data.rotation;
  return 0;
}

export class RemotePlayer {
  constructor(world, id, initialData) {
    this.world = world;
    this.id = id;
    this.nick = initialData.nick;
    this.team = initialData.team;
    this.role = initialData.role || 'active';

    this.physicsHalfHeight = 0.9;
    this.visualOffsetY = 0;
    this.extraFootLift = -0.02;
    this.tmpTargetPos = new THREE.Vector3();
    this.tmpQuat = new THREE.Quaternion();
    this.upAxis = new THREE.Vector3(0, 1, 0);
    this.modelYawOffset = 0;
    this.currentYaw = getYaw(initialData);
    this.targetYaw = this.currentYaw;
    this.lastMeshPos = new THREE.Vector3();
    this.predictedPos = new THREE.Vector3();
    this.targetVelocity = { x: 0, z: 0 };
    this.renderSpeed = 0;
    this.remoteIsSliding = false;
    this.lastServerUpdateAt = performance.now();
    this.snapshotDeltaSec = 1 / 30;

    this.walkCycle = 0;

    this.faceSeed = null;
    this.faceAtlas = null;
    this.facePlane = null;
    this.faceMat = null;
    this.faceTex = null;

    this.emoteSprite = null;
    this.emoteUntilMs = 0;

    this.initVisuals(initialData);
    this.updateVisuals(initialData, true);
    this.lastMeshPos.copy(this.mesh.position);
  }

  teleport(data) {
    this.updateVisuals(data, true);
  }

  initVisuals(initialData) {
    const group = new THREE.Group();
    this.mesh = group;
    group.scale.set(1.18, 1.18, 1.18);

    this.torsoGroup = new THREE.Group();
    group.add(this.torsoGroup);

    this.addNameTag();
    this.addEmoteBubble();

    const bodyGeo = new THREE.BoxGeometry(0.6, 0.7, 0.35);
    const color = this.team === 'red' ? 0xff3030 : this.team === 'blue' ? 0x3088ff : 0x909090;
    this.bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.68, metalness: 0.08 });
    this.chest = new THREE.Mesh(bodyGeo, this.bodyMat);
    this.chest.position.y = 0.45;
    this.torsoGroup.add(this.chest);

    const pelvisGeo = new THREE.BoxGeometry(0.5, 0.2, 0.3);
    const pelvisMat = new THREE.MeshStandardMaterial({ color: 0x101010 });
    this.pelvis = new THREE.Mesh(pelvisGeo, pelvisMat);
    this.pelvis.position.y = 0.05;
    this.torsoGroup.add(this.pelvis);

    const headGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.5 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 0.9;
    this.torsoGroup.add(this.head);

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

    const hairGeo = new THREE.SphereGeometry(0.225, 16, 12);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x2b1c10, roughness: 0.85 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 1.02;
    hair.scale.set(1.0, 0.58, 1.0);
    this.torsoGroup.add(hair);

    const jerseyStripeGeo = new THREE.BoxGeometry(0.06, 0.7, 0.02);
    const jerseyStripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const stripeLeft = new THREE.Mesh(jerseyStripeGeo, jerseyStripeMat);
    stripeLeft.position.set(-0.1, 0.45, 0.18);
    this.torsoGroup.add(stripeLeft);
    const stripeRight = new THREE.Mesh(jerseyStripeGeo, jerseyStripeMat);
    stripeRight.position.set(0.1, 0.45, 0.18);
    this.torsoGroup.add(stripeRight);

    const limbMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const thighGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.45, 8);
    const calfGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.45, 8);
    const footGeo = new THREE.BoxGeometry(0.3, 0.1, 0.3);
    const footMat = new THREE.MeshStandardMaterial({ color: 0xf0f0f0 });

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

    const armGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.4, 8);
    this.armMat = new THREE.MeshStandardMaterial({ color });

    this.leftUpperArm = new THREE.Group();
    this.leftUpperArm.position.set(-0.35, 0.7, 0);
    const lUpper = new THREE.Mesh(armGeo, this.armMat);
    lUpper.position.y = -0.2;
    this.leftUpperArm.add(lUpper);
    this.torsoGroup.add(this.leftUpperArm);

    this.rightUpperArm = new THREE.Group();
    this.rightUpperArm.position.set(0.35, 0.7, 0);
    const rUpper = new THREE.Mesh(armGeo, this.armMat);
    rUpper.position.y = -0.2;
    this.rightUpperArm.add(rUpper);
    this.torsoGroup.add(this.rightUpperArm);

    this.world.scene.add(group);

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
  }

  addNameTag() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    context.font = 'bold 38px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText(this.nick, 128, 46);

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
    context.fillText(this.nick, 128, 46);

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
      // ignore
    });
  }

  updateVisuals(data, instant = false, snapshotDtSec = null) {
    if (!data) return;

    const now = performance.now();
    const localDt = Math.max(0.01, Math.min(0.2, (now - this.lastServerUpdateAt) / 1000));
    const dt = Number.isFinite(snapshotDtSec)
      ? Math.max(0.01, Math.min(0.2, snapshotDtSec))
      : localDt;
    this.snapshotDeltaSec = dt;
    this.lastServerUpdateAt = now;

    this.role = data.role || this.role;

    if (`${data.nick || ''}` && data.nick !== this.nick) {
      this.nick = data.nick;
      this.redrawNameTag();
    }

    if (Number.isFinite(data.faceSeed)) {
      this.applyFaceSeed(data.faceSeed);
    }

    const pos = getPos(data);
    const yaw = getYaw(data);
    const vel = data.vel || data.velocity || { x: 0, z: 0 };

    this.mesh.visible = true;

    const targetY = this.role === 'spectator' ? pos.y : ACTIVE_PLAYER_Y;
    this.tmpTargetPos.set(pos.x, targetY + this.visualOffsetY, pos.z);
    this.targetYaw = yaw;
    this.targetVelocity.x = vel.x || 0;
    this.targetVelocity.z = vel.z || 0;
    this.remoteIsSliding = !!(data.actionState?.isSliding || data.isSliding);

    if (instant) {
      this.mesh.position.copy(this.tmpTargetPos);
      this.currentYaw = this.targetYaw;
      this.tmpQuat.setFromAxisAngle(this.upAxis, this.currentYaw + this.modelYawOffset);
      this.mesh.quaternion.copy(this.tmpQuat);
      this.applyPose(0.016, Math.hypot(this.targetVelocity.x, this.targetVelocity.z), this.remoteIsSliding, true, this.role === 'spectator');
      this.lastMeshPos.copy(this.mesh.position);
      this.renderSpeed = 0;
    }

    if (this.team !== data.team) {
      this.team = data.team;
      const color = this.team === 'red' ? 0xff3030 : this.team === 'blue' ? 0x3088ff : 0x909090;
      this.bodyMat.color.setHex(color);
      this.armMat.color.setHex(color);
    }
  }

  tick(delta) {
    if (!this.mesh.visible) return;

    if (this.emoteSprite) {
      if (performance.now() >= this.emoteUntilMs) {
        this.emoteSprite.visible = false;
      }
    }

    const leadTime = Math.min(0.04, this.snapshotDeltaSec * 0.25);
    this.predictedPos.copy(this.tmpTargetPos);
    this.predictedPos.x += this.targetVelocity.x * leadTime;
    this.predictedPos.z += this.targetVelocity.z * leadTime;

    const dist = this.mesh.position.distanceTo(this.predictedPos);
    if (dist > 3.0) {
      this.mesh.position.copy(this.predictedPos);
    } else {
      const alpha = dist > 0.4
        ? (1 - Math.exp(-11 * delta))
        : (1 - Math.exp(-7 * delta));
      this.mesh.position.lerp(this.predictedPos, alpha);
    }

    this.currentYaw = angleLerp(this.currentYaw, this.targetYaw, 1 - Math.exp(-14 * delta));
    this.tmpQuat.setFromAxisAngle(this.upAxis, this.currentYaw + this.modelYawOffset);
    this.mesh.quaternion.slerp(this.tmpQuat, 1 - Math.exp(-16 * delta));

    const velSpeed = Math.hypot(this.targetVelocity.x, this.targetVelocity.z);
    this.renderSpeed = THREE.MathUtils.lerp(this.renderSpeed, velSpeed, 1 - Math.exp(-10 * delta));

    this.lastMeshPos.copy(this.mesh.position);
    this.applyPose(delta, this.renderSpeed, this.remoteIsSliding, false, this.role === 'spectator');
  }

  applyPose(delta, speed, isSliding, instant, isSpectator = false) {
    if (isSpectator) {
      const poseLerp = instant ? 1 : 12 * delta;
      this.torsoGroup.position.y = THREE.MathUtils.lerp(this.torsoGroup.position.y, -0.38, poseLerp);
      this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, 0.1, poseLerp);
      this.leftThigh.rotation.x = THREE.MathUtils.lerp(this.leftThigh.rotation.x, 1.18, poseLerp);
      this.leftCalf.rotation.x = THREE.MathUtils.lerp(this.leftCalf.rotation.x, -1.28, poseLerp);
      this.rightThigh.rotation.x = THREE.MathUtils.lerp(this.rightThigh.rotation.x, 1.18, poseLerp);
      this.rightCalf.rotation.x = THREE.MathUtils.lerp(this.rightCalf.rotation.x, -1.28, poseLerp);
      this.leftUpperArm.rotation.x = THREE.MathUtils.lerp(this.leftUpperArm.rotation.x, -0.25, poseLerp);
      this.rightUpperArm.rotation.x = THREE.MathUtils.lerp(this.rightUpperArm.rotation.x, -0.25, poseLerp);
      return;
    }

    // Reset any spectator-only offsets.
    this.torsoGroup.position.y = THREE.MathUtils.lerp(this.torsoGroup.position.y, 0, instant ? 1 : 10 * delta);

    if (isSliding) {
      const poseLerp = instant ? 1 : 12 * delta;
      this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, 0.05, poseLerp);
      this.leftThigh.rotation.x = THREE.MathUtils.lerp(this.leftThigh.rotation.x, -0.62, poseLerp);
      this.leftCalf.rotation.x = THREE.MathUtils.lerp(this.leftCalf.rotation.x, 0.2, poseLerp);
      this.rightThigh.rotation.x = THREE.MathUtils.lerp(this.rightThigh.rotation.x, 0.16, poseLerp);
      this.rightCalf.rotation.x = THREE.MathUtils.lerp(this.rightCalf.rotation.x, -0.72, poseLerp);
      this.leftUpperArm.rotation.x = THREE.MathUtils.lerp(this.leftUpperArm.rotation.x, -0.15, poseLerp);
      this.rightUpperArm.rotation.x = THREE.MathUtils.lerp(this.rightUpperArm.rotation.x, 0.22, poseLerp);
      return;
    }

    if (speed > 0.35) {
      const sprintFactor = Math.min(1, speed / 24);
      const stride = 0.72 + sprintFactor * 0.32;
      const cadence = 4.2 + sprintFactor * 4.4;
      this.walkCycle += cadence * delta;

      const phase = Math.sin(this.walkCycle);
      const legSwing = phase * stride;
      const kneeBend = Math.max(0, -phase) * (0.28 + sprintFactor * 0.32);
      this.leftThigh.rotation.x = legSwing;
      this.rightThigh.rotation.x = -legSwing;
      this.leftCalf.rotation.x = phase < 0 ? -kneeBend : 0;
      this.rightCalf.rotation.x = phase > 0 ? -kneeBend : 0;
      this.leftUpperArm.rotation.x = -legSwing * 0.5;
      this.rightUpperArm.rotation.x = legSwing * 0.5;
      this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, -0.05 * sprintFactor, 10 * delta);
      return;
    }

    const l = instant ? 1 : 0.25;
    this.torsoGroup.rotation.x = THREE.MathUtils.lerp(this.torsoGroup.rotation.x, 0, l);
    this.leftThigh.rotation.x = THREE.MathUtils.lerp(this.leftThigh.rotation.x, 0, l);
    this.rightThigh.rotation.x = THREE.MathUtils.lerp(this.rightThigh.rotation.x, 0, l);
    this.leftCalf.rotation.x = THREE.MathUtils.lerp(this.leftCalf.rotation.x, 0, l);
    this.rightCalf.rotation.x = THREE.MathUtils.lerp(this.rightCalf.rotation.x, 0, l);
    this.leftUpperArm.rotation.x = THREE.MathUtils.lerp(this.leftUpperArm.rotation.x, 0, l);
    this.rightUpperArm.rotation.x = THREE.MathUtils.lerp(this.rightUpperArm.rotation.x, 0, l);
  }

  remove() {
    if (this.faceTex) {
      this.faceTex.dispose?.();
      this.faceTex = null;
    }
    if (this.faceMat && this.faceMat.map) {
      this.faceMat.map = null;
    }
    if (this.emoteSprite?.material?.map) {
      this.emoteSprite.material.map.dispose?.();
      this.emoteSprite.material.map = null;
    }
    if (this.nameTagSprite?.material?.map) {
      this.nameTagSprite.material.map.dispose?.();
      this.nameTagSprite.material.map = null;
    }
    this.world.scene.remove(this.mesh);
  }
}
