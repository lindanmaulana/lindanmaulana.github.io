import { TfiGithub, TfiInstagram, TfiLinkedin } from "react-icons/tfi";
import NavbarList from "./list";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { handleSidebar } from "../../redux/slices/navbar";

const Navbar = () => {
  const { sidebar } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch<AppDispatch>()
  const handleBar = () => {
    dispatch(handleSidebar())
  }
  return (
    <div
      className={`flex flex-col bg-dev-black h-screen  justify-between text-white left-0 top-0 ${
        sidebar ? "w-[220px]" : "w-[80px]"
      } py-6 ps-6 transition-global`}
    >
      <div className="flex items-center justify-between pr-2">
        <h2 className="text-sm text-white">
           {`${sidebar ? "Lindan Maulana." : "LM"}`}
        </h2>{" "}
        <button onClick={handleBar} className={`text-white`}>
          {sidebar ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <NavbarList />
      </div>
      <div className="flex flex-col items-start gap-2 text-dev-black">
        <a
          href="https://www.instagram.com/qqqqmln"
          className="p-1 text-sm bg-white rounded-full"
        >
          <TfiInstagram />
        </a>
        <a
          href="https://www.github.com/lindanmaulana"
          className="p-1 text-sm bg-white rounded-full"
        >
          <TfiGithub />
        </a>
        <a
          href="https://www.github.com/lindanmaulana"
          className="p-1 text-sm bg-white rounded-full"
        >
          <TfiLinkedin />
        </a>
        <div className="mt-4 text-white ">
          <p className={` ${sidebar ? "text-xs" : "text-[8px] line-clamp-1"} `}>
            Copyright ©2023 Lindan Maulana. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
