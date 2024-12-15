import { IconType } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

export interface findme {
    id: number | string
    title: string
    subtitle: string
    url: string
    icon: IconType
    titleButton: string
    color: string
}

export const dataFindme: findme[] = [
    {
        id: 1,
        title: "Explore the code",
        subtitle: "Explore the source code for all my projects on GitHub.",
        url: "https://github.com/lindanmaulana",
        icon: FaGithub,
        color: "color-github",
        titleButton: "Go to Github"
    },
    {
        id: 2,
        title: "Let's connect",
        subtitle: "Connect for collaboration or explore my professional experience.",
        url: "www.linkedin.com/in/lindan-maulana-ab86aa300",
        icon: FaLinkedin,
        color: "color-linkedin",
        titleButton: "Go to Linkedin"
    },
    {
        id: 3,
        title: "Let's connect",
        subtitle: "Explore my portfolio and behind-the-scenes moments on Instagram.",
        url: "https://www.instagram.com/qqqqmln",
        icon: RiInstagramFill,
        color: "color-instagram",
        titleButton: "Go to Instagram"
    },
]