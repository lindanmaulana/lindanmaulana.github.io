import { IoIosAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { handleClearAlertMessage } from "../../../../redux/slices/alert";
import { handleAddChatUser } from "../../../../redux/slices/chatroomuser";
import { AppDispatch, RootState } from "../../../../redux/store";
import { ServiceGetAllChat } from "../../../../utils/chatroomuser";
import { formatTimeStamps } from "../../../../utils/format";
import { dataChat } from "../../../../utils/types";
import ChatRoomChatAddChat from "./ChatRoomChatAddChat";

const ChatRoomChat = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { addChat } = useSelector((state: RootState) => state.chatRoomUser);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllChat"],
    queryFn: () => {
      setTimeout(() => {
        dispatch(handleClearAlertMessage());
      }, 1000);
      return ServiceGetAllChat();
    },
  });

  if (isLoading) return <h2>Loading..</h2>;
  if (isError) return <h2>Error..</h2>;
  console.log({ data });

  const handleAddChat = () => {
    dispatch(handleAddChatUser());
  };

  return (
    <section>
      <div className="container relative max-w-3xl px-4 lg:px-0">
        <div className="flex items-center justify-end ">
          <button onClick={handleAddChat} className="text-xl">
            {addChat ? <MdOutlineClear /> : <IoIosAdd />}
          </button>
        </div>
        {addChat ? (
          <div className="flex items-center justify-between">
            <ChatRoomChatAddChat />
          </div>
        ) : null}
        <div className="flex flex-col gap-6 pt-5 pb-10 overflow-y-auto h-80">
          {data.data.map((dt: dataChat) => {
            const tgl = formatTimeStamps(dt.createdAt);
            return (
              <div key={dt.id} className="flex items-start gap-3">
                <div className="w-8 h-8 overflow-hidden rounded-full shrink-0 ">
                  <span className="flex items-center justify-center w-full h-full text-center text-white rounded-full bg-dev-black-gray">
                    {dt.name.substring(0, 1)}
                  </span>
                </div>
                <div>
                  <h2 className="flex items-center gap-1 mb-1">
                    {" "}
                    <span className="text-sm">{dt.name}</span>
                    <span className=" top-0 left-0 text-[10px] text-dev-black/40 font-semibold">
                      {tgl}
                    </span>
                  </h2>
                  <p className="p-2 text-sm leading-normal rounded text-dev-black/70 bg-dev-black/5">
                    {dt.chat}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChatRoomChat;
