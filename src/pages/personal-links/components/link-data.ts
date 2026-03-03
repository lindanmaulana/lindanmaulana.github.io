import { IconType } from "react-icons";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
import { FaGlobe } from "react-icons/fa6";

interface linkData {
  id: number;
  url: string;
  icon: IconType;
  title: string;
}

export const linkData: linkData[] = [
  {
    id: 1,
    title: "Instagram",
    icon: BsInstagram,
    url: "https://instagram.com/__lindanmaulana",
  },

  {
    id: 2,
    title: "Lindkedin",
    icon: BsLinkedin,
    url: "https://linkedin.com/in/lindan-maulana",
  },
  {
    id: 3,
    title: "Github",
    icon: DiGithubBadge,
    url: "https://github.com/lindanmaulana",
  },
  {
    id: 4,
    title: "Portfolio Site",
    icon: FaGlobe,
    url: "https://lindanmaulana.github.io",
  },
];
