import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Pages = () => {
  return (
    <div className="pl-20">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Pages;
