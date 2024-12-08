import { dataSkills } from "../types";

const ListSkill = () => {
  return (
    <>
      {dataSkills?.map((skil) => (
        <h4 key={skil.id} className={`text-3xl ${skil.color} group cursor-pointer`}>
          <skil.icon className="transition-all ease-in-out duration-600 group-hover:-translate-y-2"/>
        </h4>
      ))}
    </>
  );
};

export default ListSkill
