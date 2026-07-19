import { motion } from "framer-motion";
import { useMemo } from "react";
import PolaroidTape from "./PolaroidTape.jsx";
import { getScatterOffset } from "../../utils/scatter.js";

/**
 * PolaroidCard adalah satu foto polaroid yang bisa dipakai ulang di seluruh
 * grid. Semua perilaku khasnya ada di sini:
 * - jatuh ke meja dengan animasi physics saat pertama muncul,
 * - bergoyang halus saat disentuh/hover,
 * - membuka cerita saat diklik.
 *
 * photo   : satu entri dari data/photos.js
 * index   : posisi dalam daftar, dipakai untuk delay & jitter yang konsisten
 * onOpen  : callback saat kartu diklik
 */
function PolaroidCard({ photo, index, onOpen }) {
  const { jitterX, jitterY, dropDelay } = useMemo(() => getScatterOffset(photo.id), [photo.id]);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(photo)}
      className="group relative block w-full rounded-[2px] bg-paper p-3 pb-10 text-left shadow-polaroid outline-none focus-visible:ring-2 focus-visible:ring-blush"
      style={{ transform: `translate(${jitterX}px, ${jitterY}px)` }}
      initial={{ opacity: 0, y: -260, rotate: photo.tilt * 2.4, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.tilt, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        type: "spring",
        stiffness: 92,
        damping: 13,
        mass: 0.9,
        delay: 0.06 * index + dropDelay,
      }}
      whileHover={{
        rotate: photo.tilt + (index % 2 === 0 ? 3 : -3),
        scale: 1.045,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Buka cerita di balik foto: ${photo.title}`}
    >
      <PolaroidTape variant={photo.decoration} />

      <span className="paper-grain pointer-events-none absolute inset-0 rounded-[2px]" />

      <span className="relative block aspect-[4/5] w-full overflow-hidden bg-desk-shadow/10">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      </span>

      <span className="absolute bottom-2.5 left-0 w-full px-3 text-center font-hand text-lg leading-none text-ink/80">
        {photo.title}
      </span>
    </motion.button>
  );
}

export default PolaroidCard;
