import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NavMobile from "../components/navbar/navMobile";
import { useMemo } from "react";

const Pages = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const darkModeClass = useMemo(() => (darkMode ? "dark" : ""), [darkMode])

  return (
    <div className={`${darkModeClass ? "dark" : ""}`}>
      <Navbar />
      <NavMobile />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Pages;