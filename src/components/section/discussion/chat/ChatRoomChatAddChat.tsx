import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { handleSetAlertMessage } from "../../../../redux/slices/alert";
import { AppDispatch, RootState } from "../../../../redux/store";
import { ServiceCreateChat } from "../../../../utils/chatroomuser";
import { getErrorMessage } from "../../../../utils/errorMessage";
import { chat } from "../../../../utils/types";
import AlertMessage from "../../../alert";

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
  const { active, message, type } = useSelector(
    (state: RootState) => state.alertMessage
  );
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<chatRoomSchema>({
    resolver: zodResolver(Schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["createChat"],
    mutationFn: (data: chat) => ServiceCreateChat(data),
  });

  const handleForm = handleSubmit((data: chat) => {
    setLoading(true);
    mutate(data, {
      onSuccess: () => {
        reset();
        setLoading(false);
        dispatch(
          handleSetAlertMessage({
            active: true,
            transition: true,
            type: "success",
            message: "Data added success",
          })
        );
        queryClient.invalidateQueries("getAllChat");
      },
      onError: (err) => {
        setLoading(false);
        dispatch(
          handleSetAlertMessage({
            active: true,
            message: getErrorMessage(err),
            type: "error",
            transition: true,
          })
        );
      },
    });
  });
  return (
    <>
      {active ? <AlertMessage message={message} type={type} /> : null}
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
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>

          <label htmlFor="" className="w-full">
            <textarea
              {...register("chat")}
              placeholder="type message here"
              className="w-full py-1 border ps-2"
            />
            {errors.chat && (
              <span className="text-xs text-red-500">
                {errors.chat.message}
              </span>
            )}
          </label>
          <button
            disabled={loading}
            className={`${
              loading ? "bg-red-400 cursor-progress" : "bg-red-600"
            } flex items-center justify-center w-full px-2 py-1 text-sm text-white  h-7`}
          >
            {loading ? (
              <span className="animate-spin">
                <AiOutlineLoading3Quarters />
              </span>
            ) : (
              <span>Send</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatRoomChatAddChat;
