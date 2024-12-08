import { useDispatch } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import { ImageHome } from "../../../assets/images";
import { handleGoals } from "../../../redux/slices/about";
import { AppDispatch } from "../../../redux/store";
import About from "./about";
import Education from "./education";
import ProfesionalGoals from "./profesionalGoals";
import Skills from "./skills";
import Study from "./study";

const AboutMe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleReadMore = () => {
    dispatch(handleGoals());
  };
  return (
    <section className="h-full p-10">
      <div className="pb-4">
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
      <div className="flex flex-col justify-center h-full gap-10">
        <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-80 ">
              <img
                src={ImageHome.me}
                alt="Lindan Maulana"
                className="w-full h-full rounded-full"
              />
              <img
                src={ImageHome.meTtd}
                alt="Me TTD"
                className="absolute bottom-0 w-56 -right-10"
              />
            </div>
            <h3 className="text-3xl text-transparent font-montserrat-bold bg-gradient-to-r from-dev-blue to-dev-blue-dark bg-clip-text">
              Lindan Maulana
            </h3>
            <div className="flex items-center gap-px mb-2">
              <h5 className="text-sm">Student,</h5>
              <h5 className="text-sm">Frontend Developer</h5>
            </div>
            <button
              onClick={handleReadMore}
              className="px-4 py-2 text-xs text-white rounded bg-dev-blue-dark hover:bg-gradient-to-r from-dev-blue to-dev-blue-dark"
            >
              Read more
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <About />
            <Education />
            <Skills />
          </div>
        </div>
      </div>
      <ProfesionalGoals />
      <Study />
    </section>
  );
};

export default AboutMe;
