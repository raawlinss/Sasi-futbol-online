import * as THREE from 'three';
import * as CANNON from 'cannon-es';

const GROUND_Y = 0.35;

function getBallPos(data) {
  return data?.pos || data?.position || { x: 0, y: GROUND_Y, z: 0 };
}

function getBallVel(data) {
  return data?.vel || data?.velocity || { x: 0, y: 0, z: 0 };
}

function getBallSpin(data) {
  if (data?.spin) return data.spin;
  if (data?.angularVelocity) return data.angularVelocity;
  return { x: 0, y: 0, z: 0 };
}

export class Ball {
  constructor(world, position = { x: 0, y: 2, z: 0 }) {
    this.world = world;

    this.serverPosition = new THREE.Vector3(position.x, position.y, position.z);
    this.serverVelocity = new THREE.Vector3(0, 0, 0);
    this.predictedPosition = new THREE.Vector3(position.x, position.y, position.z);
    this.tmpOwnedPos = new THREE.Vector3(position.x, position.y, position.z);
    this.controlledBy = null;

    this.initVisuals();
    this.initPhysics(position);
  }

  initVisuals() {
    const geometry = new THREE.SphereGeometry(0.35, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.62,
      metalness: 0.1
    });

    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 512;
    textureCanvas.height = 512;
    const ctx = textureCanvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 512, 512);

    ctx.fillStyle = '#000000';
    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2;
      const x = 256 + Math.cos(angle) * 150;
      const y = 256 + Math.sin(angle) * 150;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(textureCanvas);
    material.map = texture;

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.world.scene.add(this.mesh);
  }

  initPhysics(position) {
    const shape = new CANNON.Sphere(0.35);
    this.body = new CANNON.Body({
      mass: 0,
      type: CANNON.Body.KINEMATIC,
      shape,
      position: new CANNON.Vec3(position.x, position.y, position.z)
    });

    this.body.collisionResponse = false;
    this.world.physicsWorld.addBody(this.body);
  }

  updateFromServer(ballData) {
    if (!ballData) return;

    const pos = getBallPos(ballData);
    const vel = getBallVel(ballData);

    this.controlledBy = ballData.ownerId || ballData.controlledBy || null;

    this.serverPosition.set(pos.x, pos.y, pos.z);
    this.serverVelocity.set(vel.x, vel.y, vel.z);
    this.body.position.set(pos.x, pos.y, pos.z);

    this.body.velocity.set(vel.x, vel.y, vel.z);

    const spin = getBallSpin(ballData);
    this.body.angularVelocity.set(spin.x || 0, spin.y || 0, spin.z || 0);
  }

  update() {
    if (window.isReplayActive) {
      this.body.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
      return;
    }

    const stabilization = !!window.__perfFlags?.stabilizationMode;
    const myId = window.network?.myId || null;
    const localOwnsBall = !!(myId && this.controlledBy === myId);
    const remoteOwner = (
      this.controlledBy
      && this.controlledBy !== myId
      && window.network?.remotePlayers?.[this.controlledBy]
    ) || null;

    if (localOwnsBall && this.world?.player?.body && !window.isReplayActive) {
      const playerPos = this.world.player.body.position;
      const yaw = this.world.player.bodyYaw || 0;
      const fx = Math.sin(yaw);
      const fz = Math.cos(yaw);
      const carry = 0.74;
      this.mesh.position.set(playerPos.x + fx * carry, GROUND_Y, playerPos.z + fz * carry);
      this.body.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
    } else if (remoteOwner?.mesh) {
      const ownerPos = remoteOwner.mesh.position;
      const yaw = Number.isFinite(remoteOwner.currentYaw) ? remoteOwner.currentYaw : 0;
      const fx = Math.sin(yaw);
      const fz = Math.cos(yaw);
      const carry = 0.72;
      const ownerVelX = Number(remoteOwner.targetVelocity?.x || 0);
      const ownerVelZ = Number(remoteOwner.targetVelocity?.z || 0);
      this.tmpOwnedPos.set(
        ownerPos.x + fx * carry + ownerVelX * 0.012,
        GROUND_Y,
        ownerPos.z + fz * carry + ownerVelZ * 0.012
      );
      if (stabilization) {
        this.mesh.position.copy(this.tmpOwnedPos);
      } else {
        this.mesh.position.lerp(this.tmpOwnedPos, 0.72);
      }
      this.body.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
    } else {
      this.predictedPosition.copy(this.serverPosition);
      this.predictedPosition.addScaledVector(this.serverVelocity, stabilization ? 0.03 : 0.05);
      if (this.predictedPosition.y < GROUND_Y) {
        this.predictedPosition.y = GROUND_Y;
      }

      const err = this.mesh.position.distanceTo(this.predictedPosition);
      if (err > 2.5) {
        this.mesh.position.copy(this.predictedPosition);
      } else {
        const alpha = err > 0.25
          ? (this.controlledBy ? 0.52 : 0.36)
          : (this.controlledBy ? 0.4 : 0.22);
        this.mesh.position.lerp(this.predictedPosition, alpha);
      }
      this.body.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
    }

    const vel = this.body.velocity;
    this.mesh.rotation.x += vel.z * 0.018;
    this.mesh.rotation.z -= vel.x * 0.018;
  }

  applyForce(force, chargeRatio = 1.0, curve = 0) {
    if (window.network?.sendActionRequest) {
      window.network.sendActionRequest({
        type: 'shoot',
        charge: chargeRatio,
        curve
      });
    }
  }
}
