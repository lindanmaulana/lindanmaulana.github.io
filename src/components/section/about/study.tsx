import { useSelector } from "react-redux";
import { dataStudy } from "./types";
import { RootState } from "../../../redux/store";

const Study = () => {
    const {goals} = useSelector((state: RootState) => state.about)
  return (
    <div className={`py-5 ${goals ? "block" : "hidden"}`}>
      <h4 className="mb-2 text-xl tracking-widest font-montserrat-bold">
        Study
      </h4>
      <div>
        <div className="grid grid-cols-3 gap-4">
          {dataStudy?.map((study) => (
            <div
              key={study.id}
              className="flex flex-col justify-between shadow-xl group transition-global rounded h-[300px] cursor-pointer"
            >
              <figure className="w-full h-[174px] bg-dev-blue-dark overflow-hidden">
                <img
                  src={study.image}
                  alt="Learnhtml"
                  className="object-contain rounded"
                />
              </figure>
              <div className="p-4">
                <h4 className="text-lg text-gradient-darkblue-blue line-clamp-1 group-hover:line-clamp-none">
                  {study.title}
                </h4>
                <p className="text-sm line-clamp-3 group-hover:line-clamp-none">
                  {study.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;
