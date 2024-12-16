import { IconType } from "react-icons";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import { RiHome9Line } from "react-icons/ri";

export interface navbar {
  id: number | string;
  title: string;
  to: string;
  icon: IconType;
}

export const dataNavar: navbar[] = [
  {
    id: 1,
    title: "Home",
    icon: RiHome9Line,
    to: "/",
  },
  {
    id: 2,
    title: "About Me",
    icon: BiLeaf,
    to: "/aboutme",
  },
  {
    id: 3,
    title: "Portfolio",
    icon: AiOutlineFundProjectionScreen,
    to: "/portfolio",
  },
  {
    id: 4,
    title: "Contact",
    icon: GrSend,
    to: "/contact",
  },
];
