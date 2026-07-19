/**
 * DeskBackground merender suasana meja kayu vintage yang tetap diam di belakang
 * layar (fixed) selagi konten di atasnya bisa di-scroll. Dibangun murni dari
 * gradient CSS + SVG noise, tanpa foto tekstur eksternal, supaya ringan dan
 * konsisten di semua ukuran layar.
 */
function DeskBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-desk-shadow">
      {/* Warna dasar kayu */}
      <div className="absolute inset-0 bg-gradient-to-br from-desk-oak via-desk-walnut to-desk-shadow" />

      {/* Serat kayu */}
      <div className="wood-grain absolute inset-0" />

      {/* Cahaya matahari sore masuk dari sudut kanan atas, seperti dari jendela */}
      <div
        className="absolute -right-1/4 -top-1/3 h-[80vh] w-[80vh] rounded-full opacity-60 animate-flicker"
        style={{
          background: "radial-gradient(circle, rgba(242,177,85,0.55) 0%, rgba(242,177,85,0.12) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-10 top-0 h-[120vh] w-[45vw] origin-top-right opacity-30"
        style={{
          background: "linear-gradient(200deg, rgba(255,220,160,0.35), transparent 60%)",
          transform: "rotate(18deg)",
        }}
      />

      {/* Vignette supaya foto & teks di tengah tetap jadi fokus */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 35%, rgba(10,6,3,0.55) 100%)" }}
      />

      {/* Debu halus beterbangan kena cahaya */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-glow-soft/70 animate-dust"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            left: `${(i * 7 + 10) % 90}%`,
            top: `${(i * 11 + 15) % 70}%`,
            animationDelay: `${(i % 7) * 0.9}s`,
            "--dust-x": `${(i % 2 === 0 ? 1 : -1) * (10 + i)}px`,
          }}
        />
      ))}

      <div className="grain-overlay absolute inset-0" />
    </div>
  );
}

export default DeskBackground;
