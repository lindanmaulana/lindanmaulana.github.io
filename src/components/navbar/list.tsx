import { NavLink } from "react-router-dom";
import { dataNavar } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const NavbarList = () => {
  const { sidebar } = useSelector((state: RootState) => state.navbar);
  return (
    <>
      {dataNavar?.map((nav) => (
        <NavLink
          key={nav.id}
          to={nav.to}
          className={({ isActive }) =>
            isActive
              ? `bg-black/5 text-dev-black rounded-full dark:text-white dark:bg-dev-black ${
                  sidebar ? "justify-start ps-4" : "justify-center"
                }  flex items-center gap-2 w-full py-2 rounded-s-sm text-sm`
              : `flex text-base text-dev-black-gray dark:text-white items-center gap-2 ${
                  sidebar ? "justify-start ps-4" : "justify-center"
                }    py-2 transition-global group`
          }
        >
          <nav.icon className="text-base" />
          {sidebar ? (
            <span className="text-xs transition-global group-hover:translate-x-3">{nav.title}</span>
          ) : null}
        </NavLink>
      ))}
      <p
        className={` ${
          sidebar ? "text-[10px]" : "text-[8px] line-clamp-1"
        } text-dev-black dark:text-white `}
      >
        Copyright ©2023 Lindan Maulana. All right reserved.
      </p>
    </>
  );
};

export default NavbarList;
