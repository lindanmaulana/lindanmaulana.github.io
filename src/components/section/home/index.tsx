import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { ImageGif, ImageHome } from "../../../assets/images";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute flex items-center cursor-pointer group top-4 right-4">
        <h4 className="text-xs opacity-0 group-hover:opacity-100 transition-global">
          Hi, Im Frontend Developer
        </h4>
        <figure className="w-16 ">
          <img src={ImageGif.gifUser} alt="User" className="w-full h-full" />
        </figure>
      </div>

      <div className="container h-screen max-w-4xl">
        <div className="flex items-center justify-between h-full gap-10">
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
                  words={[
                    "Kuningan University Students",
                    "Frontend Developer",
                    "Javascript Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </h5>
            </div>
            <Link
              to="/aboutme"
              className="flex items-center justify-center py-2 mb-5 text-xs text-white duration-700 bg-dev-black/70 hover:bg-dev-black transition-global max-w-36"
            >
              Let's talk with me
            </Link>
            <div className="flex items-center gap-4">
              <h4 className="flex items-center gap-1 text-sm font-montserrat-medium">
                <LiaPhoneSolid /> +628 532 270 1120
              </h4>
              <h4 className="flex items-center gap-1 text-sm font-montserrat-medium">
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
      </div>
    </section>
  );
};

export default Hero;
