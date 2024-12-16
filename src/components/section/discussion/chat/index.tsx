import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { z } from "zod";
import { chat, dataChat } from "../../../../utils/types";
import {
  ServiceCreateChat,
  ServiceGetAllChat,
} from "../../../../utils/chatroomuser";
import { formatTimeStamps } from "../../../../utils/format";

const Schema = z.object({
  name: z
    .string()
    .min(3, "Name min 3 character")
    .max(50, "Name max 50 character"),
  chat: z.string().min(3, "Chat min 3 character"),
});

type chatRoomSchema = z.infer<typeof Schema>;

const ChatRoomChat = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<chatRoomSchema>({
    resolver: zodResolver(Schema),
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllChat"],
    queryFn: () => ServiceGetAllChat(),
  });

  const { mutate } = useMutation({
    mutationKey: ["createChat"],
    mutationFn: (data: chat) => ServiceCreateChat(data),
  });

  const handleForm = handleSubmit((data: chat) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log("berhaisl");
      },
      onError: (err) => {
        console.log("error gagal");
      },
    });
  });

  if (isLoading) return <h2>Loading..</h2>;
  if (isError) return <h2>Error..</h2>;
  console.log({ data });

  return (
    <section>
      <div className="container max-w-3xl px-4 lg:px-0">
        <div className="flex flex-col h-screen gap-6 overflow-y-auto">
          {data.data.map((dt: dataChat) => {
            const tgl = formatTimeStamps(dt.createdAt);
            return (
              <div key={dt.id} className="flex items-start gap-3">
                <div className="w-8 h-8 overflow-hidden rounded-full ">
                    <span className="flex items-center justify-center w-full h-full text-center text-white rounded-full bg-dev-black-gray">{dt.name.substring(0, 1)}</span>
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
