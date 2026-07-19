import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * ScrollHint memberi isyarat halus untuk scroll ke bawah, lalu memudar
 * begitu pengguna mulai men-scroll halaman (dibaca dari progres scroll global).
 */
function ScrollHint() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 160], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none relative z-10 -mt-10 flex flex-col items-center gap-1 pb-10 text-paper/60"
    >
      <span className="font-body text-[11px] uppercase tracking-[0.25em]">gulir untuk kenangan lainnya</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={18} strokeWidth={1.5} />
      </motion.span>
    </motion.div>
  );
}

export default ScrollHint;
