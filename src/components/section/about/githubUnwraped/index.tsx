import { IoMdImages } from "react-icons/io";
import { ImageHome } from "../../../../assets/images";
import LayoutSections from "../../../../layouts/LayoutSections";

const AboutGithubUnwrapped = () => {
  return (
    <LayoutSections styleSection="py-5" title="Github Unwrapped" subTitle="My Coding journey on 2023" icons={<IoMdImages />}>
      <div>
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
    </LayoutSections>
  );
};

export default AboutGithubUnwrapped;
