import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { hanldeNavbarMobile } from "../../redux/slices/navbar";
import { AppDispatch, RootState } from "../../redux/store";
import { dataNavar } from "./types";

const NavbarList = () => {
  const { sidebar, navbar } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch<AppDispatch>()
  
  const handleHideNavbar = () => {
    dispatch(hanldeNavbarMobile())
  }
  return (
    <>
      {dataNavar?.map((nav) => (
        <NavLink
          key={nav.id}
          to={nav.to}
          onClick={handleHideNavbar}
          className={({ isActive }) =>
            isActive
              ? ` text-dev-black rounded-full dark:text-white dark:bg-white/10 bg-dev-black/10 ${
                  sidebar || navbar ? "justify-start ps-4" : "justify-center"
                }  flex items-center gap-2 w-full py-2 rounded-s-sm text-sm`
              : `flex text-base text-dev-black-gray dark:text-white items-center gap-2 ${
                  sidebar ? "justify-start ps-4" : "justify-center"
                }    py-2 transition-global group`
          }
        >
          <nav.icon className="text-base" />
          {sidebar || navbar ? (
            <span className="text-xs transition-global group-hover:translate-x-3">
              {nav.title}
            </span>
          ) : null}
        </NavLink>
      ))}
    </>
  );
};

export default NavbarList;
