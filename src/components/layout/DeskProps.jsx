const PROPS = [
  { emoji: "🪔", label: "lampu meja", className: "left-[4%] top-[8%] text-5xl sm:text-6xl", delay: "0s" },
  { emoji: "🌿", label: "tanaman kecil", className: "right-[5%] top-[6%] text-4xl sm:text-5xl", delay: "0.6s" },
  { emoji: "☕", label: "kopi hangat", className: "left-[6%] bottom-[10%] text-4xl", delay: "1.1s" },
  { emoji: "📷", label: "kamera analog", className: "right-[6%] bottom-[26%] text-4xl sm:text-5xl", delay: "0.3s" },
  { emoji: "📼", label: "kaset lama", className: "left-[3%] top-[42%] text-3xl hidden sm:block", delay: "1.6s" },
  { emoji: "✉️", label: "surat untuk Jasmine", className: "right-[4%] top-[38%] text-3xl hidden sm:block", delay: "0.9s" },
  { emoji: "🖊️", label: "pulpen", className: "left-[8%] bottom-[4%] text-2xl hidden md:block", delay: "1.9s" },
  { emoji: "🕰️", label: "jam analog", className: "right-[7%] bottom-[6%] text-4xl", delay: "0.4s" },
  { emoji: "🥀", label: "bunga kering", className: "left-[2%] bottom-[34%] text-3xl hidden sm:block", delay: "1.3s" },
];

/**
 * DeskProps menaburkan benda-benda kecil khas meja kerja/kamar vintage
 * di sekeliling tepi layar. Diberi blur & opacity rendah supaya berperan
 * sebagai suasana latar, bukan elemen yang bersaing perhatian dengan
 * foto polaroid dan cerita di tengah.
 */
function DeskProps() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 select-none">
      {PROPS.map((prop) => (
        <span
          key={prop.label}
          role="img"
          aria-label={prop.label}
          className={`absolute opacity-40 blur-[1px] drop-shadow-md animate-drift ${prop.className}`}
          style={{ animationDelay: prop.delay }}
        >
          {prop.emoji}
        </span>
      ))}
    </div>
  );
}

export default DeskProps;
