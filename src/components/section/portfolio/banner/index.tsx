import { Typewriter } from "react-simple-typewriter";
import Title from "../../../title/Title";

const BannerPortfolio = () => {
  return (
    <section className="pt-16 pb-5">
      <div className="container max-w-4xl">
        <Typewriter
          words={["Nice to meet you!", "Welcome to My Portfolio"]}
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
            title="Portfolio"
            subtitle="Showcasing my passion for technology, design, and problem-solving through code."
          />
        </div>

      </div>
    </section>
  );
};

export default BannerPortfolio;
