import { IoMdImages } from "react-icons/io";
import { ImageHome } from "../../../../assets/images";
import Title from "../../../title/Title";

const AboutGithubUnwrapped = () => {
  return (
    <div
    >
      <Title title="Github Unwrapped" subtitle="My Coding journey on 2023" icons={<IoMdImages />} />
      <a href="https://github.com/lindanmaulana" className="group">
        <figure className="overflow-hidden rounded ">
          <img
            src={ImageHome.github}
            alt="Github Lindan Maulana"
            className="w-full h-full group-hover:scale-105 transition-global"
          />
        </figure>
      </a>
    </div>
  );
};

export default AboutGithubUnwrapped;
