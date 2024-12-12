import { dataSkills } from "../../types";

const ListSkill = () => {
  return (
    <>
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
    </>
  );
};

export default ListSkill;
