import { RxCode } from "react-icons/rx";
import Title from "../../../title/Title";
import { dataSkills } from "../types";

const ProfileSkills = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Skills" subtitle="My coding skills" icons={<RxCode />} />
      <div className="flex flex-wrap items-center gap-6">
        {dataSkills?.map((skil, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center group"
          >
            <h4
              className={`text-3xl ${skil.color}  cursor-pointer gap-1  flex items-center`}
            >
              <skil.icon className="transition-global group-hover:translate-y-2" />{" "}
              <span className="absolute text-xs translate-x-1/2 opacity-0 transition-global group-hover:-translate-y-5 right-1/2 group-hover:opacity-100">
                {skil.name}
              </span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSkills;
