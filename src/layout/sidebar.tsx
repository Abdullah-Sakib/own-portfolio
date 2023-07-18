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
import { BsFillFileTextFill, BsFileEarmarkRichtextFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ScrollSpy from "../hooks/scrollSpy";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const targetIds = [
    "home",
    "about",
    "project",
    "skills",
    "blog",
    "testimonials",
  ];

  let activeSection = ScrollSpy(targetIds);
  useEffect(() => {
    setActive(activeSection);
  }, [activeSection]);

  console.log(active);

  return (
    <div>
      <Avatar className="w-32 h-32 bg-black mx-auto mt-5 ">
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
        <h3 className="pl-4">Sections</h3>
        <ul className="flex flex-col mt-4 text-sm " id="mainNav">
          <a href="#home">
            <li
              onClick={() => setActive("home")}
              className={`flex items-center gap-5  pl-10 py-3 text-black dark:text-neutral-500 cursor-pointer`}
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "home" ? "bg-emerald-400 text-white" : ""
                } dark:bg-primary `}
              >
                <BiHomeSmile className="text-xl" />
              </span>

              <span>Home</span>
            </li>
          </a>

          <a href="#about">
            <li
              onClick={() => setActive("about")}
              className="flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500"
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "about" ? "bg-emerald-400 text-white" : " "
                } dark:bg-primary `}
              >
                <BiUserCircle className="text-2xl" />
              </span>
              <span>About</span>
            </li>
          </a>

          <a href="#project">
            <li
              onClick={() => setActive("project")}
              className="flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500"
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "project" ? "bg-emerald-400 text-white" : ""
                } dark:bg-primary `}
              >
                <AiFillFolderOpen className="text-xl" />
              </span>
              <span>Project</span>
            </li>
          </a>

          <a href="#skills">
            <li
              onClick={() => setActive("skills")}
              className="flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500"
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "skills" ? "bg-emerald-400 text-white" : " "
                } dark:bg-primary `}
              >
                <RiListSettingsLine className="text-xl" />
              </span>
              <span>Skills</span>
            </li>
          </a>

          <a href="#blog">
            <li
              onClick={() => setActive("blog")}
              className="flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500"
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "blog" ? "bg-emerald-400 text-white" : " "
                } dark:bg-primary `}
              >
                <BsFileEarmarkRichtextFill className="text-xl" />
              </span>
              <span>Blogs</span>
            </li>
          </a>

          <a href="#testimonials">
            <li
              onClick={() => setActive("testimonials")}
              className="flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500"
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "testimonials" ? "bg-emerald-400 text-white" : " "
                } dark:bg-primary `}
              >
                <VscFeedback className="text-xl" />
              </span>
              <span>Testimonials</span>
            </li>
          </a>

          <a href="#contact">
            <li
              onClick={() => setActive("contact")}
              className="flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500"
            >
              <span
                className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                  active === "contact" ? "bg-emerald-400 text-white" : ""
                } dark:bg-primary `}
              >
                <RiContactsLine className="text-xl" />
              </span>
              <span>Contact</span>
            </li>
          </a>
        </ul>
      </nav>
      {/* Section navigations end */}

      {/* Other pages navigation start */}
      <div className="my-5">
        <h3 className="pl-4">Others</h3>
        <ul className="flex flex-col mt-4 text-sm " id="mainNav">
          <Link
            to="/resume"
            onClick={() => setActive("resume")}
            className={`flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500 `}
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "resume" ? "bg-emerald-400 text-white" : " "
              } dark:bg-primary`}
            >
              <BsFillFileTextFill className="text-xl" />
            </span>

            <span>Resume</span>
          </Link>

          <Link
            to="/blogs"
            onClick={() => setActive("blogs")}
            className={`flex items-center gap-5 pl-10 py-3 text-black dark:text-neutral-500 mb-16`}
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "blogs" ? "bg-emerald-400 text-white" : " "
              } dark:bg-primary`}
            >
              <BsFileEarmarkRichtextFill className="text-xl" />
            </span>

            <span>Blogs</span>
          </Link>
        </ul>
      </div>
      {/* Other pages navigation end */}
    </div>
  );
};

export default Sidebar;
