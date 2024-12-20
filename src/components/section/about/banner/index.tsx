import { Typewriter } from "react-simple-typewriter";
import TitleAbout from "../../../title/TitleAbout";
import { BsPersonVideo3 } from "react-icons/bs";

const AboutBanner = () => {
  return (
    <section className="pt-4 bg-white lg:p-10 dark:bg-dev-black">
      <div className="container max-w-3xl px-4 lg:px-0 ">
        <div className=" dark:text-white text-dev-black">
          <Typewriter
            words={["Nice to meet you!", "Welcome to My Bio"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </div>
        <div className="flex flex-col gap-4">
          <TitleAbout
            title="About"
            subtitle="A short story of me"
            icons={<BsPersonVideo3 />}
          />
          <p className="text-sm leading-normal text-dev-black dark:text-white ">
            Saya seorang pengembang frontend yang berspesialisasi dalam
            membangun aplikasi web yang dinamis dan responsif menggunakan React
            JS dan Tailwind CSS. Dengan dasar yang kuat dalam JavaScript, HTML,
            dan CSS, saya membuat antarmuka pengguna yang tidak hanya menarik
            secara visual tetapi juga sangat fungsional dan efisien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
