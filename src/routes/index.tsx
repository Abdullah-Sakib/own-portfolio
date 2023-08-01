import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import App from "../App";
import AllBlogs from "../pageSections/blogs/blogs";
import Resume from "../pageSections/resume/resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/blogs",
        element: <AllBlogs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
