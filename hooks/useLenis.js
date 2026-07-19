import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

/**
 * useLenis menghubungkan Lenis (smooth scroll) dengan ticker milik GSAP,
 * supaya animasi scroll-triggered (ScrollTrigger) tetap sinkron dengan
 * posisi scroll yang sudah di-smoothing.
 *
 * enabled dipakai supaya scroll baru aktif setelah intro selesai —
 * mencegah pengguna scroll saat sekuens foto jatuh masih berjalan.
 */
export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function onTick(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [enabled]);
}

export default useLenis;
