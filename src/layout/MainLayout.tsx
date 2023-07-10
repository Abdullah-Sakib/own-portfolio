import { Outlet } from "react-router-dom";
import Navbar from "../pageSections/shared/navbar";
import Footer from "../pageSections/shared/footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
