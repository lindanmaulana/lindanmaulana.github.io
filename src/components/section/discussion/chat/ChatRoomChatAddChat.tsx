import { z } from "zod";
import { formatTimeStamps } from "../../../../utils/format";
import { chat, dataChat } from "../../../../utils/types";
import { useMutation, useQueryClient } from "react-query";
import { ServiceCreateChat } from "../../../../utils/chatroomuser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AlertMessage, { alert } from "../../../alert";
import { getErrorMessage } from "../../../../utils/errorMessage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { handleSetAlertMessage } from "../../../../redux/slices/alert";

const Schema = z.object({
  name: z
    .string()
    .min(3, "Name min 3 character")
    .max(50, "Name max 50 character"),
  chat: z.string().min(3, "Chat min 3 character"),
});

type chatRoomSchema = z.infer<typeof Schema>;
const ChatRoomChatAddChat = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();
  const { active } = useSelector((state: RootState) => state.alertMessage);
  const [alert, setAlert] = useState<alert>({ message: "", type: "error" });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<chatRoomSchema>({
    resolver: zodResolver(Schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["createChat"],
    mutationFn: (data: chat) => ServiceCreateChat(data),
  });

  const handleForm = handleSubmit((data: chat) => {
    console.log({ data });
    mutate(data, {
      onSuccess: (data) => {
        setAlert({ message: "Send message success", type: "success" });
        dispatch(
          handleSetAlertMessage({
            active: true,
            transition: true,
            type: alert.type,
            message: alert.message,
          })
        );
        queryClient.invalidateQueries("getAllChat");
      },
      onError: (err) => {
        setAlert({ message: getErrorMessage(err), type: "error" });
      },
    });
  });
  return (
    <>
      {active ? (
        <AlertMessage message={alert.message} type={alert.type} />
      ) : null}
      <form onSubmit={handleForm} className="p-4 rounded shadow-md w-[400px]">
        <h2 className="mb-2 text-sm">Send Message</h2>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="" className="w-full">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="w-full py-1 border ps-2"
            />
          </label>

          <label htmlFor="" className="w-full">
            <textarea
              {...register("chat")}
              placeholder="type message here"
              className="w-full py-1 border ps-2"
            />
          </label>
          <button className="w-full px-2 py-px text-sm text-white bg-red-600">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatRoomChatAddChat;
