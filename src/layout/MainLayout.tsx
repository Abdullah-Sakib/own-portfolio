import { Outlet } from "react-router-dom";
import Footer from "../pageSections/shared/footer";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="flex  custom-scrollbar bg-[#49d49d10]">
      <aside className="h-screen w-[20vw] sticky  top-0  border-r-[1px] border-green-400 border-opacity-40  overflow-auto custom-scrollbar-sidebar">
        <Sidebar />
      </aside>

      <main className="w-[80vw] scroll-smooth">
        <div>
          <div className="container" id="scrollable-container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
