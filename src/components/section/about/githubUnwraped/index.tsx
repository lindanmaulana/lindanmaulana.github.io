import { IoMdImages } from "react-icons/io";
import LayoutSections from "../../../../layouts/LayoutSections";
import { ImageHome } from "../../../../assets/images";

const AboutGithubUnwrapped = () => {
  return (
    <LayoutSections
      title="Github Unwrapped"
      subTitle="My coding journey on 2023"
      icons={<IoMdImages />}
    >
      <a href="https://github.com/lindanmaulana" className="group">
        <figure className="overflow-hidden rounded ">
          <img
            src={ImageHome.github}
            alt="Github Lindan Maulana"
            className="w-full h-full group-hover:scale-105 transition-global"
          />
        </figure>
      </a>
    </LayoutSections>
  );
};

export default AboutGithubUnwrapped;
