import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * Footer menutup halaman dengan satu baris tanda tangan sederhana.
 * Sengaja dibuat singkat — bagian yang paling personal sudah ada
 * di catatan foto terakhir ("Untuk Jasmine").
 */
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative z-10 flex flex-col items-center gap-2 px-6 pb-16 text-center text-paper/50"
    >
      <Heart size={16} className="fill-blush/70 text-blush/70" />
      <p className="font-hand text-lg text-paper/70">dibuat dengan sepenuh hati oleh Ajra, untuk Jasmine</p>
    </motion.footer>
  );
}

export default Footer;
