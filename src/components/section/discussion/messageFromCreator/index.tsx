import { Typewriter } from "react-simple-typewriter";
import { ImageIndex } from "../../../../assets/images";
import LayoutSections from "../../../../layouts/LayoutSections";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const DiscussionMessageFromCreator = () => {
  return (
    <LayoutSections
      styleSection="py-5"
      title="Message from the Creator"
      subTitle="From a village boy who dreams of becoming a software engineer"
      icons={<HiOutlineChatBubbleBottomCenterText />}
    >
      <div className="flex items-center gap-2 p-5">
        <figure className="rounded max-w-80">
          <img
            src={ImageIndex.creator}
            alt="Creator"
            className="w-full h-full rounded-md"
          />
        </figure>
        <h3 className="text-sm dark:text-white/40 text-dev-black-gray">
          <Typewriter
            words={[
              "Apa yang lebih baik dari pada mengejar impian anda? mengejarnya bersama sahabat anda di sisi anda",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h3>
      </div>
    </LayoutSections>
  );
};

export default DiscussionMessageFromCreator;
