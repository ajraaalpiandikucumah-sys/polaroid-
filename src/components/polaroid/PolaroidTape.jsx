/**
 * PolaroidTape merender salah satu dari beberapa cara foto "ditempel" di meja:
 * selotip lurus, selotip miring di sudut, jepitan kayu, atau sedikit sobekan
 * di ujung kertas. Murni dekoratif, dipisah dari PolaroidCard supaya kartu
 * utama tetap fokus pada logika interaksi, bukan detail visual kecil ini.
 */
function PolaroidTape({ variant }) {
  if (variant === "tape-top") {
    return (
      <span
        className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 bg-paper-shadow/70 shadow-sm"
        style={{ backdropFilter: "blur(0.5px)" }}
        aria-hidden="true"
      />
    );
  }

  if (variant === "tape-corner") {
    return (
      <span
        className="absolute -top-2.5 -left-3 h-6 w-16 rotate-45 bg-paper-shadow/70 shadow-sm"
        aria-hidden="true"
      />
    );
  }

  if (variant === "pin") {
    return (
      <span
        className="absolute -top-3.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-desk-highlight to-desk-walnut shadow-md ring-1 ring-black/20"
        aria-hidden="true"
      />
    );
  }

  if (variant === "torn") {
    return (
      <span
        className="absolute -right-1 -top-1 h-5 w-8 rotate-6 bg-desk-shadow"
        style={{ clipPath: "polygon(0 40%, 30% 0, 60% 55%, 100% 10%, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
    );
  }

  return null;
}

export default PolaroidTape;
