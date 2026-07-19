/**
 * Pseudo-random generator berbasis seed (mulberry32).
 * Dipakai supaya "keacakan" posisi & delay polaroid konsisten setiap render,
 * tidak berubah-ubah setiap kali komponen di-mount ulang.
 */
function mulberry32(seed) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

/**
 * Mengembalikan offset kecil (x, y, delay) yang konsisten untuk sebuah id,
 * dipakai supaya susunan foto di meja terasa "berserakan secara alami"
 * tanpa membuat layout melompat-lompat antar render.
 */
export function getScatterOffset(id) {
  const rand = mulberry32(seedFromString(id));
  const jitterX = (rand() - 0.5) * 14; // -7px .. 7px
  const jitterY = (rand() - 0.5) * 14;
  const dropDelay = rand() * 0.35;
  return { jitterX, jitterY, dropDelay };
}
