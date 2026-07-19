import { useCallback, useRef } from "react";

/**
 * useShutterSound mensintesis bunyi "klik" rana kamera analog secara langsung
 * lewat Web Audio API — dua lapis noise burst pendek yang meniru mekanisme
 * cermin & tirai kamera film. Dibuat sintetis (bukan file .mp3) supaya
 * proyek tetap ringan dan tidak bergantung pada aset audio eksternal.
 */
export function useShutterSound() {
  const ctxRef = useRef(null);

  const getContext = useCallback(() => {
    if (!ctxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AudioContextClass();
    }
    return ctxRef.current;
  }, []);

  const playShutter = useCallback(() => {
    try {
      const ctx = getContext();
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;

      // Lapis 1: klik tajam (tirai depan)
      const clickBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
      const clickData = clickBuffer.getChannelData(0);
      for (let i = 0; i < clickData.length; i += 1) {
        clickData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (clickData.length * 0.18));
      }
      const clickSource = ctx.createBufferSource();
      clickSource.buffer = clickBuffer;
      const clickFilter = ctx.createBiquadFilter();
      clickFilter.type = "highpass";
      clickFilter.frequency.value = 1800;
      const clickGain = ctx.createGain();
      clickGain.gain.setValueAtTime(0.5, now);
      clickSource.connect(clickFilter).connect(clickGain).connect(ctx.destination);
      clickSource.start(now);

      // Lapis 2: klak lebih berat, sedikit tertunda (tirai belakang)
      const clakBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
      const clakData = clakBuffer.getChannelData(0);
      for (let i = 0; i < clakData.length; i += 1) {
        clakData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (clakData.length * 0.25));
      }
      const clakSource = ctx.createBufferSource();
      clakSource.buffer = clakBuffer;
      const clakFilter = ctx.createBiquadFilter();
      clakFilter.type = "bandpass";
      clakFilter.frequency.value = 700;
      clakFilter.Q.value = 0.8;
      const clakGain = ctx.createGain();
      clakGain.gain.setValueAtTime(0.35, now + 0.045);
      clakSource.connect(clakFilter).connect(clakGain).connect(ctx.destination);
      clakSource.start(now + 0.045);
    } catch {
      // Jika Web Audio tidak tersedia (mis. autoplay policy), abaikan secara diam-diam.
    }
  }, [getContext]);

  return playShutter;
}

export default useShutterSound;
