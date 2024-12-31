import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import NavMobile from "../components/navbar/navMobile";
import { RootState } from "../redux/store";

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