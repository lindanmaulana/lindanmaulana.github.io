import { BiSolidError } from "react-icons/bi";
import { MdAdd, MdClear } from "react-icons/md";
import { PiChatCenteredSlashBold } from "react-icons/pi";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { handleClearAlertMessage } from "../../../../redux/slices/alert";
import { handleAddChatUser } from "../../../../redux/slices/chatroomuser";
import { AppDispatch, RootState } from "../../../../redux/store";
import { ServiceGetAllChat } from "../../../../utils/chatroomuser";
import { formatTimeStamps } from "../../../../utils/format";
import { dataChat } from "../../../../utils/types";
import ChatSkeleton from "../../../skeleton/ChatSkeleton";
import ChatRoomChatAddChat from "./ChatRoomChatAddChat";
import { useState } from "react";
import { getErrorMessage } from "../../../../utils/errorMessage";

const ChatRoomChat = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { addChat } = useSelector((state: RootState) => state.chatRoomUser);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllChat"],
    queryFn: () => {
      setTimeout(() => {
        dispatch(handleClearAlertMessage());
      }, 2000);
      return ServiceGetAllChat();
    },
    onError: (err) => {
      console.log({ err });
      setErrorMessage(getErrorMessage(err));
    },
  });

  const handleAddChat = () => {
    dispatch(handleAddChatUser());
  };

  return (
    <section>
      <div className="container relative max-w-3xl px-4 lg:px-0">
        <div className="flex items-center justify-end mb-4">
          <button onClick={handleAddChat} className="">
            {addChat ? <MdClear size={24} /> : <MdAdd size={30} />}
          </button>
        </div>
        {addChat ? (
          <div className="flex items-center justify-between w-full">
            <ChatRoomChatAddChat />
          </div>
        ) : null}
        <div className="flex flex-col gap-6 pt-5 pb-10 overflow-y-auto h-80">
          {isLoading && (
            <>
              <ChatSkeleton />
              <ChatSkeleton />
              <ChatSkeleton />
            </>
          )}

          {isError && !isLoading && (
            <div className="flex flex-col items-center justify-center gap-2">
              <BiSolidError size={80} className="text-yellow-500" />
              <h3 className="text-xl font-semibold text-dev-black-gray">
                {errorMessage || "Unexpected Error"}
              </h3>
              <div className="text-center">
                <p className="text-sm text-dev-black/40">
                  Something went wrong. Please try again later.
                </p>
                <p className="text-sm text-dev-black/40 mb-10 max-w-[460px] text-center">
                  The server encountered an issue and couldn't process your
                  request.
                </p>
              </div>

              <p className="text-sm font-semibold text-dev-black/60">
                Error code: <span className="font-normal">500</span>
              </p>
            </div>
          )}

          {!isLoading && !isError && data.data.length > 0
            ? data.data.map((dt: dataChat) => {
                const tgl = formatTimeStamps(dt.createdAt);
                return (
                  <div key={dt.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 overflow-hidden rounded-full shrink-0 ">
                      <span className="flex items-center justify-center w-full h-full text-center text-white uppercase rounded-full bg-dev-black-gray">
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
              })
            : !isLoading &&
              !isError && (
                <div className="flex items-center justify-center">
                  <p className="flex items-center gap-1">
                    {" "}
                    <PiChatCenteredSlashBold />
                    Not found
                  </p>
                </div>
              )}
        </div>
      </div>
    </section>
  );
};

export default ChatRoomChat;
