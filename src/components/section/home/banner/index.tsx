import { TbPointFilled } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";

const BannerHome = () => {
  return (
    <section className="pt-16 pb-5">
      <div className="container max-w-4xl">
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">
              Hi, Im
              <Typewriter
                words={[" Lindan Maulana", " Frontend Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h2>
            <div className="flex items-center gap-10 text-sm text-dev-black-gray">
              <h4 className="flex items-center gap-1"><TbPointFilled />Kuningan University students</h4>
              <h4 className="flex items-center gap-1"><TbPointFilled />Based in Kuningan ID</h4>
            </div>
            <p className="text-base leading-loose text-dev-black-gray">
              I'm a frontend developer who decided to build a dynamic and
              responsive web application using React JS and Tailwind CSS. With a
              strong foundation in JavaScript, HTML, and CSS, I create user
              interfaces that are not only visually appealing but also highly
              functional and efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
