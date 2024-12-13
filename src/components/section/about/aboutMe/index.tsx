import { BsPersonVideo3 } from "react-icons/bs";
import LayoutSections from "../../../../layouts/LayoutSections";

const AboutAboutMe = () => {
  return (
    <LayoutSections
      title="About"
      subTitle="A short story of me"
      icons={<BsPersonVideo3 />}
    >
      <div className="p-4 text-sm border rounded border-dev-black/20 text-dev-black ">
        <p className="text-sm leading-normal">
          Saya seorang pengembang frontend yang berspesialisasi dalam membangun
          aplikasi web yang dinamis dan responsif menggunakan React JS dan
          Tailwind CSS. Dengan dasar yang kuat dalam JavaScript, HTML, dan CSS,
          saya membuat antarmuka pengguna yang tidak hanya menarik secara visual
          tetapi juga sangat fungsional dan efisien.
        </p>
      </div>
    </LayoutSections>
  );
};

export default AboutAboutMe;
