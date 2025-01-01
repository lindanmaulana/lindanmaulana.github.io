import { Typewriter } from "react-simple-typewriter";
import Title from "../../../title/Title";

const ContactBanner = () => {
  return (
    <section className="pt-4 pb-5 lg:pt-16 dark:bg-black ">
      <div className="container max-w-3xl px-4 lg:px-0">
        <Typewriter
          words={["Nice to meet you!", "Welcome to My Contact"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
        <div>
          <Title
            style="border-b border-dashed border-dev-black-gray pb-4"
            title="Contact"
            subtitle="Let`s get in touch"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
