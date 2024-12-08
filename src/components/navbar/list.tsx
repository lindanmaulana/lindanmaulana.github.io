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
            isActive ? "bg-white text-dev-black ps-4 flex items-center gap-2 w-full py-2 rounded-s-sm" : "flex items-center gap-2 ps-4"
          }
        >
          <nav.icon /> {sidebar ? nav.title : null}
        </NavLink>
      ))}
    </>
  );
};

export default NavbarList;
