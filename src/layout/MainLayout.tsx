import { Outlet } from "react-router-dom";
import Footer from "../pageSections/shared/footer";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="flex lg:border-[15px]  h-screen overflow-auto custom-scrollbar">
      <aside className="h-screen w-[20vw] sticky  top-0  border-r-[1px] border-green-400 border-opacity-40  overflow-auto custom-scrollbar-sidebar">
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
      </aside>

      <main className="w-[80vw]">
        <div className="">
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
