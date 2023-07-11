import { Outlet } from "react-router-dom";
import Navbar from "../pageSections/shared/navbar";
import Footer from "../pageSections/shared/footer";

const MainLayout = () => {
  return (
    <div className="lg:border-[15px]  h-screen overflow-auto remove-scrollbar">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
