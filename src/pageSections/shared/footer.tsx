import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Abdullah Sakib</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Abdullah Sakib —
          <a
            href="https://twitter.com/Abdulla58425718"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Abdulla58425718
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://web.facebook.com/abdullah.sakib.77715"
            target="_blank"
            className="text-gray-500 ml-3"
          >
            <BiLogoFacebook className="text-2xl  hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/Abdulla58425718"
            target="_blank"
            className="text-gray-500 ml-3"
          >
            <BiLogoTwitter className="text-2xl  hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-sakib/"
            target="_blank"
            className="text-gray-500 ml-3"
          >
            <BiLogoLinkedin className="text-2xl  hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer" />
          </a>
          <a
            href="https://github.com/Abdullah-Sakib"
            target="_blank"
            className="text-gray-500 ml-3"
          >
            <BiLogoGithub className="text-2xl  hover:border-green-400 hover:text-green-400 duration-300 cursor-pointer" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
