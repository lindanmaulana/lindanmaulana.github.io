import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundImage, ImageHome } from "../../assets/images";
import { handleOutSideBar, handleSidebar } from "../../redux/slices/navbar";
import { handleMode } from "../../redux/slices/theme";
import { AppDispatch, RootState } from "../../redux/store";
import NavbarList from "./list";

const Navbar = () => {
  const { sidebar } = useSelector((state: RootState) => state.navbar);
  const { darkMode } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch<AppDispatch>();

  const handleBar = () => {
    dispatch(handleSidebar());
  };

  const handleOutBar = () => {
    dispatch(handleOutSideBar());
  };

  const handleDarkMode = () => {
    dispatch(handleMode());
  };
  return (
    <div
      onMouseEnter={handleBar}
      onMouseLeave={handleOutBar}
      className={`flex-col bg-white dark:bg-dev-black hidden lg:flex shadow-lg shadow-dev-black/50 h-screen z-50 fixed justify-start text-white left-0 top-0  ${
        sidebar ? "w-[200px] px-4" : "w-[50px] px-2"
      } py-6 transition-global`}
    >
      <div
        className={`relative flex flex-col h-20 mb-14 ${
          sidebar ? "bg-none" : "bg-none"
        } bg-no-repeat bg-cover rounded mb-24`}
        style={{
          backgroundImage: ` ${
            sidebar ? `url(${BackgroundImage.bgNav})` : "none"
          }`,
        }}
      >
        {sidebar ? (
          <>
            <h3
              className={`
               flex items-center absolute top-1 border-dev-black/70 left-1 text-dev-black/80 text-xs border rounded-full px-1 py-px gap-1`}
            >
              <span className="block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Hire me.
            </h3>

            <button
              onClick={handleDarkMode}
              className="absolute z-10 p-1 text-sm bg-white rounded-lg bottom-2 right-2 text-dev-black"
            >
              {darkMode ? <BsCloudMoon /> : <BsCloudSun />}
            </button>
          </>
        ) : (
          <button
            onClick={handleDarkMode}
            className="absolute z-10 p-1 text-sm translate-x-1/2 rounded-lg bg-black/5 -bottom-8 right-1/2 text-dev-black dark:text-white dark:bg-dev-black"
          >
            {darkMode ? <BsCloudMoon /> : <BsCloudSun />}
          </button>
        )}

        <div
          className={`absolute flex gap-2 flex-col w-full justify-center items-center overflow-hidden translate-x-1/2 ${
            sidebar ? " -bottom-28" : " top-5"
          } right-1/2`}
        >
          <figure
            className={`${
              sidebar ? "w-24" : "w-8"
            } bg-gray-600 ring-white rounded-full ring-1 overflow-hidden`}
          >
            <img
              src={ImageHome.me}
              alt="Lindan Maulana"
              className="w-full h-full"
            />
          </figure>
          <div className="text-center">
            <h2 className="flex items-center gap-1 text-base font-semibold text-dev-black dark:text-white">
              {sidebar ? (
                <>
                  Lindan Maulana
                  <MdVerified className="text-[#1DB954]" />
                </>
              ) : (
                ""
              )}
            </h2>{" "}
            <h3 className="text-xs text-dev-black/50 dark:text-white/50">
              {sidebar ? "@Qqqqmln" : ""}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-1 mt-10 border-t">
        <NavbarList />
      </div>
    </div>
  );
};

export default Navbar;
