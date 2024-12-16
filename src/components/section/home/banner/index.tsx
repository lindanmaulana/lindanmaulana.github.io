import { TbPointFilled } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";

const HomeBanner = () => {
  return (
    <section className="pt-6 pb-5 lg:pt-16 dark:bg-dev-black">
      <div className="container max-w-3xl px-4 lg:px-0">
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold lg:text-3xl dark:text-white">
              Hi, Im
              <Typewriter
                words={[" Lindan Maulana", " Frontend Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h2>
            <div className="flex flex-col gap-1 text-sm lg:items-center lg:gap-10 lg:flex-row text-dev-black-gray dark:text-white">
              <h4 className="flex items-center gap-1">
                <TbPointFilled />
                Kuningan University students
              </h4>
              <h4 className="flex items-center gap-1">
                <TbPointFilled />
                Based in Kuningan ID
              </h4>
            </div>
            <p className="text-sm leading-loose lg:text-base text-dev-black-gray dark:text-white/70">
              Saya seorang pengembang frontend yang memutuskan untuk membangun
              aplikasi web yang dinamis dan responsif menggunakan React JS dan
              Tailwind CSS. Dengan dasar yang kuat dalam JavaScript, HTML, dan
              CSS, saya membuat antarmuka pengguna yang tidak hanya menarik
              secara visual tetapi juga sangat fungsional dan efisien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
