import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { INTRO_STAGES, useIntroSequence } from "../../hooks/useIntroSequence.js";
import { getScatterOffset } from "../../utils/scatter.js";
import photos from "../../data/photos.js";

const FALLING_COUNT = 18;

function FallingSilhouette({ index }) {
  const { jitterX, dropDelay } = useMemo(() => getScatterOffset(`fall-${index}`), [index]);
  const startX = ((index * 53) % 100) + jitterX * 0.4;
  const rotate = ((index * 37) % 40) - 20;
  const size = 46 + ((index * 13) % 22);

  return (
    <motion.div
      className="absolute rounded-[3px] bg-paper shadow-polaroid"
      style={{ width: size, height: size * 1.18, left: `${startX}%`, top: -120 }}
      initial={{ y: -160, opacity: 0, rotate }}
      animate={{ y: "115vh", opacity: [0, 1, 1, 0.9], rotate: rotate + (index % 2 === 0 ? 25 : -25) }}
      transition={{
        duration: 1.5 + (index % 5) * 0.12,
        delay: dropDelay,
        ease: [0.34, 0.02, 0.64, 1],
      }}
    />
  );
}

function ShutterFlash() {
  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.85, 0] }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    />
  );
}

/**
 * IntroSequence menampilkan pembuka website sesuai naskah:
 * layar hitam -> tiga klik kamera -> hujan foto -> kalimat pembuka.
 * Komponen ini sepenuhnya "self-contained" dan memanggil onComplete
 * ketika seluruh urutan selesai, supaya HomePage tinggal merender konten utama.
 */
function IntroSequence({ onComplete }) {
  const { stage, clickIndex } = useIntroSequence({ onComplete });

  if (stage === INTRO_STAGES.DONE) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-[#050302]"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <AnimatePresence>{stage === INTRO_STAGES.CLICK ? <ShutterFlash key={clickIndex} /> : null}</AnimatePresence>

        {stage === INTRO_STAGES.CLICK ? (
          <div className="absolute inset-0">
            {Array.from({ length: clickIndex }).map((_, i) => (
              <FallingSilhouette key={`single-${i}`} index={i * 5} />
            ))}
          </div>
        ) : null}

        {stage === INTRO_STAGES.FALLING ? (
          <div className="absolute inset-0">
            {Array.from({ length: FALLING_COUNT }).map((_, i) => (
              <FallingSilhouette key={`mass-${i}`} index={i} />
            ))}
          </div>
        ) : null}

        {stage === INTRO_STAGES.TEXT ? (
          <div className="relative z-10 px-8 text-center">
            <motion.p
              className="font-display text-3xl italic text-paper sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Untuk Jasmine.
            </motion.p>
            <motion.p
              className="mt-5 font-hand text-xl text-glow-soft sm:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
            >
              Karena beberapa kenangan terlalu indah untuk dilupakan.
            </motion.p>
          </div>
        ) : null}

        <span className="sr-only">
          Membuka {photos.length} kenangan foto polaroid untuk {photos[photos.length - 1]?.alt}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

export default IntroSequence;
