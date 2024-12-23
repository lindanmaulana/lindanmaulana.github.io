import { FaChildReaching } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import LayoutSections from "../../../../layouts/LayoutSections";

const AboutProfesionalGoals = () => {
  return (
    <LayoutSections styleSection="py-5" title="Professional Goals" subTitle="Building Skills for Future Growth" icons={<FaChildReaching />}>
      <div className="flex flex-col gap-4">
        <div className="dark:text-white">
          <Typewriter
            words={[
              "Tujuan saya adalah menjadi seorang Software Engineer yang unggul dan spesialis dalam pemrograman JavaScript, dengan kemampuan menciptakan solusi digital yang inovatif, responsif, dan berdaya guna tinggi. Saya berkomitmen untuk terus berkembang dan memberikan kontribusi nyata dalam dunia teknologi melalui keahlian saya.",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </div>
      </div>
    </LayoutSections>
  );
};

export default AboutProfesionalGoals;
