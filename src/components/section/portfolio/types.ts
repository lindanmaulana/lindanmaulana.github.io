import { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { ImageProjects } from "../../../assets/images/projects";

export type techStack = string;
export const dataTechStack: techStack[] = [""];

export interface tech {
  icon: IconType;
  name: string;
  color: string;
}

export interface project {
  id: number | string;
  title: string;
  image: string;
  description: string;
  url: string;
  tech: tech[];
  type: string;
}

export const dataProject: project[] = [
  {
    id: 1,
    title: "Web Design Conference",
    image: ImageProjects.webDesign,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Web Design Conference: A premier event for designers and developers to explore the latest trends, tools, and techniques in web design. Join us for workshops, keynotes, and networking to elevate your skills and creativity.",
    type: "frontend",
    url: "https://web-design-cofference.vercel.app/",
  },
  {
    id: 2,
    title: "Rumah Impian",
    image: ImageProjects.rumahImpian,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Rumah Impian: Hunian ideal yang menggabungkan kenyamanan, keindahan, dan fungsionalitas. Dirancang untuk menciptakan suasana harmonis dan menjadi tempat tinggal yang sempurna bagi Anda dan keluarga.",
    type: "frontend",
    url: "https://rumah-impian-three.vercel.app/",
  },
  {
    id: 3,
    title: "Route X",
    image: ImageProjects.visaEasy,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Visa Made Easy, Dreams Made Possible: Solusi terpercaya untuk membantu Anda mewujudkan impian ke luar negeri dengan proses visa yang mudah, cepat, dan tanpa ribet.",
    type: "frontend",
    url: "https://visa-easy-services.vercel.app/",
  },
  {
    id: 4,
    title: "Linm Store",
    image: ImageProjects.linmStore,
    tech: [
      { icon: FaHtml5, name: "Html", color: "color-html" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Linm Store: Toko terpercaya dengan beragam produk berkualitas untuk memenuhi kebutuhan Anda. Temukan kenyamanan berbelanja dengan harga terbaik dan pelayanan terbaik.",
    type: "frontend",
    url: "https://linm-store.vercel.app/",
  },
  {
    id: 5,
    title: "DNK",
    image: ImageProjects.dnk,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Raining Offers for Hot Summers: Nikmati diskon dan penawaran spesial untuk membuat musim panas Anda semakin seru dan hemat!",
    type: "frontend",
    url: "https://dnk-com.vercel.app/",
  },
  {
    id: 6,
    title: "General Muncangela",
    image: ImageProjects.generalAlhidayah,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "General Muncangela: Organisasi komunitas yang berkomitmen untuk memajukan kampung melalui kolaborasi, pemberdayaan, dan kegiatan sosial yang berdampak positif bagi semua warganya.",
    type: "frontend",
    url: "https://general-muncangela.vercel.app/",
  },
  {
    id: 7,
    title: "Event Semina BWA",
    image: ImageProjects.eventSemina,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description: "Web application, about event",
    type: "frontend",
    url: "https://event-semina-bwa.vercel.app/",
  },
  {
    id: 8,
    title: "Weserve web hosting",
    image: ImageProjects.weserveWebHosting,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description:
      "Weserve Web Hosting: Layanan hosting andal dengan kecepatan tinggi, keamanan terbaik, dan dukungan penuh untuk kebutuhan website Anda. Solusi sempurna untuk mengonlinekan bisnis Anda.",
    type: "frontend",
    url: "https://weserve-hosting-bwa.vercel.app/",
  },
  {
    id: 9,
    title: "Nidejia Website",
    image: ImageProjects.nidejia,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Nidejia Website: Temukan ruang hidup yang luar biasa dan penuh cinta, tempat di mana kenyamanan dan keindahan bertemu untuk menciptakan rumah impian Anda.",
    type: "frontend",
    url: "https://nidejia-bwa.vercel.app/",
  },
  {
    id: 10,
    title: "Bennar FInance",
    image: ImageProjects.bennarFinance,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Bennar Finance: Solusi keuangan terpercaya untuk membantu merencanakan dan mengelola keuangan Anda dengan bijak. Kami hadir untuk memberikan kemudahan dalam mencapai tujuan finansial Anda.",
    type: "frontend",
    url: "https://bennar-finance.vercel.app/",
  },
  {
    id: 11,
    title: "Yesplis Copy",
    image: ImageProjects.yesplisCopy,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description:
      "Yesplis: Platform penjualan tiket konser yang memudahkan Anda untuk menemukan dan membeli tiket acara musik favorit. Dengan antarmuka yang sederhana dan proses pemesanan yang cepat, Yesplis memastikan pengalaman pembelian tiket yang aman dan menyenangkan bagi para penggemar musik.",
    type: "frontend",
    url: "https://yesplis-copy.vercel.app/",
  },
  {
    id: 12,
    title: "Lemon Wares",
    image: ImageProjects.lemonWares,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description:
      "Premium Web Hosting for Your Website: Layanan hosting berkualitas tinggi dengan kecepatan maksimal, keamanan tingkat lanjut, dan dukungan 24/7 untuk memastikan website Anda selalu berjalan dengan lancar dan handal.",
    type: "frontend",
    url: "https://lemon-wares-tau.vercel.app/",
  },
  {
    id: 13,
    title: "LinmID Tech",
    image: ImageProjects.linmIdTech,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description:
      "website providing marketing services for various digital, physical and digital learning products. This website is managed directly by LinmID Developer",
    type: "frontend",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 14,
    title: "Kopi Array",
    image: ImageProjects.kopiArray,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
      { icon: SiExpress, name: "ExpressJs", color: "color-express" },
      { icon: SiMongodb, name: "MongoDB", color: "color-mongodb" },
    ],
    description:
      "Kopi Array is a coffee sales website designed to meet the needs of three types of users: Admin, User, and Guest. This website offers an easy, fast and user-friendly shopping experience, from product management to the ordering process.",
    type: "fullstack",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 15,
    title: "Simple Absensi TIFC-01-2023",
    image: ImageProjects.simpleAbsensi,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
      { icon: SiExpress, name: "ExpressJs", color: "color-express" },
      { icon: SiMongodb, name: "MongoDB", color: "color-mongodb" },
    ],
    description:
      "This website was designed using technology and a full JavaScript stack, namely MERN",
    type: "fullstack",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 16,
    title: "Simple ATM",
    image: ImageProjects.linmPay,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
      { icon: SiExpress, name: "ExpressJs", color: "color-express" },
      { icon: SiMongodb, name: "MongoDB", color: "color-mongodb" },
    ],
    description:
      "Simple ATM: Layanan ATM yang mudah diakses, cepat, dan aman, memberikan kenyamanan transaksi finansial kapan saja dan di mana saja.",
    type: "fullstack",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 17,
    title: "Learning Courses",
    image: ImageProjects.learningCourse,
    tech: [
      { icon: FaHtml5, name: "Html", color: "color-html" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Learning Courses: Platform pembelajaran online dengan berbagai kursus berkualitas untuk mengembangkan keterampilan dan pengetahuan Anda. Belajar kapan saja, di mana saja, dengan materi yang up-to-date dan pengajaran yang terstruktur.",
    type: "frontend",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 18,
    title: "Trafalgar",
    image: ImageProjects.trafalgar,
    tech: [
      { icon: FaHtml5, name: "Html", color: "color-html" },
      {
        icon: FaCss3Alt,
        name: "Css",
        color: "color-css",
      },
    ],
    description:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
    type: "frontend",
    url: "/portfolio",
  },
  {
    id: 19,
    title: "Portfolio",
    image: ImageProjects.portfolioLindanPertama,
    tech: [
      { icon: FaHtml5, name: "Html", color: "color-html" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Portfolio saya yang di bangun dengan html + tailwindcss ini juga yang menjadi awal saya mengenal apa itu tailwindcss",
    type: "frontend",
    url: "/portfolio",
  },
  {
    id: 20,
    title: "Site Masa Depanku, Pilihan Bersama",
    image: ImageProjects.siteMasaDepanku,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Site untuk mengenalkan bahwa pilihan seorang anak juga pilihan orang tua dalam mencapai masa depan anaknya, SMAN 1 Ciawigebang Kelompok 4 P5 kelas XI. A-1",
    type: "frontend",
    url: "/portfolio",
  },
  {
    id: 21,
    title: "Cek Resi Pesanan Online",
    image: ImageProjects.linmCekResi,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: SiChakraui,
        name: "Chakra UI",
        color: "color-chakraui",
      },
    ],
    description: "Site penyedia pengecekan resi pesanan online.",
    type: "frontend",
    url: "/portfolio",
  },
  {
    id: 22,
    title: "Alquran Indonesia",
    image: ImageProjects.alquranIndo,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Penyedia Alquran bahasa indonesia secara online untuk di baca kapan saja dan dimana saja.",
    type: "frontend",
    url: "/portfolio",
  },
  {
    id: 23,
    title: "Portfolio",
    image: ImageProjects.portfolioLindanKedua,
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description:
      "Portfolio kedua saya di bangun dengan ReactJs + tailwindcss, ini menjadi acuan saya untuk mengeksplor apa itu react js.",
    type: "frontend",
    url: "https://lindan-maulana-dev.vercel.app/",
  },
];
