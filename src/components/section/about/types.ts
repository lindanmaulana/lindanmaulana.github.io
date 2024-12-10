import { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ImageAboutStudy } from "../../../assets/images/about";

export interface skill {
  id: number | string;
  icon: IconType;
  color: string;
  name: string
}

export const dataSkills: skill[] = [
  {
    id: 1,
    color: "text-color-html",
    name: "Html",
    icon: FaHtml5,
  },
  {
    id: 2,
    color: "text-color-css",
    name: "Css",
    icon: FaCss3Alt,
  },
  {
    id: 3,
    color: "text-color-js",
    name: "Javascript",
    icon: FaJs,
  },
  {
    id: 3,
    color: "text-color-tailwindcss",
    name: "Tailwindcss",
    icon: SiTailwindcss,
  },
  {
    id: 4,
    color: "text-color-react",
    name: "ReactJs",
    icon: FaReact,
  },
  {
    id: 5,
    color: "text-color-typescript",
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    id: 6,
    color: "text-color-mongodb",
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    id: 7,
    color: "text-color-express",
    name: "ExpressJS",
    icon: SiExpress,
  },
];

export interface study {
  id: number | string;
  image: string;
  title: string;
  desc: string;
}

export const dataStudy: study[] = [
  {
    id: 1,
    image: ImageAboutStudy.learnHtmlCss,
    desc: "Belajar HTML dan CSS memberikan dasar kuat untuk membangun web yang responsif dan menarik.",
    title: "Belajar HTML + CSS",
  },
  {
    id: 2,
    image: ImageAboutStudy.learnJs,
    desc: "Belajar JavaScript memungkinkan saya untuk mengembangkan interaktivitas dan logika aplikasi web yang dinamis.",
    title: "Belajar Javascript",
  },
  {
    id: 3,
    image: ImageAboutStudy.learnTailwindcss,
    desc: "Mempelajari dasar-dasar Tailwind CSS untuk memahami utility-first approach, memudahkan pembuatan desain responsif dengan kelas-kelas sederhana.",
    title: "Belajar Tailwindcss 1",
  },
  {
    id: 4,
    image: ImageAboutStudy.learnTailwindcss2,
    desc: "Menjelajahi kustomisasi dan optimasi desain menggunakan konfigurasi Tailwind CSS, memungkinkan pembuatan tampilan yang unik dan konsisten.",
    title: "Belajar Tailwindcss 2",
  },
  {
    id: 5,
    image: ImageAboutStudy.learnReact,
    desc: "Mengaplikasikan Tailwind CSS dalam proyek besar untuk meningkatkan produktivitas dan efisiensi dalam pengembangan antarmuka web yang dinamis dan responsif.",
    title: "Belajar ReactJs",
  },
  {
    id: 6,
    image: ImageAboutStudy.learnMern,
    desc: "Belajar MERN Stack membantu saya membangun aplikasi full-stack dengan menggunakan MongoDB untuk penyimpanan data, Express untuk server dan API, React untuk antarmuka pengguna interaktif, dan Node.js untuk backend yang cepat dan skalabel.",
    title: "Belajar MERN STACK",
  },
  {
    id: 7,
    image: ImageAboutStudy.devHtmlCss,
    desc: "Belajar membuat website dengan HTML + CSS membantu saya menciptakan struktur halaman yang terorganisir dan desain yang responsif, memungkinkan pengalaman pengguna yang optimal di berbagai perangkat.",
    title: "Membuat Website HTML + CSS",
  },
  {
    id: 8,
    image: ImageAboutStudy.devTailwind,
    desc: "Belajar membuat website dengan HTML dan Tailwind CSS memungkinkan saya untuk membangun desain yang responsif dan modern dengan cepat, serta memberikan pengalaman pengguna yang efisien dan menarik.",
    title: "Membuat Website HTML + TAILWINDCSS",
  },
  {
    id: 9,
    image: ImageAboutStudy.devReact1,
    desc: "Membuat website dengan React.js memungkinkan saya untuk menciptakan antarmuka pengguna yang interaktif dan responsif, dengan pengelolaan state yang mudah dan skalabilitas tinggi.",
    title: "Membuat Webiste ReactJs 1",
  },
  {
    id: 10,
    image: ImageAboutStudy.devReact2,
    desc: "Dengan React.js, saya dapat membangun aplikasi web yang modular dan efisien, memanfaatkan komponen-komponen reusable yang meningkatkan produktivitas dan pengalaman pengguna.",
    title: "Membuat Webiste ReactJs 2",
  },
  {
    id: 11,
    image: ImageAboutStudy.devReact3,
    desc: "Menggunakan React.js untuk membangun website membantu saya mengoptimalkan pengembangan aplikasi dengan fokus pada kecepatan, interaktivitas, dan pemeliharaan jangka panjang.",
    title: "Membuat Webiste ReactJs 3",
  },
];
