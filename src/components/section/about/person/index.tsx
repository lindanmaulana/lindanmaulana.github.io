import { useDispatch, useSelector } from "react-redux";
import { ImageHome } from "../../../../assets/images";
import { AppDispatch, RootState } from "../../../../redux/store";
import { handleGoals } from "../../../../redux/slices/about";
import Education from "./education";
import Skills from "./skills";

const AboutPerson = () => {
  const { goals } = useSelector((state: RootState) => state.about);
  const dispatch = useDispatch<AppDispatch>();
  const handleReadMore = () => {
    dispatch(handleGoals());
  };
  return (
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
          className={`px-4 py-2 text-xs text-white rounded   ${
            goals
              ? "bg-[#B22222]"
              : "bg-dev-blue-dark hover:bg-gradient-to-r from-dev-blue to-dev-blue-dark"
          } `}
        >
          {goals ? "Closed" : "Read more"}
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default AboutPerson;
