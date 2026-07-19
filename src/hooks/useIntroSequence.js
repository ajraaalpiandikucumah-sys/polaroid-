import { useEffect, useRef, useState } from "react";
import { useShutterSound } from "./useShutterSound.js";

export const INTRO_STAGES = {
  BLACK: "black",
  CLICK: "click",
  FALLING: "falling",
  TEXT: "text",
  DONE: "done",
};

const CLICK_COUNT = 3;
const CLICK_INTERVAL = 650;
const FALLING_DURATION = 1900;
const TEXT_DURATION = 3200;

/**
 * useIntroSequence menjalankan alur pembuka sesuai naskah:
 * layar hitam -> tiga kali klik kamera (satu foto jatuh tiap klik) ->
 * puluhan foto berjatuhan sekaligus -> teks "Untuk Jasmine." muncul -> selesai.
 *
 * Timing disimpan sebagai konstanta di atas supaya mudah disesuaikan
 * tanpa harus menyentuh logika state machine-nya.
 */
export function useIntroSequence({ onComplete, skip = false } = {}) {
  const [stage, setStage] = useState(INTRO_STAGES.BLACK);
  const [clickIndex, setClickIndex] = useState(0);
  const playShutter = useShutterSound();
  const timers = useRef([]);

  useEffect(() => {
    if (skip) {
      setStage(INTRO_STAGES.DONE);
      return undefined;
    }

    const addTimer = (fn, delay) => {
      timers.current.push(setTimeout(fn, delay));
    };

    // Tiga jepretan pertama, satu demi satu.
    for (let i = 0; i < CLICK_COUNT; i += 1) {
      addTimer(() => {
        setStage(INTRO_STAGES.CLICK);
        setClickIndex(i + 1);
        playShutter();
      }, 400 + i * CLICK_INTERVAL);
    }

    const fallingStart = 400 + CLICK_COUNT * CLICK_INTERVAL;
    addTimer(() => setStage(INTRO_STAGES.FALLING), fallingStart);

    const textStart = fallingStart + FALLING_DURATION;
    addTimer(() => setStage(INTRO_STAGES.TEXT), textStart);

    const doneAt = textStart + TEXT_DURATION;
    addTimer(() => {
      setStage(INTRO_STAGES.DONE);
      onComplete?.();
    }, doneAt);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  const skipIntro = () => {
    timers.current.forEach(clearTimeout);
    setStage(INTRO_STAGES.DONE);
    onComplete?.();
  };

  return { stage, clickIndex, skipIntro };
}

export default useIntroSequence;
