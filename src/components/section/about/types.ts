import { IconType } from "react-icons";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
  {
    id: 8,
    color: "text-color-git",
    name: "Git",
    icon: FaGitAlt,
  },
  {
    id: 9,
    color: "text-color-nodejs",
    name: "Nodejs",
    icon: FaNodeJs,
  },
];