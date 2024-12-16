import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { handleMode } from "../../redux/slices/theme";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

const DarkMode = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();

  const handleDarkMode = () => {
    dispatch(handleMode());
  };
  return (
    <button
      onClick={handleDarkMode}
      className="z-10 p-1 text-sm bg-white rounded-lg text-dev-black"
    >
      {darkMode ? <BsCloudMoon /> : <BsCloudSun />}
    </button>
  );
};

export default DarkMode;
