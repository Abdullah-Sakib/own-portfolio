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
import { HiDocument } from "react-icons/hi";
import { VscFeedback } from "react-icons/vsc";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("");

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
        <ul className="flex flex-col mt-4 text-sm gap-y-6" id="mainNav">
          <a
            href="#home"
            onClick={() => setActive("home")}
            className={`flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500 `}
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "home"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <BiHomeSmile className="text-xl" />
            </span>

            <span>Home</span>
          </a>

          <a
            href="#about"
            onClick={() => setActive("about")}
            className="flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500"
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "about"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <BiUserCircle className="text-2xl" />
            </span>
            <span>About</span>
          </a>

          <a
            href="#project"
            onClick={() => setActive("project")}
            className="flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500"
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "project"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <AiFillFolderOpen className="text-xl" />
            </span>
            <span>Project</span>
          </a>

          <a
            href="#skills"
            onClick={() => setActive("skills")}
            className="flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500"
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "skills"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <RiListSettingsLine className="text-xl" />
            </span>
            <span>Skills</span>
          </a>

          <a
            href="#blogs"
            onClick={() => setActive("blogs")}
            className="flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500"
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "blogs"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <HiDocument className="text-xl" />
            </span>
            <span>Blogs</span>
          </a>

          <a
            href="#testimonials"
            onClick={() => setActive("testimonials")}
            className="flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500"
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "testimonials"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <VscFeedback className="text-xl" />
            </span>
            <span>Testimonials</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-5 pl-10 text-neutral-400 dark:text-neutral-500"
          >
            <span
              className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300  ${
                active === "contact"
                  ? "bg-emerald-400 text-white"
                  : "text-neutral-400"
              } dark:bg-primary `}
            >
              <RiContactsLine className="text-xl" />
            </span>
            <span>Contact</span>
          </a>
        </ul>
      </nav>
      {/* Section navigations end */}
    </div>
  );
};

export default Sidebar;
