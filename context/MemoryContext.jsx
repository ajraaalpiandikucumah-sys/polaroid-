import { createContext, useContext, useMemo, useState, useCallback } from "react";

const MemoryContext = createContext(null);

/**
 * MemoryProvider menyimpan dua hal utama:
 * 1. introFinished — apakah sekuens pembuka (kilatan kamera + foto jatuh) sudah selesai.
 * 2. activeStory   — foto polaroid mana yang sedang dibuka ceritanya (untuk modal).
 *
 * Dipisah jadi context sendiri supaya komponen anak (PolaroidCard, StoryModal, dst)
 * tidak perlu prop-drilling dari HomePage.
 */
function MemoryProvider({ children }) {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeStory, setActiveStory] = useState(null);

  const finishIntro = useCallback(() => setIntroFinished(true), []);
  const openStory = useCallback((photo) => setActiveStory(photo), []);
  const closeStory = useCallback(() => setActiveStory(null), []);

  const value = useMemo(
    () => ({
      introFinished,
      finishIntro,
      activeStory,
      openStory,
      closeStory,
    }),
    [introFinished, finishIntro, activeStory, openStory, closeStory]
  );

  return <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>;
}

function useMemoryContext() {
  const ctx = useContext(MemoryContext);
  if (!ctx) {
    throw new Error("useMemoryContext harus dipakai di dalam <MemoryProvider>");
  }
  return ctx;
}

export { MemoryProvider, useMemoryContext };
