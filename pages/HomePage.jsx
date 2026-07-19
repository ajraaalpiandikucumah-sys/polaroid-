import { useEffect } from "react";
import IntroSequence from "../components/intro/IntroSequence.jsx";
import DeskBackground from "../components/layout/DeskBackground.jsx";
import DeskProps from "../components/layout/DeskProps.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import ScrollHint from "../components/ui/ScrollHint.jsx";
import PolaroidGrid from "../components/polaroid/PolaroidGrid.jsx";
import StoryModal from "../components/polaroid/StoryModal.jsx";
import { useMemoryContext } from "../context/MemoryContext.jsx";
import { useLenis } from "../hooks/useLenis.js";
import photos from "../data/photos.js";

/**
 * HomePage adalah satu-satunya "halaman" di proyek ini. Disusun sebagai
 * komposisi dari komponen-komponen kecil yang reusable, mengikuti pola
 * layout -> konten -> overlay yang lazim dipakai di proyek React production.
 */
function HomePage() {
  const { introFinished, finishIntro, activeStory, openStory, closeStory } = useMemoryContext();

  useLenis(introFinished);

  useEffect(() => {
    document.body.style.overflow = introFinished ? "" : "hidden";
  }, [introFinished]);

  return (
    <div className="relative min-h-screen">
      <DeskBackground />
      <DeskProps />

      {!introFinished ? <IntroSequence onComplete={finishIntro} /> : null}

      <main className={introFinished ? "opacity-100" : "pointer-events-none opacity-0"}>
        <Header />
        <ScrollHint />
        <PolaroidGrid photos={photos} onOpenStory={openStory} />
        <Footer />
      </main>

      <StoryModal photo={activeStory} onClose={closeStory} />
    </div>
  );
}

export default HomePage;
