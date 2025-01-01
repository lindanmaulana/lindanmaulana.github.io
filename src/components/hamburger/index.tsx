import { useDispatch, useSelector } from "react-redux";
import { handleNavbarMobile } from "../../redux/slices/navbar";
import { AppDispatch, RootState } from "../../redux/store";

const HamburgerMenu = () => {
  const { navbar } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch<AppDispatch>();

  const handleNavbar = () => {
    dispatch(handleNavbarMobile());
  };
  return (
    <button
      onClick={handleNavbar}
      className="flex flex-col gap-[6px] md:hidden"
    >
      <span
        className={`block bg-black dark:bg-white w-6 h-[2px] transition-global ${
          navbar ? "-rotate-45 origin-top-right" : ""
        }`}
      ></span>
      <span
        className={`block bg-black dark:bg-white w-6 h-[2px] transition-global ${
          navbar ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block bg-black dark:bg-white w-6 h-[2px] transition-global ${
          navbar ? "rotate-45 origin-bottom-right" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
