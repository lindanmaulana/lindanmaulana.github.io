import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdImages } from "react-icons/io";
import { ImageHome } from "../../../../assets/images";
import { Videos } from "../../../../assets/videos";
import LayoutSections from "../../../../layouts/LayoutSections";

const AboutGithubUnwrapped = () => {
  const playVideo = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState<boolean>(false);
  const handlePlay = () => {
    if (playVideo.current) {
      if (play) {
        playVideo.current.pause();
        setPlay(false);
      } else {
        playVideo.current.play();
        setPlay(true);
      }
    }
  };

  const handlePause = () => {
    if(playVideo.current) {
      playVideo.current.pause()
      setPlay(false)
    }
  }
  return (
    <LayoutSections
      styleSection="py-5"
      title="Github Unwrapped"
      subTitle="My Coding journey on 2023"
      icons={<IoMdImages />}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <a href="https://github.com/lindanmaulana" className="group">
          <figure className="overflow-hidden rounded h-96">
            <img
              src={ImageHome.github}
              alt="Github Lindan Maulana"
              className="object-cover object-left w-full h-full  group-hover:scale-105 transition-global"
            />
          </figure>
        </a>

        <div className="relative overflow-hidden rounded">
          <figure className="h-full overflow-hidden rounded">
            <video
              ref={playVideo}
              src={Videos.unwraped}
              className="object-contain w-full h-full"
              onEnded={handlePause}
            ></video>
          </figure>
          <button onClick={handlePlay} className={`absolute top-0 transition-global w-full flex items-center justify-center h-full ${play ? "" : "bg-dev-black/80 backdrop-blur-sm"}`}>
            {play ? "" : <FaPlay  className="text-3xl text-white" />}
          </button>
        </div>
      </div>
    </LayoutSections>
  );
};

export default AboutGithubUnwrapped;
