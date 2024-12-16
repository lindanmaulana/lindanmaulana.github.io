import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Pages = () => {
  const {darkMode} = useSelector((state: RootState) => state.theme)
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Pages;
