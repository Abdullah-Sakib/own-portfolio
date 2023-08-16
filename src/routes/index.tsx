import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import App from "../App";
import AllBlogs from "../pageSections/blogs/blogs";
import Resume from "../pageSections/resume/resume";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<AllBlogs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
