import { FaChildReaching } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import Title from "../../../title/Title";

const AboutProfesionalGoals = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Professional Goals"
        subtitle="Building Skills for Future Growth"
        icons={<FaChildReaching />}
      />
      <div>
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
  );
};

export default AboutProfesionalGoals;
