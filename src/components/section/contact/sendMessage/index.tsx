import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import LayoutSections from "../../../../layouts/LayoutSections";
import {
  handleClearAlertMessage,
  handleSetAlertMessage,
} from "../../../../redux/slices/alert";
import { AppDispatch, RootState } from "../../../../redux/store";
import { getErrorMessage } from "../../../../utils/errorMessage";
import { ServiceCreateFeedbacks } from "../../../../utils/feedbacks";
import { feedback } from "../../../../utils/types";
import AlertMessage from "../../../alert";

const Schema = z.object({
  name: z.string().min(3, "Name min 3 character"),
  email: z.string().email("Email is not valid"),
  message: z.string().min(6, "Message min 6 character"),
});

type sendMessageSchema = z.infer<typeof Schema>;

const ContactSendMessage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { active, message, type } = useSelector(
    (state: RootState) => state.alertMessage
  );
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<sendMessageSchema>({
    resolver: zodResolver(Schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["createFeedback"],
    mutationFn: (data: feedback) => ServiceCreateFeedbacks(data),
  });

  const handleSubmitForm = handleSubmit((data: feedback) => {
    setLoading(true);
    mutate(data, {
      onSuccess: () => {
        setLoading(false);
        dispatch(
          handleSetAlertMessage({
            active: true,
            message: "Send message success",
            transition: true,
            type: "success",
          })
        );
        reset();
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

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        dispatch(handleClearAlertMessage());
      }
    }, 2000);
  }, [loading, dispatch]);

  return (
    <LayoutSections
      styleSection="pt-5 pb-10"
      title="I'm open to opportunities—feel free to connect with me!"
    >
      {active && <AlertMessage message={message} type={type} />}
      <form onSubmit={handleSubmitForm}>
        <div className="grid w-full gap-3 mb-4 lg:grid-cols-2">
          <label htmlFor="name" className="flex flex-col ">
            <input
              type="text"
              id="name"
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
          <label htmlFor="email" className="flex flex-col ">
            <input
              type="email"
              id="email"
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
            id="message"
            className="w-full h-full p-3 border"
          ></textarea>
          {errors?.message && (
            <span className="text-xs text-pink-600">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          disabled={loading}
          className={`${
            loading
              ? "bg-dev-black-gray/40 flex items-center justify-center cursor-progress"
              : "bg-dev-black-gray"
          } w-full p-2 text-sm text-center text-white rounded-lg `}
        >
          {loading ? (
            <span className="animate-spin">
              <AiOutlineLoading3Quarters />
            </span>
          ) : (
            <span>Send</span>
          )}
        </button>
      </form>
    </LayoutSections>
  );
};

export default ContactSendMessage;
