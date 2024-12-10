import { RxCode } from "react-icons/rx";
import TitleAbout from "../../../title/TitleAbout";
import ListSkill from "./listSkill";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleAbout icons={<RxCode />} title="Skills" subtitle="My coding skills" />
      <div className="flex items-center gap-6">
        <ListSkill />
      </div>
    </div>
  );
};

export default Skills;
