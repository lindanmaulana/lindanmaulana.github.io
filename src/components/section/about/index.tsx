import { Typewriter } from "react-simple-typewriter";
import AboutAboutMe from "./aboutMe";
import AboutGithubUnwrapped from "./githubUnwraped";
import AboutPerson from "./person";
import AboutProfesionalGoals from "./professionalGoals";

const AboutMe = () => {
  return (
    <section className="pt-4 bg-white lg:p-10 dark:bg-dev-black">
      <div className="container max-w-3xl px-4 lg:px-0 ">
        <div className="px-4 lg:px-0 dark:text-white text-dev-black">
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
        <div className="flex flex-col justify-center h-full gap-10 py-4">
          <AboutAboutMe />
          <AboutPerson />
          <AboutProfesionalGoals />
          <AboutGithubUnwrapped />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
