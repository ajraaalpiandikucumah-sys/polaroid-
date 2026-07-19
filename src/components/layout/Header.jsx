import { motion } from "framer-motion";
import { Camera } from "lucide-react";

/**
 * Header menampilkan nama website beserta subjudulnya. Ditempatkan sebagai
 * bagian pertama dari konten yang bisa di-scroll (bukan fixed), supaya
 * terasa seperti kartu nama yang juga "diletakkan" di atas meja.
 */
function Header() {
  return (
    <header className="relative z-10 flex flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex items-center gap-2 rounded-full border border-paper/25 bg-black/20 px-4 py-1.5 text-paper/80 backdrop-blur-sm"
      >
        <Camera size={16} strokeWidth={1.75} />
        <span className="font-body text-xs uppercase tracking-[0.2em]">Album kenangan</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        className="mt-6 font-display text-4xl italic text-paper sm:text-6xl"
      >
        Polaroid Memories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
        className="mt-6 max-w-xl font-hand text-2xl leading-snug text-glow-soft sm:text-3xl"
      >
        Beberapa kenangan memang hanya bisa dilihat dengan mata.
        <br />
        Tetapi kenangan bersamamu...
        <br />
        selalu bisa kurasakan lagi melalui hati.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-8 font-body text-xs uppercase tracking-[0.3em] text-paper/50"
      >
        ditulis oleh Ajra, untuk Jasmine
      </motion.p>
    </header>
  );
}

export default Header;
