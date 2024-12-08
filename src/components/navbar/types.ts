import { IconType } from "react-icons";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiHome, HiOutlineUserCircle } from "react-icons/hi";
import { MdContacts } from "react-icons/md";

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
    icon: HiHome,
    to: "/",
  },
  {
    id: 2,
    title: "About Me",
    icon: HiOutlineUserCircle,
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
    icon: MdContacts,
    to: "/contact",
  },
];
