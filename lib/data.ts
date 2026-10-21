import type {
  Major,
  NewsItem,
  EventItem,
  GalleryItem,
  Achievement,
  FAQItem,
  Facility,
  Teacher,
  Student,
  ScheduleItem,
  Assignment,
  Grade,
  AttendanceRecord,
  Announcement,
  PPDBRegistration,
  ClassInfo,
  DemoUser,
  DashboardStats,
  WebsiteSettings,
  HeroSlide,
} from './types';

/* ==========================================================================
   PROGRAM KEAHLIAN (MAJORS)
   ========================================================================== */

export const majors: Major[] = [
  {
    slug: 'rekayasa-perangkat-lunak',
    name: 'Rekayasa Perangkat Lunak',
    shortName: 'RPL',
    icon: 'Code',
    color: 'blue',
    description:
      'Program keahlian yang mempelajari pengembangan perangkat lunak mulai dari analisis kebutuhan, perancangan, pemrograman, pengujian, hingga pemeliharaan aplikasi berbasis web, desktop, dan mobile.',
    longDescription:
      'Rekayasa Perangkat Lunak (RPL) adalah program keahlian yang memfokuskan diri pada seluruh proses pengembangan perangkat lunak secara sistematis dan terukur. Siswa akan mempelajari dasar-dasar pemrograman, struktur data, basis data, hingga pengembangan aplikasi berbasis web dan mobile menggunakan teknologi terkini.\n\nKurikulum dirancang agar lulusan tidak hanya mampu menulis kode, tetapi juga mampu menganalisis kebutuhan pengguna, merancang arsitektur sistem, dan bekerja dalam tim menggunakan metode pengembangan modern seperti Agile dan DevOps. Setiap siswa dibekali portofolio nyata melalui proyek akhir dan magang industri.\n\nLulusan RPL SMK Negara Angin disiapkan untuk langsung bekerja sebagai programmer, melanjutkan studi ke jenjang Sarjana Terapan, maupun membangun startup sendiri di industri kreatif digital.',
    skills: [
      'Pemrograman Web (HTML, CSS, JavaScript)',
      'Pemrograman Berbasis Objek (Java, Python)',
      'Basis Data (MySQL, PostgreSQL)',
      'Pengembangan Aplikasi Mobile (Flutter)',
      'UI/UX Design & Prototyping',
      'Version Control (Git & GitHub)',
      'Analisis dan Perancangan Sistem',
      'Pengujian Perangkat Lunak (Testing)',
    ],
    careers: [
      'Software Developer',
      'Web Developer',
      'Mobile App Developer',
      'Database Administrator',
      'QA Engineer',
      'UI/UX Designer',
      'IT Consultant',
      'Startup Founder',
    ],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
  {
    slug: 'desain-komunikasi-visual',
    name: 'Desain Komunikasi Visual',
    shortName: 'DKV',
    icon: 'Palette',
    color: 'purple',
    description:
      'Program keahlian seni dan desain yang mengajarkan komunikasi visual melalui media cetak dan digital, branding, fotografi, ilustrasi, serta motion graphic.',
    longDescription:
      'Desain Komunikasi Visual (DKV) adalah program keahlian yang memadukan seni, teknologi, dan komunikasi. Siswa belajar menerjemahkan ide dan pesan menjadi karya visual yang efektif, mulai dari logo, poster, kemasan, hingga konten media sosial dan video pendek.\n\nPembelajaran berlangsung di studio desain dan lab multimedia yang dilengkapi perangkat Adobe Creative Cloud, kamera DSLR, dan fasilitas pencetakan. Siswa aktif mengerjakan proyek riil dari mitra industri, mengikuti kompetisi desain tingkat kota dan provinsi, serta membangun portofolio profesional sejak kelas X.\n\nLulusan DKV memiliki peluang luas di industri kreatif, periklanan, media, percetakan, maupun berwirausaha sebagai freelancer desainer dan content creator.',
    skills: [
      'Desain Grafis (Adobe Photoshop & Illustrator)',
      'Ilustrasi Digital',
      'Fotografi & Videografi',
      'Tipografi dan Tata Letak Layout',
      'Branding dan Identitas Visual',
      'UI Design untuk Aplikasi',
      'Motion Graphic & Animasi',
      'Desain Kemasan Produk',
    ],
    careers: [
      'Graphic Designer',
      'Ilustrator',
      'Fotografer',
      'Videografer',
      'Content Creator',
      'Brand Designer',
      'Art Director',
      'Desainer Kemasan',
    ],
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    slug: 'teknik-jaringan-komputer',
    name: 'Teknik Jaringan Komputer dan Telekomunikasi',
    shortName: 'TJKT',
    icon: 'Network',
    color: 'green',
    description:
      'Program keahlian yang mempelajari perancangan, instalasi, pengelolaan, dan keamanan jaringan komputer serta infrastruktur telekomunikasi.',
    longDescription:
      'Teknik Jaringan Komputer dan Telekomunikasi (TJKT) adalah program keahlian yang membekali siswa dengan kompetensi mengelola infrastruktur jaringan komputer dan telekomunikasi. Materi mencakup instalasi jaringan LAN dan WAN, konfigurasi perangkat Cisco, administrasi server, serta keamanan jaringan.\n\nSiswa berlatih langsung di lab jaringan berbasis perangkat Cisco dan MikroTik, lab server, serta lab fiber optik. Program ini bermitra dengan perusahaan telekomunikasi dan penyedia jasa internet sehingga siswa mendapatkan pengalaman magang dan kesempatan memperoleh sertifikasi internasional seperti Cisco CCNA.\n\nLulusan TJKT siap bekerja sebagai network administrator, system administrator, IT support, maupun teknisi telekomunikasi di berbagai perusahaan dan instansi pemerintah.',
    skills: [
      'Instalasi dan Konfigurasi Jaringan LAN/WAN',
      'Administrasi Router dan Switch (Cisco, MikroTik)',
      'Administrasi Server Linux dan Windows',
      'Keamanan Jaringan dan Cyber Security',
      'Troubleshooting dan Perawatan Jaringan',
      'Structured Cabling dan Fiber Optik',
      'Virtualisasi dan Komputasi Awan (Cloud)',
      'Internet of Things (IoT)',
    ],
    careers: [
      'Network Administrator',
      'System Administrator',
      'Network Engineer',
      'IT Support Technician',
      'Cyber Security Analyst',
      'Telecommunication Engineer',
      'Cloud Engineer',
      'Data Center Technician',
    ],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    slug: 'bisnis-digital',
    name: 'Bisnis Digital',
    shortName: 'BD',
    icon: 'TrendingUp',
    color: 'orange',
    description:
      'Program keahlian yang menggabungkan ilmu bisnis, pemasaran digital, dan kewirausahaan untuk menghadapi era ekonomi digital.',
    longDescription:
      'Bisnis Digital (BD) adalah program keahlian terbaru yang membekali siswa dengan kemampuan mengelola usaha secara daring. Kurikulum memadukan ilmu manajemen bisnis, pemasaran digital, e-commerce, dan analisis data untuk membangun bisnis yang kompetitif di era industri 4.0.\n\nSiswa dilatih membangun toko online, mengelola kampanye iklan digital, menganalisis perilaku konsumen, serta menyusun rencana bisnis yang layak. Melalui program teaching factory, setiap siswa mendapat kesempatan menjalankan usaha nyata yang diintegrasikan dengan mata pelajaran.\n\nLulusan BD dapat menjadi wirausaha muda, spesialis pemasaran digital, mengelola bisnis keluarga secara modern, atau melanjutkan studi ke jenjang manajemen dan bisnis digital.',
    skills: [
      'Digital Marketing (SEO, SEM, dan SMM)',
      'Manajemen E-Commerce dan Online Shop',
      'Manajemen Konten Media Sosial',
      'Analisis Data Bisnis dan Konsumen',
      'Kewirausahaan dan Penyusunan Bisnis Plan',
      'Konten Kreatif dan Storytelling',
      'Periklanan Digital (Google & Meta Ads)',
      'Manajemen Keuangan Usaha Kecil',
    ],
    careers: [
      'Digital Marketer',
      'Social Media Specialist',
      'E-Commerce Manager',
      'Content Creator',
      'Wirausaha / Entrepreneur',
      'SEO Specialist',
      'Business Analyst',
      'Pemilik Usaha Online',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

/* ==========================================================================
   BERITA (NEWS)
   ========================================================================== */

export const news: NewsItem[] = [
  {
    slug: 'siswa-rpl-juara-lks-provinsi-2024',
    title: 'Siswa RPL Juara 1 Lomba Kompetensi Siswa Tingkat Provinsi 2024',
    category: 'Prestasi',
    date: '2024-09-18',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    excerpt:
      'Rizky Ramadhan berhasil membawa pulang medali emas pada ajang Lomba Kompetensi Siswa (LKS) SMK tingkat provinsi bidang Software Development.',
    content:
      'Rizky Ramadhan, siswa kelas XII RPL 1, berhasil meraih juara 1 pada Lomba Kompetensi Siswa (LKS) SMK bidang Software Development tingkat provinsi yang diselenggarakan di Gedung Serbaguna Kota Angin. Rizky mengalahkan 42 peserta dari 28 SMK se-provinsi setelah melalui tiga tahap penilaian yang ketat.\n\nPada tahap awal, peserta diminta menyelesaikan soal pemrograman dan basis data selama 180 menit. Kemudian pada tahap final, Rizky merancang dan membangun aplikasi inventaris berbasis web dalam waktu enam jam nonstop. Karya tersebut dinilai tim juri karena struktur kode yang rapi, antarmuka yang intuitif, serta dokumentasi yang lengkap.\n\n"Alhamdulillah, ini adalah buah dari latihan setiap hari bersama tim ekstrakurikuler pemrograman. Terima kasih kepada Bapak Bambang Wijaya, S.Kom yang telah membimbing kami," ucap Rizky. Kepala Sekolah, Drs. H. Ahmad Sudirman, M.Pd, menyampaikan rasa bangganya dan berharap prestasi ini memicu semangat siswa lain untuk menekuni bidang teknologi.',
    author: 'Tim Humas SMK Negara Angin',
  },
  {
    slug: 'kunjungan-industri-pt-telkom',
    title: 'Kunjungan Industri ke PT Telkom Indonesia, Siswa TJKT Belajar Langsung dari Ahlinya',
    category: 'Kunjungan',
    date: '2024-09-10',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    excerpt:
      'Sebanyak 60 siswa TJKT kelas XII mengikuti kunjungan industri ke PT Telkom Indonesia untuk mempelajari infrastruktur jaringan dan telekomunikasi terkini.',
    content:
      'Sebanyak 60 siswa program keahlian TJKT kelas XII mengikuti kunjungan industri ke kantor operasional PT Telkom Indonesia. Kegiatan ini bertujuan memberikan gambaran nyata tentang dunia kerja di industri telekomunikasi, mulai dari perencanaan jaringan, operasional harian, hingga penanganan gangguan pelanggan.\n\nSelama kegiatan, siswa dipandu oleh tim teknisi untuk memasuki ruang data center, mengamati perangkat transmisi fiber optik, serta melihat simulasi monitoring jaringan menggunakan sistem terpadu. Para engineer juga membagikan pengalaman mereka seputar sertifikasi profesi dan peluang karier di sektor telekomunikasi.\n\nKepala Program Keahlian TJKT, Dedi Kurniawan, S.T., menyebut kunjungan ini bagian dari kurikulum yang wajib diikuti. "Teori di kelas harus dibarengi pengalaman langsung di lapangan agar siswa paham konteks pekerjaannya nanti," jelasnya.',
    author: 'Dedi Kurniawan, S.T.',
  },
  {
    slug: 'workshop-coding-guru-2024',
    title: 'Workshop Coding dan Pemrograman untuk Guru, Tingkatkan Kompetensi di Era Digital',
    category: 'Pelatihan',
    date: '2024-08-27',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    excerpt:
      'Seluruh guru mata pelajaran informatika mengikuti workshop pemrograman dengan Python dan JavaScript selama dua hari di lab komputer sekolah.',
    content:
      'Sebanyak 24 guru mengikuti workshop coding dan pemrograman yang diselenggarakan di Laboratorium Komputer 1 SMK Negara Angin. Pelatihan selama dua hari ini menghadirkan pemateri dari industri perangkat lunak serta dosen universitas mitra.\n\nMateri meliputi dasar-dasar Python untuk analisis data, pengembangan aplikasi web sederhana dengan JavaScript, serta integrasi kecerdasan buatan dalam pembelajaran. Para guru juga berlatih membuat media pembelajaran interaktif yang nantinya digunakan di kelas.\n\nKepala Sekolah menilai pelatihan semacam ini penting untuk menjaga kualitas pengajaran. "Guru harus terus belajar mengikuti perkembangan teknologi agar pembelajaran tidak tertinggal," tuturnya. Hasil workshop akan dijadikan bahan pengembangan modul ajar baru pada semester depan.',
    author: 'Tim Humas SMK Negara Angin',
  },
  {
    slug: 'pentas-seni-hut-ri-ke-79',
    title: 'Peringatan HUT RI ke-79 dengan Pentas Seni Budaya Nusantara',
    category: 'Kegiatan',
    date: '2024-08-21',
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
    excerpt:
      'Seluruh siswa SMK Negara Angin memeriahkan Hari Kemerdekaan Republik Indonesia ke-79 melalui pentas seni, lomba, dan penampilan budaya Nusantara.',
    content:
      'Dalam rangka memperingati Hari Kemerdekaan RI ke-79, OSIS dan seluruh siswa SMK Negara Angin menggelar pentas seni bertajuk "Nusantara Berdaya". Acara digelar di lapangan utama sekolah dan dihadiri seluruh warga sekolah serta orang tua siswa.\n\nPembukaan dimeriahkan parade budaya dari masing-masing kelas yang menampilkan pakaian adat dari berbagai daerah. Lanjut ke penampilan tari tradisional, pentas musik, dan panggung ekspresi siswa binaan program keahlian DKV yang menampilkan desain kostum bertema kebhinekaan.\n\nSelain pentas seni, panitia juga mengadakan lomba-lomba kecil seperti lomba makan kerupuk, balap karung, dan lomba membuat konten digital bertema kemerdekaan. Kegiatan ini diharapkan menumbuhkan rasa cinta tanah air sekaligus mengasah kreativitas siswa.',
    author: 'Tim Humas SMK Negara Angin',
  },
  {
    slug: 'kerjasama-beasiswa-universitas-mitra',
    title: 'Kerjasama Beasiswa dengan Universitas Negeri, Lulusan SMK Negara Angin Semakin Mudah Melanjutkan Kuliah',
    category: 'Kerjasama',
    date: '2024-07-15',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    excerpt:
      'SMK Negara Angin menandatangani kesepakatan beasiswa jalur prestasi dengan sebuah universitas negeri terkemuka untuk lulusan empat program keahlian.',
    content:
      'SMK Negara Angin resmi menjalin kerja sama dengan Universitas Negeri Angin melalui penandatanganan nota kesepahaman bidang penerimaan mahasiswa baru. Program ini memberikan jalur beasiswa prestasi bagi lulusan keempat program keahlian, yaitu RPL, DKV, TJKT, dan Bisnis Digital.\n\nMelalui skema ini, siswa berprestasi dengan portofolio kompetensi yang terverifikasi berhak mengikuti seleksi khusus tanpa tes tulisan. Kuota beasiswa disediakan untuk 20 orang lulusan terbaik setiap tahunnya, mencakup pembebasan biaya kuliah selama delapan semester.\n\n"Kami ingin membuka jalan selebar mungkin bagi lulusan SMK agar tidak berhenti setelah tamat. Keterampilan yang dimiliki siswa SMK sangat dibutuhkan di dunia kerja maupun di jenjang kuliah," ungkap Drs. H. Ahmad Sudirman, M.Pd.',
    author: 'Tim Humas SMK Negara Angin',
  },
  {
    slug: 'perpustakaan-digital-resmi-diluncurkan',
    title: 'Perpustakaan Digital Resmi Diluncurkan, Koleksi 12.000 Buku Bisa Diakses dari Rumah',
    category: 'Fasilitas',
    date: '2024-06-12',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    excerpt:
      'Perpustakaan digital SMK Negara Angin kini resmi beroperasi dengan lebih dari 12.000 koleksi buku, jurnal, dan modul elektronik yang bisa diakses seluruh siswa.',
    content:
      'Setelah enam bulan pembangunan, perpustakaan digital SMK Negara Angin resmi diluncurkan. Layanan ini menyediakan akses terhadap lebih dari 12.000 koleksi buku, jurnal, dan modul ajar elektronik yang dapat dibaca melalui komputer maupun ponsel pintar.\n\nSetiap siswa dan guru memiliki akun pribadi untuk meminjam buku digital selama 14 hari. Sistem juga dilengkapi fitur rekomendasi bacaan berdasarkan program keahlian, sehingga siswa RPL, DKV, TJKT, dan Bisnis Digital mendapat saran bacaan yang relevan.\n\nSelain koleksi digital, perpustakaan fisik juga direnovasi dengan menambah ruang baca nyaman, ruang diskusi kelompok, dan area kerja dengan jaringan internet berkecepatan tinggi. Kepala Perpustakaan berharap inovasi ini meningkatkan minat baca siswa yang masih rendah.',
    author: 'Tim Humas SMK Negara Angin',
  },
];

/* ==========================================================================
   AGENDA (EVENTS) - tahun 2024
   ========================================================================== */

export const events: EventItem[] = [
  {
    id: 'ev-001',
    title: 'Rapat Koordinasi Akhir Semester Ganjil',
    date: '2024-12-05',
    time: '08.00 - 11.00 WIB',
    location: 'Ruang Rapat Sekolah',
    type: 'Akademik',
    description:
      'Rapat koordinasi seluruh guru dan staf tata usaha membahas jadwal penilaian akhir semester, pengolahan nilai, serta pembagian rapor kepada orang tua siswa.',
  },
  {
    id: 'ev-002',
    title: 'Ujian Praktik Kejuruan (UPK) Kelas XII',
    date: '2024-11-18',
    time: '07.30 - 15.00 WIB',
    location: 'Lab Komputer 1, Lab Jaringan, Studio DKV',
    type: 'Akademik',
    description:
      'Ujian praktik kejuruan bagi siswa kelas XII seluruh program keahlian. Siswa diminta mendemonstrasikan kompetensi inti sesuai standar kelulusan yang ditetapkan sekolah.',
  },
  {
    id: 'ev-003',
    title: 'Pelantikan Pengurus OSIS dan MPK Periode 2024/2025',
    date: '2024-10-21',
    time: '08.00 - 10.30 WIB',
    location: 'Aula Utama SMK Negara Angin',
    type: 'Kegiatan',
    description:
      'Pelantikan pengurus OSIS dan Majelis Perwakilan Kelas periode 2024/2025 yang dihadiri seluruh siswa, pembina OSIS, dan dewan guru. Dilanjutkan apel pagi dan aksi bersih lingkungan.',
  },
  {
    id: 'ev-004',
    title: 'Workshop Public Speaking dan Kepemimpinan Siswa',
    date: '2024-10-08',
    time: '09.00 - 14.00 WIB',
    location: 'Aula Utama SMK Negara Angin',
    type: 'Pengembangan',
    description:
      'Pelatihan keterampilan berbicara di depan umum, teknik presentasi, dan manajemen organisasi bagi pengurus OSIS, MPK, dan perwakilan kelas dari seluruh jurusan.',
  },
  {
    id: 'ev-005',
    title: 'Kompetisi Keahlian Siswa Tingkat Kota (LKS Bidang Desain Grafis)',
    date: '2024-09-28',
    time: '07.00 - 16.00 WIB',
    location: 'Lab Multimedia DKV',
    type: 'Kompetisi',
    description:
      'SMK Negara Angin menjadi tuan rumah Lomba Kompetensi Siswa tingkat kota bidang Desain Grafis. Sebanyak 35 peserta dari 15 SMK ikut bertanding dalam kategori desain poster dan branding.',
  },
  {
    id: 'ev-006',
    title: 'Kunjungan Industri ke Startup Teknologi',
    date: '2024-09-14',
    time: '08.00 - 14.00 WIB',
    location: 'Kantor Startup Teknologi Angin',
    type: 'Pengembangan',
    description:
      'Kunjungan siswa kelas XI RPL dan Bisnis Digital ke perusahaan startup untuk mempelajari budaya kerja, proses pengembangan produk, serta peluang magang bagi siswa SMK.',
  },
];

/* ==========================================================================
   GALERI (GALLERY)
   ========================================================================== */

export const gallery: GalleryItem[] = [
  {
    id: 'gl-001',
    title: 'Kegiatan Belajar Mengajar di Lab Komputer',
    category: 'Pembelajaran',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    date: '2024-11-04',
  },
  {
    id: 'gl-002',
    title: 'Praktik Instalasi Jaringan di Lab TJKT',
    category: 'Pembelajaran',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    date: '2024-10-29',
  },
  {
    id: 'gl-003',
    title: 'Praktik Desain Grafis di Studio DKV',
    category: 'Pembelajaran',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    date: '2024-10-17',
  },
  {
    id: 'gl-004',
    title: 'Pentas Seni Peringatan HUT RI ke-79',
    category: 'Kegiatan',
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
    date: '2024-08-21',
  },
  {
    id: 'gl-005',
    title: 'Pelantikan Pengurus OSIS Periode 2024/2025',
    category: 'Kegiatan',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    date: '2024-10-21',
  },
  {
    id: 'gl-006',
    title: 'Juara 1 LKS Provinsi Bidang Software Development',
    category: 'Prestasi',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    date: '2024-09-18',
  },
  {
    id: 'gl-007',
    title: 'Kunjungan ke Data Center PT Telkom Indonesia',
    category: 'Kegiatan',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    date: '2024-09-10',
  },
  {
    id: 'gl-008',
    title: 'Suasana Perpustakaan Digital yang Baru',
    category: 'Fasilitas',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    date: '2024-06-12',
  },
];

/* ==========================================================================
   PRESTASI (ACHIEVEMENTS)
   ========================================================================== */

export const achievements: Achievement[] = [
  {
    id: 'ach-001',
    title: 'Juara 1 LKS Software Development',
    event: 'Lomba Kompetensi Siswa SMK Tingkat Provinsi',
    level: 'Provinsi',
    year: '2024',
    students: ['Rizky Ramadhan'],
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  },
  {
    id: 'ach-002',
    title: 'Juara 2 Kompetisi Desain Grafis',
    event: 'Lomba Desain Poster dan Branding Tingkat Kota',
    level: 'Kota',
    year: '2024',
    students: ['Putri Ayu Lestari', 'Dimas Prasetyo'],
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 'ach-003',
    title: 'Finalis Kompetisi Jaringan Komputer Nasional',
    event: 'National Network Competition',
    level: 'Nasional',
    year: '2023',
    students: ['Bagas Nugroho', 'Fajar Sidik', 'Ilham Maulana'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    id: 'ach-004',
    title: 'Juara 3 Bisnis Plan Digital',
    event: 'Kompetisi Kewirausahaan Pelajar Tingkat Provinsi',
    level: 'Provinsi',
    year: '2024',
    students: ['Nabila Safitri', 'Yoga Pratama', 'Andini Putri'],
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
  },
];

/* ==========================================================================
   FAQ
   ========================================================================== */

export const faqs: FAQItem[] = [
  {
    question: 'Bagaimana cara mendaftar PPDB di SMK Negara Angin?',
    answer:
      'Pendaftaran PPDB dilakukan secara daring melalui laman resmi sekolah pada gelombang yang telah ditentukan. Calon pendaftar mengisi formulir, mengunggah scan ijazah, akta kelahiran, dan kartu keluarga, kemudian membayar biaya pendaftaran melalui transfer bank atau e-money. Informasi lengkap tersedia pada menu PPDB di website ini.',
    category: 'PPDB',
  },
  {
    question: 'Berapa biaya pendaftaran dan uang pangkal sekolah?',
    answer:
      'Biaya pendaftaran PPDB sebesar Rp200.000. Untuk uang pangkal dan biaya pendidikan bulanan, sekolah menerapkan skema sesuai kemampuan orang tua. SMK Negara Angin juga menyediakan beasiswa bagi siswa berprestasi dan siswa kurang mampu melalui program BOS dan beasiswa yayasan.',
    category: 'PPDB',
  },
  {
    question: 'Apa saja program keahlian yang tersedia?',
    answer:
      'SMK Negara Angin membuka empat program keahlian, yaitu Rekayasa Perangkat Lunak (RPL), Desain Komunikasi Visual (DKV), Teknik Jaringan Komputer dan Telekomunikasi (TJKT), serta Bisnis Digital (BD). Setiap program keahlian memiliki kurikulum dan fasilitas praktik yang berbeda sesuai kebutuhan industri.',
    category: 'Akademik',
  },
  {
    question: 'Apakah lulusan SMK bisa melanjutkan kuliah?',
    answer:
      'Tentu bisa. Lulusan SMK Negara Angin dapat melanjutkan studi ke universitas maupun politeknik melalui jalur prestasi, jalur undangan, maupun seleksi nasional. Sekolah juga telah menjalin kerja sama beasiswa dengan beberapa perguruan tinggi negeri dan swasta mitra.',
    category: 'Akademik',
  },
  {
    question: 'Apakah sekolah menyediakan fasilitas praktik yang memadai?',
    answer:
      'Ya. Sekolah memiliki Laboratorium Komputer, Laboratorium Jaringan, Studio DKV, Ruang Multimedia, Perpustakaan Digital, serta Teaching Factory untuk Bisnis Digital. Semua laboratorium dilengkapi perangkat yang diperbarui secara berkala mengikuti kebutuhan industri.',
    category: 'Fasilitas',
  },
  {
    question: 'Bagaimana sistem penilaian dan kelulusan siswa?',
    answer:
      'Penilaian dilakukan secara terpadu mencakup nilai tugas, Ujian Tengah Semester, Ujian Akhir Semester, serta penilaian praktik kejuruan. Untuk kelas XII, kelulusan juga ditentukan oleh Ujian Praktik Kejuruan dan Ujian Sekolah. Kriteria ketuntasan minimal setiap mata pelajaran adalah 75.',
    category: 'Akademik',
  },
  {
    question: 'Apakah tersedia ekstrakurikuler dan kegiatan siswa?',
    answer:
      'Tersedia berbagai ekstrakurikuler seperti programming club, desain kreatif, jaringan komputer, futsal, pramuka, PMR, pencak silat, dan kelompok ilmiah remaja. Setiap siswa wajib mengikuti minimal satu ekstrakurikuler sesuai minat dan bakatnya.',
    category: 'Kegiatan',
  },
  {
    question: 'Apakah sekolah menerima siswa pindahan dari sekolah lain?',
    answer:
      'Sekolah menerima siswa pindahan sesuai kuota dan ketersediaan program keahlian. Prosesnya meliputi pengajuan surat pindah, verifikasi rapor dan transkrip nilai, serta tes penyesuaian kompetensi dasar. Informasi lebih lanjut dapat ditanyakan langsung ke bagian tata usaha sekolah.',
    category: 'PPDB',
  },
];

/* ==========================================================================
   FASILITAS (FACILITIES)
   ========================================================================== */

export const facilities: Facility[] = [
  {
    name: 'Laboratorium Komputer',
    description:
      'Dua laboratorium komputer dengan 96 unit PC yang terhubung jaringan berkecepatan tinggi untuk praktik pemrograman, basis data, dan desain web.',
    icon: 'Monitor',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  },
  {
    name: 'Perpustakaan Digital',
    description:
      'Perpustakaan dengan 12.000 koleksi buku dan jurnal digital, ruang baca nyaman, ruang diskusi, serta akses internet gratis bagi seluruh siswa.',
    icon: 'BookOpen',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
  },
  {
    name: 'Laboratorium Jaringan',
    description:
      'Lab jaringan berbasis perangkat Cisco dan MikroTik untuk praktik instalasi, konfigurasi, keamanan jaringan, serta structured cabling dan fiber optik.',
    icon: 'Network',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    name: 'Studio DKV',
    description:
      'Studio desain lengkap dengan komputer iMac, tablet gambar, kamera DSLR, lighting, dan area pencetakan untuk praktik desain grafis, fotografi, dan videografi.',
    icon: 'Palette',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
  {
    name: 'Ruang Multimedia',
    description:
      'Ruang serbaguna berkapasitas 200 orang yang dilengkapi proyektor, sistem suara, dan panggung untuk kegiatan seminar, pentas seni, dan apel sekolah.',
    icon: 'Presentation',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    name: 'Teaching Factory Bisnis Digital',
    description:
      'Usaha sekolah berbasis e-commerce yang dijalankan siswa kelas XII Bisnis Digital sebagai tempat praktik manajemen toko, pemasaran digital, dan layanan pelanggan.',
    icon: 'Store',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

/* ==========================================================================
   GURU (TEACHERS)
   ========================================================================== */

export const teachers: Teacher[] = [
  {
    id: 't-001',
    name: 'Drs. H. Ahmad Sudirman, M.Pd',
    nip: '196504121990031005',
    subject: 'Pendidikan Kewarganegaraan',
    position: 'Kepala Sekolah',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    email: 'ahmad.sudirman@smknegaraangin.sch.id',
    phone: '0812-3456-7801',
  },
  {
    id: 't-002',
    name: 'Hj. Siti Rahmawati, S.Pd',
    nip: '197803152005012003',
    subject: 'Matematika',
    position: 'Wali Kelas X RPL 1',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    email: 'siti.rahmawati@smknegaraangin.sch.id',
    phone: '0812-3456-7802',
  },
  {
    id: 't-003',
    name: 'Bambang Wijaya, S.Kom',
    nip: '198706222010111004',
    subject: 'Pemrograman Web',
    position: 'Wali Kelas XI RPL 1',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    email: 'bambang.wijaya@smknegaraangin.sch.id',
    phone: '0812-3456-7803',
  },
  {
    id: 't-004',
    name: 'Rina Kartika, S.Pd',
    nip: '198411052008012007',
    subject: 'Bahasa Indonesia',
    position: 'Guru Mata Pelajaran',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    email: 'rina.kartika@smknegaraangin.sch.id',
    phone: '0812-3456-7804',
  },
  {
    id: 't-005',
    name: 'Dedi Kurniawan, S.T.',
    nip: '198209182006041008',
    subject: 'Jaringan Komputer',
    position: 'Kepala Program Keahlian TJKT',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    email: 'dedi.kurniawan@smknegaraangin.sch.id',
    phone: '0812-3456-7805',
  },
  {
    id: 't-006',
    name: 'Maya Anggraini, S.Sn',
    nip: '199005142014042009',
    subject: 'Desain Grafis',
    position: 'Kepala Program Keahlian DKV',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    email: 'maya.anggraini@smknegaraangin.sch.id',
    phone: '0812-3456-7806',
  },
  {
    id: 't-007',
    name: 'Fajar Pratama, S.Pd',
    nip: '199102232015031010',
    subject: 'Bahasa Inggris',
    position: 'Guru Mata Pelajaran',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    email: 'fajar.pratama@smknegaraangin.sch.id',
    phone: '0812-3456-7807',
  },
  {
    id: 't-008',
    name: 'Dewi Lestari, S.E.',
    nip: '198812072012012011',
    subject: 'Bisnis Digital',
    position: 'Kepala Program Keahlian Bisnis Digital',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    email: 'dewi.lestari@smknegaraangin.sch.id',
    phone: '0812-3456-7808',
  },
];

/* ==========================================================================
   SISWA (STUDENTS)
   ========================================================================== */

export const students: Student[] = [
  {
    id: 's-001',
    nis: '20241001',
    name: 'Rizky Ramadhan',
    class: 'XII RPL 1',
    major: 'Rekayasa Perangkat Lunak',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
    email: 'rizky.ramadhan@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5601',
    address: 'Jl. Merpati No. 12, RT 03/RW 05, Kota Angin',
    parentName: 'H. Muhamad Ramadhan',
    parentPhone: '0812-9876-5431',
  },
  {
    id: 's-002',
    nis: '20241002',
    name: 'Putri Ayu Lestari',
    class: 'XII DKV 1',
    major: 'Desain Komunikasi Visual',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    email: 'putri.ayu@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5602',
    address: 'Jl. Kenanga No. 5, RT 01/RW 02, Kota Angin',
    parentName: 'Budi Lestari',
    parentPhone: '0812-9876-5432',
  },
  {
    id: 's-003',
    nis: '20241003',
    name: 'Bagas Nugroho',
    class: 'XII TJKT 1',
    major: 'Teknik Jaringan Komputer dan Telekomunikasi',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    email: 'bagas.nugroho@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5603',
    address: 'Jl. Anggrek No. 8, RT 06/RW 03, Kota Angin',
    parentName: 'Slamet Nugroho',
    parentPhone: '0812-9876-5433',
  },
  {
    id: 's-004',
    nis: '20241004',
    name: 'Nabila Safitri',
    class: 'XII BD 1',
    major: 'Bisnis Digital',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    email: 'nabila.safitri@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5604',
    address: 'Jl. Dahlia No. 17, RT 04/RW 01, Kota Angin',
    parentName: 'Ahmad Safitri',
    parentPhone: '0812-9876-5434',
  },
  {
    id: 's-005',
    nis: '20241005',
    name: 'Dimas Prasetyo',
    class: 'XI DKV 1',
    major: 'Desain Komunikasi Visual',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    email: 'dimas.prasetyo@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5605',
    address: 'Jl. Mawar No. 22, RT 02/RW 04, Kota Angin',
    parentName: 'Joko Prasetyo',
    parentPhone: '0812-9876-5435',
  },
  {
    id: 's-006',
    nis: '20241006',
    name: 'Fajar Sidik',
    class: 'XI TJKT 1',
    major: 'Teknik Jaringan Komputer dan Telekomunikasi',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    email: 'fajar.sidik@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5606',
    address: 'Jl. Melati No. 10, RT 07/RW 06, Kota Angin',
    parentName: 'Hendra Sidik',
    parentPhone: '0812-9876-5436',
  },
  {
    id: 's-007',
    nis: '20241007',
    name: 'Ilham Maulana',
    class: 'XI TJKT 1',
    major: 'Teknik Jaringan Komputer dan Telekomunikasi',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    email: 'ilham.maulana@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5607',
    address: 'Jl. Flamboyan No. 3, RT 05/RW 02, Kota Angin',
    parentName: 'Rizal Maulana',
    parentPhone: '0812-9876-5437',
  },
  {
    id: 's-008',
    nis: '20241008',
    name: 'Yoga Pratama',
    class: 'XI BD 1',
    major: 'Bisnis Digital',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    email: 'yoga.pratama@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5608',
    address: 'Jl. Teratai No. 14, RT 03/RW 07, Kota Angin',
    parentName: 'Suryanto Pratama',
    parentPhone: '0812-9876-5438',
  },
  {
    id: 's-009',
    nis: '20241009',
    name: 'Andini Putri',
    class: 'XI BD 1',
    major: 'Bisnis Digital',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
    email: 'andini.putri@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5609',
    address: 'Jl. Bougenville No. 7, RT 01/RW 03, Kota Angin',
    parentName: 'Eko Putro',
    parentPhone: '0812-9876-5439',
  },
  {
    id: 's-010',
    nis: '20241010',
    name: 'Arya Wijaksana',
    class: 'X RPL 1',
    major: 'Rekayasa Perangkat Lunak',
    image:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
    email: 'arya.wijaksana@siswa.smknegaraangin.sch.id',
    phone: '0857-1234-5610',
    address: 'Jl. Cempaka No. 19, RT 08/RW 01, Kota Angin',
    parentName: 'Dwi Wijaksana',
    parentPhone: '0812-9876-5440',
  },
];

/* ==========================================================================
   JADWAL PELAJARAN (SCHEDULE) - siswa XI RPL 1 Senin-Jumat
   ========================================================================== */

export const schedule: ScheduleItem[] = [
  // Senin
  { day: 'Senin', time: '07.00 - 07.45', subject: 'Upacara Bendera', teacher: '-', room: 'Lapangan' },
  { day: 'Senin', time: '07.45 - 09.15', subject: 'Pemrograman Web', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 1' },
  { day: 'Senin', time: '09.15 - 09.30', subject: 'Istirahat', teacher: '-', room: '-' },
  { day: 'Senin', time: '09.30 - 11.00', subject: 'Basis Data', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 1' },
  { day: 'Senin', time: '11.00 - 11.15', subject: 'Istirahat', teacher: '-', room: '-' },
  { day: 'Senin', time: '11.15 - 12.45', subject: 'Matematika', teacher: 'Hj. Siti Rahmawati, S.Pd', room: 'Ruang 201' },
  { day: 'Senin', time: '12.45 - 13.15', subject: 'Istirahat & Shalat', teacher: '-', room: 'Musholla' },
  { day: 'Senin', time: '13.15 - 14.45', subject: 'Bahasa Indonesia', teacher: 'Rina Kartika, S.Pd', room: 'Ruang 201' },
  // Selasa
  { day: 'Selasa', time: '07.00 - 08.30', subject: 'Pemrograman Berbasis Objek', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 2' },
  { day: 'Selasa', time: '08.30 - 10.00', subject: 'Bahasa Inggris', teacher: 'Fajar Pratama, S.Pd', room: 'Ruang 201' },
  { day: 'Selasa', time: '10.00 - 10.15', subject: 'Istirahat', teacher: '-', room: '-' },
  { day: 'Selasa', time: '10.15 - 11.45', subject: 'Pendidikan Agama Islam', teacher: 'Drs. H. Ahmad Sudirman, M.Pd', room: 'Ruang 201' },
  { day: 'Selasa', time: '11.45 - 12.15', subject: 'Istirahat & Shalat', teacher: '-', room: 'Musholla' },
  { day: 'Selasa', time: '12.15 - 13.45', subject: 'Pemrograman Web', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 1' },
  { day: 'Selasa', time: '13.45 - 14.45', subject: 'Pendidikan Jasmani', teacher: 'Fajar Pratama, S.Pd', room: 'Lapangan' },
  // Rabu
  { day: 'Rabu', time: '07.00 - 08.30', subject: 'Matematika', teacher: 'Hj. Siti Rahmawati, S.Pd', room: 'Ruang 201' },
  { day: 'Rabu', time: '08.30 - 10.00', subject: 'Basis Data', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 1' },
  { day: 'Rabu', time: '10.00 - 10.15', subject: 'Istirahat', teacher: '-', room: '-' },
  { day: 'Rabu', time: '10.15 - 11.45', subject: 'Desain Antarmuka', teacher: 'Maya Anggraini, S.Sn', room: 'Lab Komputer 2' },
  { day: 'Rabu', time: '11.45 - 12.15', subject: 'Istirahat & Shalat', teacher: '-', room: 'Musholla' },
  { day: 'Rabu', time: '12.15 - 13.45', subject: 'Bahasa Indonesia', teacher: 'Rina Kartika, S.Pd', room: 'Ruang 201' },
  { day: 'Rabu', time: '13.45 - 14.45', subject: 'Pendidikan Kewarganegaraan', teacher: 'Drs. H. Ahmad Sudirman, M.Pd', room: 'Ruang 201' },
  // Kamis
  { day: 'Kamis', time: '07.00 - 08.30', subject: 'Pemrograman Berbasis Objek', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 2' },
  { day: 'Kamis', time: '08.30 - 10.00', subject: 'Pemrograman Web', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 1' },
  { day: 'Kamis', time: '10.00 - 10.15', subject: 'Istirahat', teacher: '-', room: '-' },
  { day: 'Kamis', time: '10.15 - 11.45', subject: 'Bahasa Inggris', teacher: 'Fajar Pratama, S.Pd', room: 'Ruang 201' },
  { day: 'Kamis', time: '11.45 - 12.15', subject: 'Istirahat & Shalat', teacher: '-', room: 'Musholla' },
  { day: 'Kamis', time: '12.15 - 13.45', subject: 'Seni dan Budaya', teacher: 'Maya Anggraini, S.Sn', room: 'Ruang 201' },
  // Jumat
  { day: 'Jumat', time: '07.00 - 07.30', subject: 'Shalat Dhuha Berjamaah', teacher: '-', room: 'Musholla' },
  { day: 'Jumat', time: '07.30 - 09.00', subject: 'Pemrograman Web', teacher: 'Bambang Wijaya, S.Kom', room: 'Lab Komputer 1' },
  { day: 'Jumat', time: '09.00 - 09.15', subject: 'Istirahat', teacher: '-', room: '-' },
  { day: 'Jumat', time: '09.15 - 10.45', subject: 'Matematika', teacher: 'Hj. Siti Rahmawati, S.Pd', room: 'Ruang 201' },
  { day: 'Jumat', time: '10.45 - 11.30', subject: 'Shalat Jumat', teacher: '-', room: 'Masjid' },
];

/* ==========================================================================
   TUGAS (ASSIGNMENTS)
   ========================================================================== */

export const assignments: Assignment[] = [
  {
    id: 'asg-001',
    title: 'Membuat REST API CRUD menggunakan Express.js',
    subject: 'Pemrograman Web',
    description:
      'Buat REST API untuk mengelola data produk (CRUD) menggunakan Express.js dan MySQL. Sertakan dokumentasi endpoint dalam format Markdown.',
    dueDate: '2024-10-28',
    status: 'dikerjakan',
    type: 'Praktik',
    attachments: ['panduan-rest-api.pdf'],
  },
  {
    id: 'asg-002',
    title: 'Latihan Soal Trigonometri dan Limit Fungsi',
    subject: 'Matematika',
    description:
      'Kerjakan soal hal 142-145 buku paket Matematika. Tulis jawaban lengkap di buku tulis dan upload foto hasilnya.',
    dueDate: '2024-10-24',
    status: 'selesai',
    type: 'Latihan',
  },
  {
    id: 'asg-003',
    title: 'Menulis Teks Eksposisi tentang Teknologi Pendidikan',
    subject: 'Bahasa Indonesia',
    description:
      'Tulis teks eksposisi minimal 500 kata dengan tema "Peran Teknologi dalam Meningkatkan Mutu Pendidikan di Indonesia". Gunakan format dokumen dan sertakan daftar pustaka.',
    dueDate: '2024-10-30',
    status: 'belum',
    type: 'Tugas Tertulis',
  },
  {
    id: 'asg-004',
    title: 'Implementasi Inheritance dan Polymorphism di Java',
    subject: 'Pemrograman Berbasis Objek',
    description:
      'Buat program Java yang menerapkan konsep inheritance dan polymorphism. Studi kasus: sistem pengelolaan kendaraan (mobil, motor, truk). Sertakan diagram kelas.',
    dueDate: '2024-11-01',
    status: 'belum',
    type: 'Praktik',
    attachments: ['template-diagram-kelas.drawio'],
  },
  {
    id: 'asg-005',
    title: 'Reading Comprehension: Technology in Education',
    subject: 'Bahasa Inggris',
    description:
      'Read the article "How AI Is Transforming Education" and answer the 15 comprehension questions. Write your answers in English with complete sentences.',
    dueDate: '2024-10-22',
    status: 'terlambat',
    type: 'Latihan',
    attachments: ['article-ai-education.pdf'],
  },
  {
    id: 'asg-006',
    title: 'Desain Wireframe Aplikasi Mobile E-Learning',
    subject: 'Desain Antarmuka',
    description:
      'Buat wireframe lengkap untuk aplikasi mobile e-learning menggunakan Figma. Minimal 8 screen: splash, login, beranda, daftar kursus, detail kursus, video player, profil, dan settings.',
    dueDate: '2024-11-04',
    status: 'dikerjakan',
    type: 'Proyek',
  },
];

/* ==========================================================================
   NILAI (GRADES) - Semester Ganjil 2024/2025
   ========================================================================== */

export const grades: Grade[] = [
  {
    subject: 'Pemrograman Web',
    teacher: 'Bambang Wijaya, S.Kom',
    tugas: 88,
    uts: 85,
    uas: 90,
    average: 87.6,
    grade: 'A',
  },
  {
    subject: 'Basis Data',
    teacher: 'Bambang Wijaya, S.Kom',
    tugas: 82,
    uts: 78,
    uas: 84,
    average: 81.2,
    grade: 'B+',
  },
  {
    subject: 'Pemrograman Berbasis Objek',
    teacher: 'Bambang Wijaya, S.Kom',
    tugas: 90,
    uts: 87,
    uas: 92,
    average: 89.6,
    grade: 'A',
  },
  {
    subject: 'Matematika',
    teacher: 'Hj. Siti Rahmawati, S.Pd',
    tugas: 75,
    uts: 70,
    uas: 78,
    average: 74.2,
    grade: 'B',
  },
  {
    subject: 'Bahasa Indonesia',
    teacher: 'Rina Kartika, S.Pd',
    tugas: 80,
    uts: 82,
    uas: 85,
    average: 82.2,
    grade: 'B+',
  },
  {
    subject: 'Bahasa Inggris',
    teacher: 'Fajar Pratama, S.Pd',
    tugas: 78,
    uts: 80,
    uas: 82,
    average: 80.0,
    grade: 'B+',
  },
  {
    subject: 'Desain Antarmuka',
    teacher: 'Maya Anggraini, S.Sn',
    tugas: 85,
    uts: 88,
    uas: 86,
    average: 86.2,
    grade: 'A',
  },
  {
    subject: 'Pendidikan Kewarganegaraan',
    teacher: 'Drs. H. Ahmad Sudirman, M.Pd',
    tugas: 82,
    uts: 80,
    uas: 84,
    average: 82.0,
    grade: 'B+',
  },
];

/* ==========================================================================
   PRESENSI (ATTENDANCE) - 20 record terakhir (Oktober 2024)
   ========================================================================== */

export const attendance: AttendanceRecord[] = [
  { date: '2024-10-01', status: 'hadir', subject: 'Pemrograman Web' },
  { date: '2024-10-01', status: 'hadir', subject: 'Basis Data' },
  { date: '2024-10-02', status: 'hadir', subject: 'Bahasa Inggris' },
  { date: '2024-10-02', status: 'hadir', subject: 'Pemrograman Berbasis Objek' },
  { date: '2024-10-03', status: 'hadir', subject: 'Matematika' },
  { date: '2024-10-03', status: 'hadir', subject: 'Desain Antarmuka' },
  { date: '2024-10-04', status: 'sakit', subject: 'Pemrograman Web', note: 'Demam, surat keterangan dokter terlampir' },
  { date: '2024-10-04', status: 'sakit', subject: 'Bahasa Indonesia', note: 'Demam, surat keterangan dokter terlampir' },
  { date: '2024-10-07', status: 'hadir', subject: 'Pemrograman Web' },
  { date: '2024-10-07', status: 'hadir', subject: 'Matematika' },
  { date: '2024-10-08', status: 'hadir', subject: 'Bahasa Inggris' },
  { date: '2024-10-08', status: 'hadir', subject: 'Pemrograman Berbasis Objek' },
  { date: '2024-10-09', status: 'izin', subject: 'Basis Data', note: 'Mengikuti Lomba Kompetensi Siswa tingkat kota' },
  { date: '2024-10-09', status: 'izin', subject: 'Desain Antarmuka', note: 'Mengikuti Lomba Kompetensi Siswa tingkat kota' },
  { date: '2024-10-10', status: 'hadir', subject: 'Pemrograman Berbasis Objek' },
  { date: '2024-10-10', status: 'hadir', subject: 'Bahasa Inggris' },
  { date: '2024-10-11', status: 'hadir', subject: 'Pemrograman Web' },
  { date: '2024-10-14', status: 'hadir', subject: 'Pemrograman Web' },
  { date: '2024-10-14', status: 'hadir', subject: 'Basis Data' },
  { date: '2024-10-15', status: 'alpha', subject: 'Matematika', note: 'Tanpa keterangan' },
];

/* ==========================================================================
   PENGUMUMAN (ANNOUNCEMENTS)
   ========================================================================== */

export const announcements: Announcement[] = [
  {
    id: 'ann-001',
    title: 'Jadwal Penilaian Akhir Semester (PAS) Ganjil 2024/2025',
    content:
      'Penilaian Akhir Semester Ganjil akan dilaksanakan pada tanggal 2-13 Desember 2024. Seluruh siswa diwajibkan mempersiapkan diri dengan baik. Jadwal per mata pelajaran akan dipublikasikan melalui portal siswa dan media sosial resmi sekolah paling lambat 15 November 2024.',
    date: '2024-10-20',
    priority: 'important',
    author: 'Wakil Kepala Sekolah Bid. Kurikulum',
  },
  {
    id: 'ann-002',
    title: 'Pengumpulan Berkas Magang Industri Kelas XII',
    content:
      'Seluruh siswa kelas XII yang akan mengikuti program magang industri periode Januari-Maret 2025 diwajibkan mengumpulkan berkas administrasi ke ruang BKK paling lambat tanggal 30 Oktober 2024. Berkas meliputi surat lamaran, CV, fotokopi rapor, dan pas foto 3x4.',
    date: '2024-10-18',
    priority: 'urgent',
    author: 'Koordinator BKK',
  },
  {
    id: 'ann-003',
    title: 'Kegiatan Jumat Bersih dan Penghijauan Lingkungan Sekolah',
    content:
      'Dalam rangka menjaga kebersihan dan keasrian lingkungan sekolah, seluruh warga sekolah diajak berpartisipasi dalam kegiatan Jumat Bersih pada 25 Oktober 2024. Siswa diminta membawa sarung tangan dan alat berkebun dari rumah.',
    date: '2024-10-16',
    priority: 'normal',
    author: 'OSIS SMK Negara Angin',
  },
  {
    id: 'ann-004',
    title: 'Pemeliharaan Jaringan Internet Sekolah',
    content:
      'Pada hari Sabtu, 26 Oktober 2024 pukul 08.00-14.00 WIB akan dilakukan pemeliharaan jaringan internet dan server sekolah. Selama waktu tersebut, akses portal siswa, e-learning, dan perpustakaan digital akan terganggu. Mohon maklum dan persiapkan kebutuhan akademik sebelum waktu pemeliharaan.',
    date: '2024-10-15',
    priority: 'important',
    author: 'Tim IT Sekolah',
  },
  {
    id: 'ann-005',
    title: 'Pendaftaran Ekstrakurikuler Semester Ganjil Masih Dibuka',
    content:
      'Pendaftaran kegiatan ekstrakurikuler semester ganjil 2024/2025 masih dibuka hingga 31 Oktober 2024. Siswa yang belum terdaftar di kegiatan ekstrakurikuler manapun diharapkan segera mendaftar melalui formulir online di portal siswa. Pilihan ekskul: Programming Club, Desain Kreatif, Jaringan Komputer, Futsal, Pramuka, PMR, Pencak Silat, dan KIR.',
    date: '2024-10-12',
    priority: 'normal',
    author: 'Pembina Ekstrakurikuler',
  },
];

/* ==========================================================================
   PPDB REGISTRATIONS
   ========================================================================== */

export const ppdbRegistrations: PPDBRegistration[] = [
  {
    id: 'ppdb-001',
    registrationNumber: 'PPDB-2024-00142',
    name: 'Muhammad Farhan',
    previousSchool: 'SMP Negeri 1 Kota Angin',
    major: 'Rekayasa Perangkat Lunak',
    status: 'accepted',
    date: '2024-06-15',
  },
  {
    id: 'ppdb-002',
    registrationNumber: 'PPDB-2024-00143',
    name: 'Salsabila Zahra',
    previousSchool: 'SMP Negeri 3 Kota Angin',
    major: 'Desain Komunikasi Visual',
    status: 'accepted',
    date: '2024-06-15',
  },
  {
    id: 'ppdb-003',
    registrationNumber: 'PPDB-2024-00187',
    name: 'Rendy Saputra',
    previousSchool: 'SMP Islam Terpadu Nur Ilmu',
    major: 'Teknik Jaringan Komputer dan Telekomunikasi',
    status: 'verified',
    date: '2024-06-18',
  },
  {
    id: 'ppdb-004',
    registrationNumber: 'PPDB-2024-00201',
    name: 'Aisyah Putri Ramadhani',
    previousSchool: 'SMP Negeri 5 Kota Angin',
    major: 'Bisnis Digital',
    status: 'pending',
    date: '2024-06-20',
  },
  {
    id: 'ppdb-005',
    registrationNumber: 'PPDB-2024-00215',
    name: 'Kevin Aditya',
    previousSchool: 'SMP Muhammadiyah 2 Kota Angin',
    major: 'Rekayasa Perangkat Lunak',
    status: 'rejected',
    date: '2024-06-21',
  },
  {
    id: 'ppdb-006',
    registrationNumber: 'PPDB-2024-00228',
    name: 'Laras Wulandari',
    previousSchool: 'SMP Negeri 2 Kota Angin',
    major: 'Desain Komunikasi Visual',
    status: 'verified',
    date: '2024-06-22',
  },
];

/* ==========================================================================
   KELAS (CLASSES)
   ========================================================================== */

export const classes: ClassInfo[] = [
  { id: 'cls-001', name: 'X RPL 1', major: 'Rekayasa Perangkat Lunak', grade: 10, homeroom: 'Hj. Siti Rahmawati, S.Pd', studentCount: 36 },
  { id: 'cls-002', name: 'X DKV 1', major: 'Desain Komunikasi Visual', grade: 10, homeroom: 'Maya Anggraini, S.Sn', studentCount: 34 },
  { id: 'cls-003', name: 'X TJKT 1', major: 'Teknik Jaringan Komputer dan Telekomunikasi', grade: 10, homeroom: 'Dedi Kurniawan, S.T.', studentCount: 35 },
  { id: 'cls-004', name: 'XI RPL 1', major: 'Rekayasa Perangkat Lunak', grade: 11, homeroom: 'Bambang Wijaya, S.Kom', studentCount: 34 },
  { id: 'cls-005', name: 'XI DKV 1', major: 'Desain Komunikasi Visual', grade: 11, homeroom: 'Rina Kartika, S.Pd', studentCount: 32 },
  { id: 'cls-006', name: 'XI TJKT 1', major: 'Teknik Jaringan Komputer dan Telekomunikasi', grade: 11, homeroom: 'Fajar Pratama, S.Pd', studentCount: 33 },
  { id: 'cls-007', name: 'XI BD 1', major: 'Bisnis Digital', grade: 11, homeroom: 'Dewi Lestari, S.E.', studentCount: 35 },
  { id: 'cls-008', name: 'XII RPL 1', major: 'Rekayasa Perangkat Lunak', grade: 12, homeroom: 'Bambang Wijaya, S.Kom', studentCount: 30 },
];

/* ==========================================================================
   DEMO USERS
   ========================================================================== */

export const demoUsers: DemoUser[] = [
  {
    role: 'siswa',
    name: 'Rizky Ramadhan',
    email: 'rizky.ramadhan@siswa.smknegaraangin.sch.id',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
  },
  {
    role: 'guru',
    name: 'Bambang Wijaya, S.Kom',
    email: 'bambang.wijaya@smknegaraangin.sch.id',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    role: 'admin',
    name: 'Admin Sekolah',
    email: 'admin@smknegaraangin.sch.id',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
];

/* ==========================================================================
   DASHBOARD STATS
   ========================================================================== */

export const adminStats: DashboardStats[] = [
  { label: 'Total Siswa', value: 842, change: '+5.2%', icon: 'Users', color: 'blue' },
  { label: 'Total Guru & Staf', value: 48, change: '+2', icon: 'GraduationCap', color: 'green' },
  { label: 'Pendaftar PPDB', value: 312, change: '+18.4%', icon: 'UserPlus', color: 'purple' },
  { label: 'Rata-rata Kehadiran', value: '94.8%', change: '+1.1%', icon: 'CheckCircle2', color: 'orange' },
];

export const teacherStats: DashboardStats[] = [
  { label: 'Kelas Diampu', value: 5, icon: 'BookOpen', color: 'blue' },
  { label: 'Total Siswa Binaan', value: 168, icon: 'Users', color: 'green' },
  { label: 'Tugas Perlu Dinilai', value: 14, change: '3 mendesak', icon: 'FileText', color: 'orange' },
  { label: 'Kehadiran Mengajar', value: '98.5%', change: 'Bulan ini', icon: 'Clock', color: 'purple' },
];

export const studentStats: DashboardStats[] = [
  { label: 'Rata-rata Nilai', value: '84.1', change: 'Semester ini', icon: 'Award', color: 'blue' },
  { label: 'Tugas Selesai', value: '18/20', change: '90%', icon: 'CheckCircle2', color: 'green' },
  { label: 'Kehadiran', value: '92.5%', change: 'Bulan Oktober', icon: 'Calendar', color: 'orange' },
  { label: 'Peringkat Kelas', value: '3 dari 34', change: 'Kelas XI RPL 1', icon: 'TrendingUp', color: 'purple' },
];

/* ==========================================================================
   PENGATURAN WEBSITE (WEBSITE SETTINGS)
   ========================================================================== */

export const websiteSettings: WebsiteSettings = {
  schoolName: 'SMK Negara Angin',
  tagline: 'Mencetak Generasi Terampil, Kreatif, dan Siap Kerja di Era Digital',
  address: 'Jl. Lembah Bayu No. 45, Kecamatan Angin Barat, Kota Angin 65123, Jawa Timur, Indonesia',
  phone: '(0341) 789012',
  email: 'info@smknegaraangin.sch.id',
  ppdbOpen: true,
  ppdbYear: '2025/2026',
};

/* ==========================================================================
   PROFIL SEKOLAH (SCHOOL PROFILE)
   ========================================================================== */

export const schoolProfile = `SMK Negara Angin adalah lembaga pendidikan kejuruan unggulan yang berdedikasi membekali generasi muda dengan kompetensi teknologi, desain, dan bisnis digital. Berdiri dengan semangat mencerdaskan kehidupan bangsa, sekolah ini mengintegrasikan kurikulum nasional dengan kebutuhan nyata industri modern melalui model pembelajaran berbasis proyek (project-based learning) dan kemitraan teaching factory.

Lingkungan belajar dirancang modern dan kolaboratif, didukung oleh fasilitas laboratorium berstandar industri, perpustakaan digital dengan belasan ribu referensi, serta studio kreatif multimedia. Tenaga pendidik terdiri atas para profesional bersertifikasi yang tidak hanya mengajar teori di dalam kelas, tetapi juga membimbing siswa dalam praktik kerja lapangan dan kompetisi tingkat nasional maupun internasional.

Dengan komitmen melahirkan lulusan yang "BMW" — Bekerja, Melanjutkan studi, atau Wirausaha — SMK Negara Angin terus memperluas jejaring kerja sama dengan industri teknologi, perguruan tinggi terkemuka, dan asosiasi profesi demi memastikan masa depan cerah bagi seluruh peserta didik.`;

/* ==========================================================================
   SEJARAH SEKOLAH (SCHOOL HISTORY)
   ========================================================================== */

export const schoolHistory = `Didirikan pada tahun 2008 atas inisiatif tokoh pendidikan dan pegiat teknologi setempat, SMK Negara Angin bermula dari sebuah gedung sederhana dengan dua program keahlian: Teknik Komputer dan Jaringan serta Rekayasa Perangkat Lunak. Pada angkatan pertamanya, sekolah hanya menampung 64 siswa dengan fasilitas terbatas namun didorong semangat tinggi untuk menghadirkan pendidikan vokasi berkualitas.

Seiring berjalannya waktu dan pesatnya transformasi digital di Indonesia, SMK Negara Angin terus mengembangkan sarana dan prasarana. Pada tahun 2014, program keahlian Desain Komunikasi Visual resmi dibuka untuk menjawab kebutuhan industri kreatif yang kian berkembang. Disusul pada tahun 2021 dengan pembukaan program Bisnis Digital, melengkapi fokus sekolah pada ekosistem ekonomi digital terpadu.

Kini, setelah lebih dari satu setengah dekade berkarya, SMK Negara Angin telah meluluskan ribuan alumni yang berkarier di perusahaan teknologi nasional, mendirikan startup mandiri, hingga menempuh studi lanjut di berbagai perguruan tinggi favorit. Prestasi demi prestasi di ajang LKS, kompetisi teknologi informasi, dan festival seni budaya terus mengukuhkan posisi SMK Negara Angin sebagai salah satu SMK rujukan di tingkat daerah maupun nasional.`;

/* ==========================================================================
   VISI DAN MISI (VISION & MISSION)
   ========================================================================== */

export const vision =
  'Menjadi Sekolah Menengah Kejuruan unggulan tingkat nasional yang berkarakter, berdaya saing global, dan adaptif terhadap perkembangan teknologi pada tahun 2030.';

export const mission: string[] = [
  'Menyelenggarakan proses pembelajaran kejuruan yang inovatif, berbasis proyek nyata, dan selaras dengan kebutuhan dunia usaha dan dunia industri (DUDI).',
  'Membentuk karakter peserta didik yang beriman, bertaqwa, berakhlak mulia, disiplin, berjiwa wirausaha, dan peduli terhadap lingkungan sosial maupun alam.',
  'Mengembangkan sarana prasarana pembelajaran berbasis teknologi digital guna menunjang penguasaan kompetensi berstandar industri modern.',
  'Memperluas kemitraan strategis dengan dunia industri, asosiasi profesi, dan perguruan tinggi dalam program magang, beasiswa, sertifikasi, serta penyaluran lulusan.',
  'Meningkatkan kompetensi profesional pendidik dan tenaga kependidikan secara berkelanjutan melalui pelatihan, sertifikasi profesi, dan studi lanjut.',
];

/* ==========================================================================
   HERO SLIDER
   ========================================================================== */

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-001',
    title: 'Belajar, Berkarya, Siap Mendunia',
    description: 'Pendidikan vokasi yang menggabungkan keterampilan praktis, teknologi, dan karakter untuk menyiapkan generasi masa depan.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85',
    ctaText: 'Daftar Sekarang',
    ctaUrl: '/ppdb/daftar',
    order: 1,
    active: true,
  },
  {
    id: 'slide-002',
    title: '4 Program Keahlian Unggulan',
    description: 'RPL, DKV, TKJ, dan Bisnis Digital. Kurikulum berbasis industri dengan fasilitas lab modern dan pengajar praktisi.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85',
    ctaText: 'Jelajahi Jurusan',
    ctaUrl: '/program-keahlian',
    order: 2,
    active: true,
  },
  {
    id: 'slide-003',
    title: 'Prestasi Membanggakan',
    description: '24+ prestasi tingkat nasional dan regional. Siswa kami telah membuktikan kemampuan di berbagai kompetisi kejuruan.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85',
    ctaText: 'Lihat Prestasi',
    ctaUrl: '/profil',
    order: 3,
    active: true,
  },
  {
    id: 'slide-004',
    title: 'PPDB 2024/2025 Dibuka',
    description: 'Kesempatan bergabung dengan SMK Negara Angin. Daftar online dan raih masa depanmu bersama kami.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=85',
    ctaText: 'Daftar PPDB',
    ctaUrl: '/ppdb/daftar',
    order: 4,
    active: true,
  },
];
