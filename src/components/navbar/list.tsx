import { NavLink } from "react-router-dom";
import { dataNavar } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const NavbarList = () => {
  const {sidebar} = useSelector((state: RootState) => state.navbar)
  return (
    <>
      {dataNavar?.map((nav) => (
        <NavLink
          key={nav.id}
          to={nav.to}
          className={({ isActive }) =>
            isActive ? `bg-white text-dev-black ${sidebar ? "justify-start ps-4" : "justify-center"}  flex items-center gap-2 w-full py-2 rounded-s-sm text-sm`: `flex text-sm items-center gap-2 ${sidebar ? "justify-start ps-4" : "justify-center"} hover:bg-white/50 hover:py-2 transition-global`
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
