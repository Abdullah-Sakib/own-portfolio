import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoGithub,
  BiLogoTwitter,
  BiHomeSmile,
  BiUserCircle,
} from "react-icons/bi";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiListSettingsLine, RiContactsLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { LuBook } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ScrollSpy from "../helpers/scrollSpy";

const Sidebar = () => {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState("/");
  const [active, setActive] = useState("");
  const handleNavigate = (route: string) => {
    navigate(route);
  };
  const targetIds = useMemo(
    () => [
      "home",
      "about",
      "project",
      "skills",
      "blog",
      "testimonials",
      "contact",
      "blogs",
      "resume",
    ],
    []
  );
  let activeSection: string = ScrollSpy(targetIds);

  useEffect(() => {
    if (typeof activeSection === "string") {
      setActive(activeSection);
    }
  }, [activeSection, setActive]);

  return (
    <div>
      <Avatar className="w-32 h-32 bg-gray-900 mx-auto mt-5 ">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/108396938?s=400&u=5cdd7fc9548080b1947f106179a2dc868f792aeb&v=4"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="text-center text-lg font-semibold mt-2">Abdullah Sakib</h2>
      <p className="text-center">abdullahsakib888@gmail.com</p>

      {/* Social links  start*/}
      <div className="flex justify-around py-5 border-b-[1px] ">
        <a href="https://web.facebook.com/abdullah.sakib.77715" target="_blank">
          <div className="p-2 border-2 rounded-full hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer">
            <BiLogoFacebook className="text-xl " />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-sakib/" target="_blank">
          <div className="p-2 border-2 rounded-full hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer">
            <BiLogoLinkedin className="text-xl" />
          </div>
        </a>
        <a href="https://wa.me/8801403492031" target="_blank">
          <div className="p-2 border-2 rounded-full hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer">
            <BiLogoWhatsapp className="text-xl" />
          </div>
        </a>
        <a href="https://github.com/Abdullah-Sakib" target="_blank">
          <div className="p-2 border-2 rounded-full hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer">
            <BiLogoGithub className="text-xl" />
          </div>
        </a>
        <a href="https://twitter.com/Abdulla58425718" target="_blank">
          <div className="p-2 border-2 rounded-full hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer">
            <BiLogoTwitter className="text-xl" />
          </div>
        </a>
      </div>
      {/* Social links end*/}

      {/* Section navigations start */}
      <nav className="mt-3">
        {currentRoute === "/" && (
          <>
            <h3 className="pl-4">Sections</h3>
            <ul className="flex flex-col mt-4 text-sm ">
              <a
                href="#home"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 cursor-pointer ${
                  active === "home" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "home"
                      ? "bg-emerald-400 text-white"
                      : "bg-emerald-500/10 "
                  } dark:bg-primary `}
                >
                  <BiHomeSmile className="text-xl" />
                </span>
                <span>Home</span>
              </a>

              <a
                href="#about"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 ${
                  active === "about" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "about"
                      ? "bg-emerald-400 text-white"
                      : "bg-emerald-500/10  "
                  } dark:bg-primary `}
                >
                  <BiUserCircle className="text-2xl" />
                </span>
                <span>About</span>
              </a>

              <a
                href="#project"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 ${
                  active === "project" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "project"
                      ? "bg-emerald-400 text-white"
                      : "bg-emerald-500/10 "
                  } dark:bg-primary `}
                >
                  <AiFillFolderOpen className="text-xl" />
                </span>
                <span>Project</span>
              </a>

              <a
                href="#skills"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 ${
                  active === "skills" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "skills"
                      ? "bg-emerald-400 text-white"
                      : " bg-emerald-500/10"
                  } dark:bg-primary `}
                >
                  <RiListSettingsLine className="text-xl" />
                </span>
                <span>Skills</span>
              </a>

              <a
                href="#blog"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 ${
                  active === "blog" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "blog"
                      ? "bg-emerald-400 text-white"
                      : " bg-emerald-500/10 "
                  } dark:bg-primary `}
                >
                  <LuBook className="text-xl" />
                </span>
                <span>Blogs</span>
              </a>

              <a
                href="#testimonials"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 ${
                  active === "testimonials" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "testimonials"
                      ? "bg-emerald-400 text-white"
                      : " bg-emerald-500/10 "
                  } dark:bg-primary `}
                >
                  <VscFeedback className="text-xl" />
                </span>
                <span>Testimonials</span>
              </a>

              <a
                href="#contact"
                className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 ${
                  active === "contact" ? "bg-emerald-500/10" : ""
                }`}
              >
                <span
                  className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                    active === "contact"
                      ? "bg-emerald-400 text-white"
                      : "bg-emerald-500/10 "
                  } dark:bg-primary `}
                >
                  <RiContactsLine className="text-xl" />
                </span>
                <span>Contact</span>
              </a>
            </ul>
          </>
        )}
      </nav>
      {/* Section navigations end */}

      {/* Other pages navigation start */}
      <div className="my-5">
        <h3 className="pl-4">Others</h3>
        <ul className="flex flex-col mt-4 text-sm " id="mainNav">
          {currentRoute !== "/" && (
            <div
              onClick={() => {
                handleNavigate("/");
                setActive("home");
                setCurrentRoute("/");
              }}
              className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700 cursor-pointer ${
                active === "home" ? "bg-emerald-500/10" : ""
              }`}
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 p-[5px] ${
                  active === "home"
                    ? "bg-emerald-400 text-white"
                    : "bg-emerald-500/10 "
                } dark:bg-primary `}
              >
                <BiHomeSmile className="text-xl" />
              </span>
              <span>Home</span>
            </div>
          )}
          <div
            onClick={() => {
              handleNavigate("/resume");
              setActive("resume");
              setCurrentRoute("/resume");
            }}
            className={`flex items-center duration-300 gap-5 pl-10 py-3 text-gray-700  cursor-pointer dark:text-neutral-500 ${
              active === "resume" ? "bg-emerald-500/10" : ""
            }`}
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "resume"
                  ? "bg-emerald-400 text-white"
                  : "bg-emerald-500/10"
              } dark:bg-primary`}
            >
              <HiOutlineDocumentText className="text-xl" />
            </span>

            <span>Resume</span>
          </div>

          <div
            onClick={() => {
              handleNavigate("/blogs");
              setActive("blogs");
              setCurrentRoute("/blogs");
            }}
            className={`flex duration-300 items-center gap-5 pl-10 py-3 text-gray-700 dark:text-neutral-500 mb-16 cursor-pointer ${
              active === "blogs" ? "bg-emerald-500/10" : ""
            }`}
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "blogs"
                  ? "bg-emerald-400 text-white"
                  : "bg-emerald-500/10  "
              } dark:bg-primary`}
            >
              <LuBook className="text-xl" />
            </span>

            <span>Blogs</span>
          </div>
        </ul>
      </div>
      {/* Other pages navigation end */}
    </div>
  );
};

export default Sidebar;
