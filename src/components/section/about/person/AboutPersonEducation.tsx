import { PiStudent } from "react-icons/pi";
import Title from "../../../title/Title";

const AboutPersonEducation = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Title icons={<PiStudent />} title="Education" subtitle="Educational Background" />
      <ul className="flex items-center gap-4">
        <li className="flex flex-col gap-1 p-4 border rounded-lg border-dev-black/20 ">
          <h5 className="text-xs font-montserrat-light">2023 - present</h5>
          <h5 className="text-xs font-bold">
            UNIVERSITAS KUNINGAN -{" "}
            <span className="font-thin">Teknik Informatika</span>
          </h5>
          <h5 className="text-xs">Kuningan</h5>
        </li>
        <li className="flex flex-col gap-1 p-4 border rounded-lg border-dev-black/20 ">
          <h5 className="text-xs font-montserrat-light">2019 - 2023</h5>
          <h5 className="text-xs font-bold">
            SMKN 3 KUNINGAN -{" "}
            <span className="font-thin">
              Teknik Otomasi Industri
            </span>
          </h5>
          <h5 className="text-xs">Kuningan</h5>
        </li>
      </ul>
    </div>
  );
};

export default AboutPersonEducation;
