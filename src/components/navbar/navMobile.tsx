import { MdVerified } from "react-icons/md";
import { useSelector } from "react-redux";
import { ImageHome } from "../../assets/images";
import { RootState } from "../../redux/store";
import DarkMode from "../button/DarkMode";
import HamburgerMenu from "../hamburger";
import NavbarList from "./list";

const NavMobile = () => {
  const { navbar } = useSelector((state: RootState) => state.navbar);

  return (
    <>
      <div className={`sticky top-0 w-full right-0 lg:hidden z-10 bg-white dark:bg-dev-black`}>
        <div className="relative flex items-center justify-between w-full px-4 py-6 ">
          <div className={` flex gap-2 w-full items-center`}>
            <figure
              className={`w-8 bg-gray-600 ring-white rounded-full ring-1 overflow-hidden`}
            >
              <img
                src={ImageHome.me}
                alt="Lindan Maulana"
                className="w-full h-full"
              />
            </figure>
            <div className="text-center">
              <h2 className="flex items-center gap-1 text-base font-semibold text-dev-black ">
                Lindan Maulana
                <MdVerified className="text-[#1DB954]" />
              </h2>{" "}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DarkMode />
            <HamburgerMenu />
          </div>
        </div>
      </div>
      {navbar ? (
        <div className="sticky z-10 h-screen bg-white top-20">
          <div className="flex flex-col items-start gap-2 px-4">
            <NavbarList />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavMobile;
