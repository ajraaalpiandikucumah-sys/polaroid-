import PolaroidCard from "./PolaroidCard.jsx";

const OFFSET_CLASSES = ["sm:translate-y-0", "sm:translate-y-8", "sm:-translate-y-4", "sm:translate-y-4"];

/**
 * PolaroidGrid menyusun seluruh foto dari data/photos.js. Offset vertikal
 * kecil per kolom (lihat OFFSET_CLASSES) dipakai supaya susunannya terasa
 * "berserakan di atas meja" alih-alih grid kaku, tapi tetap berbasis CSS grid
 * biasa sehingga aman dan rapi di layar sekecil apa pun.
 */
function PolaroidGrid({ photos, onOpenStory }) {
  return (
    <section
      aria-label="Kumpulan foto polaroid kenangan"
      className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-x-5 gap-y-14 px-6 pb-32 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-20 md:grid-cols-4"
    >
      {photos.map((photo, index) => (
        <div key={photo.id} className={`${OFFSET_CLASSES[index % OFFSET_CLASSES.length]}`}>
          <PolaroidCard photo={photo} index={index} onOpen={onOpenStory} />
        </div>
      ))}
    </section>
  );
}

export default PolaroidGrid;
