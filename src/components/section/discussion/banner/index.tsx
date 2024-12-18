import { Typewriter } from "react-simple-typewriter";
import Title from "../../../title/Title";

const ChatRoomBanner = () => {
  return (
    <section className="pt-4 pb-2 lg:pt-10">
      <div className="container max-w-3xl px-4 lg:px-0">
        <div className="flex flex-col gap-6 pb-3 border-b border-dashed border-dev-black">
          <div>
            <Typewriter
              words={["Nice to meet you!", "Welcome to My Discussion!"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </div>
          <Title title="Chat Room" subtitle="Leave your impression or sugestion about this website here" />
        </div>
      </div>
    </section>
  );
};

export default ChatRoomBanner;
