import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";
import LayoutSections from "../../../../layouts/LayoutSections";
import { ServiceCretaeFeedbacks } from "../../../../utils/feedbacks";
import { feedback } from "../../../../utils/types";

const Schema = z.object({
  name: z.string().min(3, "Name min 3 character"),
  email: z.string().email("Email is not valid"),
  message: z.string().min(6, "Message min 6 character"),
});

type sendMessageSchema = z.infer<typeof Schema>;

const ContactSendMessage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<sendMessageSchema>({
    resolver: zodResolver(Schema),
  });
  
  const {mutate} = useMutation({
    mutationKey: ["createFeedback"],
    mutationFn: (data: feedback) => ServiceCretaeFeedbacks(data)
  })
  
  const handleSubmitForm = handleSubmit((data: feedback) => {
    setIsLoading(true)
    mutate(data, {
      onSuccess: () => {
        setIsLoading(false)
        console.log("success")
      },
      onError: (err) => {
        setIsLoading(false)
        console.log(err)
      }
    })
  });
  

  return (
    <LayoutSections styleSection="pt-5 pb-10" title="I'm open to opportunities—feel free to connect with me!">
      <form onSubmit={handleSubmitForm}>
        <div className="grid w-full grid-cols-2 gap-3 mb-4">
          <label htmlFor="" className="flex flex-col ">
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="w-full h-full py-2 border rounded ps-3 "
            />
            {errors?.name && (
              <span className="text-xs text-pink-600">
                {errors.name.message}
              </span>
            )}
          </label>
          <label htmlFor="" className="flex flex-col ">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full h-full py-2 border rounded ps-3 "
            />
            {errors?.email && (
              <span className="text-xs text-pink-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="w-full mb-2">
          <textarea
            {...register("message")}
            placeholder="Message"
            id=""
            className="w-full h-full p-3 border"
          ></textarea>
          {errors?.message && (
            <span className="text-xs text-pink-600">
              {errors.message.message}
            </span>
          )}
        </div>

        <button disabled={isLoading} className="w-full p-2 text-sm text-center text-white rounded-lg bg-dev-black-gray">
          {isLoading ? "Loading..." : "Send Email"}
        </button>
      </form>
    </LayoutSections>
  );
};

export default ContactSendMessage;
