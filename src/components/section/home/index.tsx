import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { ImageHome } from "../../../assets/images";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="flex items-center h-full gap-10 ml-auto justify-evenly ">
        <div className="flex flex-col justify-center h-full gap-2 ">
          <h2 className="relative text-5xl max-w-80 font-montserrat-regular">
            Hi, Im{" "}
            <span className="font-montserrat-bold">LINDAN MAULANA...</span>
            <img
              src={ImageHome.homeIcon2}
              alt=""
              className="absolute top-0 left-0 w-28 -z-10"
            />
          </h2>
          <div className="flex items-center gap-px mb-2">
            <h5 className="text-base">
              <Typewriter
                words={["Kuningan University Students", "Frontend Developer", "Javascript Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h5>
          </div>
          <a
            href=""
            className="flex items-center justify-center py-2 mb-5 text-xs text-white bg-dev-black max-w-36"
          >
            Let's talk with me
          </a>
          <div className="flex items-center gap-4">
            <h4 className="flex items-center gap-1 text-sm font-montserrat-bold">
              <LiaPhoneSolid /> +628 532 270 1120
            </h4>
            <h4 className="flex items-center gap-1 text-sm font-montserrat-bold">
              <HiOutlineMail /> linmidofficial@gmail.com
            </h4>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-full ">
          <img
            src={ImageHome.me}
            alt=""
            className="z-10 w-full h-[420px] rounded-full "
          />
          <img
            src={ImageHome.homeIcon}
            alt="Home Icon"
            className="absolute top-0 right-0 w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
