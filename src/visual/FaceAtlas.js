import * as THREE from 'three';

const ALPHA_THRESHOLD = 10;
const MIN_AREA = 600;
const MARGIN = 2;

let cached = null;

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = url;
  });
}

function segmentAlphaRegions(imageData, width, height) {
  const data = imageData.data;
  const visited = new Uint8Array(width * height);
  const boxes = [];

  const stack = [];

  function idx(x, y) {
    return y * width + x;
  }

  for (let y = 0; y < height; y += 1) {
    const rowOff = y * width;
    for (let x = 0; x < width; x += 1) {
      const i = rowOff + x;
      if (visited[i]) continue;
      const a = data[i * 4 + 3];
      if (a <= ALPHA_THRESHOLD) continue;

      let minX = x;
      let maxX = x;
      let minY = y;
      let maxY = y;
      let area = 0;

      visited[i] = 1;
      stack.length = 0;
      stack.push(i);

      while (stack.length) {
        const p = stack.pop();
        const px = p % width;
        const py = (p / width) | 0;
        area += 1;

        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;

        // 4-neighborhood flood fill
        if (px > 0) {
          const n = p - 1;
          if (!visited[n] && data[n * 4 + 3] > ALPHA_THRESHOLD) {
            visited[n] = 1;
            stack.push(n);
          }
        }
        if (px + 1 < width) {
          const n = p + 1;
          if (!visited[n] && data[n * 4 + 3] > ALPHA_THRESHOLD) {
            visited[n] = 1;
            stack.push(n);
          }
        }
        if (py > 0) {
          const n = p - width;
          if (!visited[n] && data[n * 4 + 3] > ALPHA_THRESHOLD) {
            visited[n] = 1;
            stack.push(n);
          }
        }
        if (py + 1 < height) {
          const n = p + width;
          if (!visited[n] && data[n * 4 + 3] > ALPHA_THRESHOLD) {
            visited[n] = 1;
            stack.push(n);
          }
        }
      }

      if (area < MIN_AREA) {
        continue;
      }

      const bx0 = Math.max(0, minX - MARGIN);
      const by0 = Math.max(0, minY - MARGIN);
      const bx1 = Math.min(width - 1, maxX + MARGIN);
      const by1 = Math.min(height - 1, maxY + MARGIN);

      boxes.push({
        minX: bx0,
        minY: by0,
        maxX: bx1,
        maxY: by1,
        area
      });
    }
  }

  boxes.sort((a, b) => (a.minY - b.minY) || (a.minX - b.minX));
  return boxes;
}

export async function getFaceAtlas() {
  if (cached) return cached;

  const url = new URL('../../Yüzler.png', import.meta.url).href;
  const img = await loadImage(url);

  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const boxes = segmentAlphaRegions(imageData, canvas.width, canvas.height);

  const baseTexture = new THREE.CanvasTexture(canvas);
  baseTexture.flipY = true;
  baseTexture.wrapS = THREE.ClampToEdgeWrapping;
  baseTexture.wrapT = THREE.ClampToEdgeWrapping;
  baseTexture.colorSpace = THREE.SRGBColorSpace;
  baseTexture.minFilter = THREE.LinearMipMapLinearFilter;
  baseTexture.magFilter = THREE.LinearFilter;
  baseTexture.generateMipmaps = true;
  baseTexture.anisotropy = 8;
  baseTexture.needsUpdate = true;

  cached = {
    url,
    width: canvas.width,
    height: canvas.height,
    boxes,
    baseTexture,
    getUVForSeed(seed) {
      const s = Number.isFinite(seed) ? Math.floor(seed) : 0;
      const count = boxes.length || 1;
      const idx = ((s % count) + count) % count;
      const box = boxes[idx] || { minX: 0, minY: 0, maxX: canvas.width - 1, maxY: canvas.height - 1 };

      const u0 = box.minX / canvas.width;
      const u1 = (box.maxX + 1) / canvas.width;

      const v0Top = box.minY / canvas.height;
      const v1Top = (box.maxY + 1) / canvas.height;
      // flipY=true means V is flipped on upload; compensate via offset/repeat.
      const v0 = 1 - v1Top;
      const v1 = 1 - v0Top;

      return {
        index: idx,
        offsetU: u0,
        offsetV: v0,
        repeatU: Math.max(1e-6, u1 - u0),
        repeatV: Math.max(1e-6, v1 - v0)
      };
    },
    makeTextureForSeed(seed) {
      const t = baseTexture.clone();
      const uv = this.getUVForSeed(seed);
      t.offset.set(uv.offsetU, uv.offsetV);
      t.repeat.set(uv.repeatU, uv.repeatV);
      t.needsUpdate = true;
      return t;
    }
  };

  return cached;
}
