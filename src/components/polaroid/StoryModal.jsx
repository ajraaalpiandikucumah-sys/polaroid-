import { AnimatePresence, motion } from "framer-motion";
import { X, Heart } from "lucide-react";
import { useEffect } from "react";

/**
 * StoryModal membuka "catatan di balik foto" saat sebuah polaroid diklik.
 * Ditulis sebagai satu komponen reusable yang menerima photo bernilai null
 * (tertutup) atau objek foto (terbuka), dikendalikan dari MemoryContext.
 */
function StoryModal({ photo, onClose }) {
  useEffect(() => {
    if (!photo) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Cerita di balik foto ${photo.title}`}
            className="relative w-full max-w-md rounded-sm bg-paper p-6 shadow-polaroidHover sm:p-8"
            initial={{ opacity: 0, y: 40, rotate: -2, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1.5 text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
              aria-label="Tutup cerita"
            >
              <X size={20} strokeWidth={1.75} />
            </button>

            <div className="mb-5 overflow-hidden rounded-[2px] shadow-sm">
              <img src={photo.src} alt={photo.alt} className="h-56 w-full object-cover sm:h-64" />
            </div>

            <h3 className="font-display text-2xl italic text-ink">{photo.title}</h3>

            <p className="mt-4 font-note text-xl leading-relaxed text-ink-soft sm:text-2xl">{photo.story}</p>

            {photo.isFinal ? (
              <div className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-4 text-blush">
                <Heart size={16} className="fill-blush" />
                <span className="font-hand text-lg">— Ajra</span>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default StoryModal;
