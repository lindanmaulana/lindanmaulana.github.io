import { ImageGif } from "../../../../assets/images";

export interface service {
  id: number | string;
  type: string;
  image: string;
  title: string;
  desc: string;
}

export const dataService: service[] = [
  {
    id: 1,
    image: ImageGif.gifWebDevelopment,
    title: "Frontend Development",
    type: "coding",
    desc: "Specializing in creating modern, responsive web designs using cutting-edge frontend technologies like React, Tailwind CSS, and JavaScript.",
  },
  {
    id: 2,
    image: ImageGif.gifSlicingUi,
    title: "Slicing UI to Code",
    type: "coding",
    desc: "Specializing in creating modern, responsive web designs using cutting-edge frontend technologies like React, Tailwind CSS, and JavaScript.",
  },
  {
    id: 3,
    image: ImageGif.gifBackendDevelopment,
    title: "Backend NodeJs, ExpressJs",
    type: "coding",
    desc: "Create simple and effective server-side systems using Node.js and Express.js, perfect for small to medium-scale applications.",
  },
];
