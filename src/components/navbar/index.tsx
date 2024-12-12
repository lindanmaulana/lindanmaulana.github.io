import { TfiGithub, TfiInstagram, TfiLinkedin } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { handleOutSideBar, handleSidebar } from "../../redux/slices/navbar";
import { AppDispatch, RootState } from "../../redux/store";
import NavbarList from "./list";
import { BackgroundImage, ImageHome } from "../../assets/images";
import { MdVerified } from "react-icons/md";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { handleMode } from "../../redux/slices/theme";

const Navbar = () => {
  const {
    navbar: { sidebar },
    theme: { darkMode },
  } = useSelector((state: RootState) => state);
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
      className={`flex flex-col bg-white dark:bg-dev-black shadow-lg shadow-dev-black/50 h-screen z-50 fixed justify-between text-white left-0 top-0  ${
        sidebar ? "w-[260px]" : "w-[78px]"
      } py-6 px-2 transition-global`}
    >
      <div
        className={`relative flex flex-col h-20 mb-14 ${
          sidebar ? "bg-none" : "bg-none"
        } bg-no-repeat bg-cover rounded`}
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
              className="absolute z-10 p-2 text-base bg-white rounded-lg bottom-2 right-2 text-dev-black"
            >
              {darkMode ? <BsCloudMoon /> : <BsCloudSun />}
            </button>
          </>
        ) : null}

        <div
          className={`absolute flex gap-2 flex-col w-full justify-center items-center overflow-hidden translate-x-1/2 ${
            sidebar ? " -bottom-24" : " top-5"
          } right-1/2`}
        >
          <figure
            className={`${
              sidebar ? "w-24 -bottom-14" : "w-14 top-5 mr-1"
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
      <div className="flex flex-col gap-2">
        <NavbarList />
      </div>
      <div
        className={`flex ${
          sidebar ? "flex-row" : "flex-col"
        } justify-center items-center gap-2 text-white dark:text-dev-black`}
      >
        <a
          href="https://www.instagram.com/qqqqmln"
          className="p-1 text-xs rounded-full dark:bg-white bg-dev-black-gray"
        >
          <TfiInstagram />
        </a>
        <a
          href="https://www.github.com/lindanmaulana"
          className="p-1 text-xs rounded-full dark:bg-white bg-dev-black-gray"
        >
          <TfiGithub />
        </a>
        <a
          href="https://www.github.com/lindanmaulana"
          className="p-1 text-xs rounded-full dark:bg-white bg-dev-black-gray"
        >
          <TfiLinkedin />
        </a>
      </div>
      <div className="mt-4 text-center text-white ">
        <p
          className={` ${sidebar ? "text-[10px]" : "text-[8px] line-clamp-1"} `}
        >
          Copyright ©2023 Lindan Maulana. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
