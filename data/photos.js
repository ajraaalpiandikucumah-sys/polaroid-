/**
 * Setiap entri merepresentasikan satu foto polaroid di atas meja.
 *
 * decoration menentukan cara foto itu "ditempel" di meja:
 * - "tape-top"    : selotip di bagian atas, foto lurus
 * - "tape-corner" : selotip miring di salah satu sudut
 * - "pin"         : jepitan kayu di bagian atas
 * - "torn"        : sedikit sobek di salah satu ujung
 *
 * tilt adalah kemiringan dasar foto (derajat), dibuat manual per foto
 * (bukan acak penuh) supaya komposisinya tetap enak dilihat di semua layar.
 */
const photos = [
  {
    id: "memory-01",
    src: "/photos/memory-01.webp",
    alt: "Ajra dan Jasmine, potret dekat pertama kali",
    title: "Awal dari Semuanya",
    tilt: -6,
    decoration: "tape-top",
    story:
      "Aku masih sering berpikir, bagaimana mungkin seseorang yang awalnya hanyalah orang asing, perlahan menjadi rumah yang paling ingin aku datangi setiap hari. Kita memulai semuanya dari percakapan yang sederhana. Tidak ada yang istimewa saat itu. Tapi ternyata, hal-hal besar memang sering dimulai dari sesuatu yang terlihat biasa.",
  },
  {
    id: "memory-02",
    src: "/photos/memory-02.webp",
    alt: "Ajra dan Jasmine berpelukan",
    title: "Aku Mulai Nyaman",
    tilt: 4,
    decoration: "pin",
    story:
      "Aku mulai terbiasa mencari namamu di layar ponsel. Bukan karena aku tidak punya kesibukan lain, tetapi karena hari-hariku terasa sedikit lebih lengkap saat mendengar kabarmu. Pelan-pelan, tanpa sadar, kamu menjadi bagian dari rutinitasku.",
  },
  {
    id: "memory-03",
    src: "/photos/memory-03.webp",
    alt: "Ajra dan Jasmine bercanda konyol",
    title: "Panggilan Sayang",
    tilt: -3,
    decoration: "tape-corner",
    story:
      "Aku masih ingat pertama kali kamu memanggilku 'sayang'. Mungkin buat orang lain itu hanya sebuah kata. Tapi buatku, itu adalah momen ketika aku sadar kalau ada seseorang yang mulai menempatkanku di hatinya.",
  },
  {
    id: "memory-04",
    src: "/photos/memory-04.webp",
    alt: "Ajra dan Jasmine menunjukkan cincin",
    title: "Jarak yang Menguji",
    tilt: 7,
    decoration: "torn",
    story:
      "Ada masa-masa di mana jarak dan waktu terasa berat. Pesan yang lama dibalas, jadwal yang saling bertabrakan, rindu yang kadang harus ditahan sendirian. Tapi entah kenapa, setiap kali hampir menyerah, wajahmu selalu berhasil membuatku memilih untuk tetap bertahan.",
  },
  {
    id: "memory-05",
    src: "/photos/memory-05.jpg",
    alt: "Ajra dan Jasmine foto berdua dengan tenang",
    title: "Hari-Hari yang Bahagia",
    tilt: -8,
    decoration: "tape-top",
    story:
      "Aku suka saat kita bisa tertawa tanpa alasan yang jelas. Obrolan receh yang bahkan sekarang mungkin sudah kita lupa. Tapi perasaan bahagia saat itu masih tersimpan rapi di dalam ingatanku.",
  },
  {
    id: "memory-06",
    src: "/photos/memory-06.webp",
    alt: "Kolase foto Ajra dan Jasmine",
    title: "Momen-Momen Konyol",
    tilt: 5,
    decoration: "pin",
    story:
      "Aku suka gaya konyol yang cuma keluar kalau lagi sama kamu. Foto-foto aneh, pose yang nggak jelas, ketawa sampai perut sakit karena hal receh. Orang lain mungkin nggak paham lucunya di mana, tapi buat kita, itu salah satu bahasa cinta yang paling jujur.",
  },
  {
    id: "memory-07",
    src: "/photos/memory-07.webp",
    alt: "Ajra dan Jasmine menunjukkan cincin di dekat wajah",
    title: "Belajar Percaya Lagi",
    tilt: -4,
    decoration: "tape-corner",
    story:
      "Aku bukan orang yang mudah percaya sama perasaan sendiri. Tapi bersamamu, aku belajar pelan-pelan untuk nggak selalu waspada. Belajar bahwa nggak semua orang datang untuk pergi. Kamu salah satu alasan aku berani percaya lagi.",
  },
  {
    id: "memory-08",
    src: "/photos/memory-08.webp",
    alt: "Ajra dan Jasmine berdekatan di malam hari",
    title: "Bertahan Bersama",
    tilt: 6,
    decoration: "torn",
    story:
      "Kita pernah melewati hari-hari yang nggak mudah. Salah paham, ego, dan rasa lelah yang datang bergantian. Tapi setiap kali semuanya terasa berat, kita selalu memilih untuk tetap tinggal, bukan pergi. Dan itu yang bikin aku yakin, kita memang layak diperjuangkan.",
  },
  {
    id: "memory-09",
    src: "/photos/memory-09.webp",
    alt: "Ajra dan Jasmine tertawa bersama",
    title: "Terima Kasih",
    tilt: -5,
    decoration: "tape-top",
    story:
      "Terima kasih karena pernah membuatku tertawa sampai lupa waktu. Terima kasih karena pernah membuatku menangis hingga aku belajar menjadi lebih kuat. Terima kasih karena dari semua hal yang kita lewati, aku akhirnya mengerti bahwa cinta bukan hanya tentang memiliki, tetapi juga tentang bertumbuh.",
  },
  {
    id: "memory-10",
    src: "/photos/memory-10.webp",
    alt: "Ajra dan Jasmine berdua, foto terakhir",
    title: "Untuk Jasmine",
    tilt: 0,
    decoration: "pin",
    isFinal: true,
    story:
      "Jasmine... kalau suatu hari nanti kamu membuka website ini lagi, mungkin kita sudah lupa beberapa cerita kecil yang pernah kita lalui. Tapi aku berharap satu hal tidak pernah berubah. Semoga setiap kali kamu melihat foto-foto ini, kamu ingat bahwa pernah ada seseorang yang benar-benar berusaha mencintaimu sebaik yang ia bisa. Dan orang itu... adalah aku.",
  },
];

export default photos;
