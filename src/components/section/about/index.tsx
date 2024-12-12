import { Typewriter } from "react-simple-typewriter";
import About from "./aboutMe";
import AboutPerson from "./person";
import ProfesionalGoals from "./professionalGoals";

const AboutMe = () => {
  return (
    <section className="p-10 ">
      <div className="container max-w-4xl">
        <div>
          <Typewriter
            words={["Nice to meet you!", "Welcome to My Bio"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </div>
        <div className="flex flex-col justify-center h-full gap-10">
          <About />
          <AboutPerson />
          <ProfesionalGoals />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
