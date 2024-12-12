import { BsPersonVideo3 } from "react-icons/bs";
import TitleAbout from "../../../title/TitleAbout";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleAbout
        icons={<BsPersonVideo3 />}
        title="About"
        subtitle="A short story of me"
      />
      <p className="text-sm leading-normal">
        Saya seorang pengembang frontend yang berspesialisasi dalam membangun
        aplikasi web yang dinamis dan responsif menggunakan React JS dan
        Tailwind CSS. Dengan dasar yang kuat dalam JavaScript, HTML, dan CSS,
        saya membuat antarmuka pengguna yang tidak hanya menarik secara visual
        tetapi juga sangat fungsional dan efisien.
      </p>
    </div>
  );
};

export default About;
