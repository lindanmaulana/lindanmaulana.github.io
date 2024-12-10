import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
  return (
    <section className="h-full p-10">
      <div className="pb-4">
        <Typewriter
          words={["Nice to meet you!", "Welcome to My Portfolio"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </div>
    </section>
  );
};

export default Portfolio;
