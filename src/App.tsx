import { Outlet } from "react-router-dom";
import Sidebar from "./layout/sidebar";
import Footer from "./pageSections/shared/footer";

const App = () => {
  return (
    <div className="flex custom-scrollbar bg-[#49d49d10]">
      <aside className="h-screen w-[20vw] hidden lg:block sticky top-0 border-r-[1px] border-green-400 border-opacity-40  overflow-auto custom-scrollbar-sidebar ">
        <Sidebar />
      </aside>

      <main className="w-full lg:w-[80vw] scroll-smooth">
        <div>
          <div className="sm:container p-2" id="scrollable-container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
