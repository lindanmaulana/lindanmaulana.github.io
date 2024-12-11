import { IconType } from "react-icons";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

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
}

export const dataProject: project[] = [
  {
    id: 1,
    title: "Web Design Conference",
    image: "https://i.imgur.com/eq9hEW9.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://web-design-cofference.vercel.app/",
  },
  {
    id: 2,
    title: "Rumah Impian",
    image: "https://i.imgur.com/A1lsucB.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://rumah-impian-three.vercel.app/",
  },
  {
    id: 3,
    title: "Route X",
    image: "https://i.imgur.com/cS4Vb0D.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://visa-easy-services.vercel.app/",
  },
  {
    id: 4,
    title: "Linm Store",
    image: "https://i.imgur.com/uOq7YL8.png",
    tech: [
      { icon: FaHtml5, name: "Html", color: "color-html" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://linm-store.vercel.app/",
  },
  {
    id: 5,
    title: "DNK",
    image: "https://i.imgur.com/TDZZb2H.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://dnk-com.vercel.app/",
  },
  {
    id: 6,
    title: "General Muncangela",
    image: "https://i.imgur.com/fEMvBiy.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://general-muncangela.vercel.app/",
  },
  {
    id: 7,
    title: "Event Semina BWA",
    image: "https://i.imgur.com/hP2vWsG.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description: "",
    url: "https://event-semina-bwa.vercel.app/",
  },
  {
    id: 8,
    title: "Weserve web hosting",
    image: "https://i.imgur.com/KgQUsKr.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description: "",
    url: "https://weserve-hosting-bwa.vercel.app/",
  },
  {
    id: 9,
    title: "Nidejia Website",
    image: "https://i.imgur.com/y40G6sR.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://nidejia-bwa.vercel.app/",
  },
  {
    id: 10,
    title: "Bennar FInance",
    image: "https://i.imgur.com/EwsVvek.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://bennar-finance.vercel.app/",
  },
  {
    id: 11,
    title: "Yesplis Copy",
    image: "https://i.imgur.com/ula6Xj7.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description: "",
    url: "https://yesplis-copy.vercel.app/",
  },
  {
    id: 12,
    title: "Lemon Wares",
    image: "https://i.imgur.com/pgY52qf.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description: "",
    url: "https://lemon-wares-tau.vercel.app/",
  },
  {
    id: 13,
    title: "LinmID Tech",
    image: "https://i.imgur.com/TeYzu9O.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
    ],
    description: "",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 14,
    title: "Kopi Array",
    image: "https://imgur.com/n4LM9Ip.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
      { icon: SiExpress, name: "Express Js", color: "color-express" },
      { icon: SiMongodb, name: "MongoDB", color: "color-mongodb" },
    ],
    description: "",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 15,
    title: "Simple Absensi TIFC-01-2023",
    image: "https://imgur.com/skvPP3T.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
      { icon: SiExpress, name: "Express Js", color: "color-express" },
      { icon: SiMongodb, name: "MongoDB", color: "color-mongodb" },
    ],
    description: "",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 16,
    title: "Simple ATM",
    image: "https://imgur.com/hH2Tm5X.png",
    tech: [
      { icon: FaReact, name: "ReactJs", color: "color-react" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
      { icon: SiTypescript, name: "Typescript", color: "color-typescript" },
      { icon: SiExpress, name: "Express Js", color: "color-express" },
      { icon: SiMongodb, name: "MongoDB", color: "color-mongodb" },
    ],
    description: "",
    url: "https://linm-id-tech.vercel.app/",
  },
  {
    id: 17,
    title: "Learning Courses",
    image: "https://imgur.com/nX6WtLo.png",
    tech: [
      { icon: FaHtml5, name: "Html", color: "color-html" },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
        color: "color-tailwindcss",
      },
    ],
    description: "",
    url: "https://linm-id-tech.vercel.app/",
  },
];
