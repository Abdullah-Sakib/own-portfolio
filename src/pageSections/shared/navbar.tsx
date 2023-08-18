import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="text-gray-600 body-font lg:hidden">
      <div className="h-12 w-full px-3 backdrop-blur-xl lg:hidden flex justify-between items-center fixed top-0 z-50">
        <img
          src="https://avatars.githubusercontent.com/u/108396938?s=400&u=5cdd7fc9548080b1947f106179a2dc868f792aeb&v=4"
          alt=""
          className="h-9 w-9 rounded-full bg-gray-900"
        />
      </div>

      <Dialog>
        <DialogTrigger
          onClick={() => setOpen(true)}
          className="fixed right-5 ml-auto  mt-4 z-50"
          asChild
        >
          <HiMenuAlt3 className="text-xl " />
        </DialogTrigger>
        <DialogContent
          className={`min-w-[92%] h-[82vh] overlay lg:hidden ${
            open ? "block" : "hidden"
          }  close-button bg-[#07180ded]`}
        >
          <div className="w-full h-full py-6 px-3  text-white rounded-md ">
            <div className="pb-4 border-b">
              <img
                src="https://avatars.githubusercontent.com/u/108396938?s=400&u=5cdd7fc9548080b1947f106179a2dc868f792aeb&v=4"
                alt="my image"
                className="w-28 mx-auto rounded-full bg-gray-900"
              />
              <div className="mt-1 text-center">
                <h3 className="text-lg font-semibold">Abdullah Sakib</h3>
                <p className="block lg:hidden  text-sm">
                  abdullahsakib888@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5 py-5">
              {location.pathname === "/" && (
                <>
                  <p className="mt-2 ml-5 self-start">Sections :</p>
                  <a href="/#home" onClick={() => setOpen(false)}>
                    Home
                  </a>
                  <a href="/#about" onClick={() => setOpen(false)}>
                    About
                  </a>
                  <a href="/#project" onClick={() => setOpen(false)}>
                    Project
                  </a>
                  <a href="/#skills" onClick={() => setOpen(false)}>
                    Skills
                  </a>
                  <a href="/#blog" onClick={() => setOpen(false)}>
                    Blog
                  </a>
                  <a href="/#testimonials" onClick={() => setOpen(false)}>
                    Testimonials
                  </a>
                  <a href="/#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </>
              )}

              <p className="mt-2 ml-5 self-start">Pages :</p>
              {location.pathname !== "/" && (
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              )}
              <Link to="/resume" onClick={() => setOpen(false)}>
                Resume
              </Link>
              <Link to="/blogs" onClick={() => setOpen(false)}>
                All Blogs
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
