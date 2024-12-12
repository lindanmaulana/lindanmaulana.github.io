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
              ? `bg-dev-black-gray dark:bg-white dark:text-dev-black text-white ${
                  sidebar ? "justify-start ps-4" : "justify-center"
                }  flex items-center gap-2 w-full py-2 rounded-s-sm text-sm`
              : `flex text-base text-dev-black-gray dark:text-white items-center gap-2 ${
                  sidebar ? "justify-start ps-4" : "justify-center"
                } hover:bg-dev-black/70 dark:hover:bg-white/50 dark:hover:text-dev-black hover:text-white/80 py-2 transition-global`
          }
        >
          <nav.icon />
          {sidebar ? nav.title : null}
        </NavLink>
      ))}
    </>
  );
};

export default NavbarList;
