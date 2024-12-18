import { RxCode } from "react-icons/rx";
import Title from "../../../../title/Title";
import ListSkill from "./listSkill";

const AboutPersonSkills = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Skills" subtitle="My coding skills" icons={<RxCode />} />
      <div className="flex items-center gap-6 overflow-x-auto lg:flex-wrap lg:overflow-none">
        <ListSkill />
      </div>
    </div>
  );
};

export default AboutPersonSkills;
