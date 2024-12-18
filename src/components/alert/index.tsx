import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { PiWarningCircleFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { handleClearAlertMessage } from "../../redux/slices/alert";

export interface alert {
    type: "error" | "success",
    message: string
}

const AlertMessage = (props: alert) => {
    const {type, message} = props
    const dispatch = useDispatch<AppDispatch>()

    const handleAlert = () => {
        dispatch(handleClearAlertMessage())
    }
  return (
    <div className={`flex fixed z-10 top-5 right-1/2 gap-5 w-[70%] lg:max-w-[30%] translate-x-1/2 items-center justify-between ${type === "error" ? "bg-red-500" : "bg-blue-500"} rounded px-4 py-3`}>
      <h3 className="flex items-center gap-2">
        {" "}
        {type === "error" ? <PiWarningCircleFill className="text-white" /> : <IoIosCheckmarkCircle className="text-white" />}
        <span className="text-white">{message}</span>
      </h3>
      <button onClick={handleAlert} className="text-white">
        <MdOutlineClear />
      </button>
    </div>
  );
};

export default AlertMessage;
