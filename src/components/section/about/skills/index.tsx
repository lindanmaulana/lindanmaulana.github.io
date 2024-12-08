import ListSkill from "./listSkill";

const Skills = () => {
  return (
    <div>
      <h4 className="mb-2 text-xl tracking-widest font-montserrat-bold">
        Skills
      </h4>
      <div className="flex items-center gap-4">
        <ListSkill />
      </div>
    </div>
  );
};

export default Skills;
