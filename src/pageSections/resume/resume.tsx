import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="resume" className="relative">
      <button className="h-10 w-10 flex justify-center items-center bg-emerald-500 dark:bg-primary rounded-full cursor-pointer animate-bounce fixed top-7 sm:top-14 md:top-16 right-5 sm:right-14 md:right-24 2xl:right-56">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="text-white"
          height={26}
          width={26}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
      <div className="w-full lg:w-3/4 mx-auto pt-10 pb-32 px-2 lg:px-0">
        <div className="border border-slate-600 p-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-700 uppercase">
                Abdullah Sakib
              </h1>
              <h4 className="font-medium text-gray-600 mt-1 mb-3 ">
                MERN Stack Developer
              </h4>
              <div className="text-gray-700 flex items-center gap-10">
                <a href="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a href="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a href="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-1.5 mt-3 md:mt-0">
              <p className="flex items-center md:justify-end gap-3 text-gray-700">
                <span className="text-xs sm:text-sm">Comilla, Bangladesh</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="hidden md:block"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                  <circle cx={12} cy={9} r="2.5" />
                </svg>
              </p>
              <p className="flex items-center md:justify-end gap-3 text-gray-700">
                <span className="text-xs sm:text-sm">+880 1403492031</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="hidden md:block"
                  height={16}
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>
              </p>
              <p className="flex items-center md:justify-end gap-3 text-gray-700">
                <span className="text-xs sm:text-sm">
                  abdullahsakib888@gmail.com
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="hidden md:block"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-normal bg-purple-200/50 pl-3 py-1 rounded-md text-emerald-500  ">
              Skill &amp; Technology
            </h2>
            <ul className="list-disc px-4 mt-4 space-y-2">
              <li className="text-gray-700 text-sm">
                <span className="text-gray-800 font-semibold">Expert : </span>
                HTML | CSS | Tailwind CSS | Bootstrap | JavaScript | React JS |
                React Router | Firebase
              </li>
              <li className="text-gray-700 text-sm">
                <span className="text-gray-800 font-semibold">
                  Comfortable :{" "}
                </span>
                Next JS | Node JS | Express JS | MongoDB | Redux (Toolkit) | JWT
              </li>
              <li className="text-gray-700 text-sm">
                <span className="text-gray-800 font-semibold">Familiar : </span>
                TypeScript | Material UI | Socket IO
              </li>
              <li className="text-gray-700 text-sm">
                <span className="text-gray-800 font-semibold">Tools : </span>
                Git | Github | Netlify | Vercel | VS Code | Dev Tools | NPM |
                Figma
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-normal bg-purple-200/50 pl-3 py-1 rounded-md text-emerald-500  ">
              Projects
            </h2>
            <ol className="mt-4">
              <li className="text-gray-700 text-sm py-4 border-b border-slate-700 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <p>
                    <span className="text-gray-800 font-semibold text-lg">
                      Quiziti
                    </span>{" "}
                    - A course &amp; quiz related mern stack project
                  </p>
                  <div className="font-bold self-center md:self-start">
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Live
                    </a>
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Client
                    </a>
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Server
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-8">
                  <li>
                    A user can purchase courses here and learn programming
                    related topics.
                  </li>
                  <li>
                    A user also can test his programming knowledge by giving the
                    quiz exam on multiple topics.
                  </li>
                  <li>
                    Private route and JWT Authentication have been implemented.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  <span className="text-gray-800 font-semibold self-center md:self-start">
                    Technology :{" "}
                  </span>
                  React | Tailwind CSS | Express JS | MongoBD | Passport JS |
                  Context API | Stripe
                </p>
              </li>
              <li className="text-gray-700 text-sm py-4 border-b border-slate-700 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <p>
                    <span className="text-gray-800 font-semibold text-lg">
                      Best Buy
                    </span>{" "}
                    - Used laptop buy and sale related E-commerce website
                  </p>
                  <div className="font-bold self-center md:self-start">
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Live
                    </a>
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Client
                    </a>
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Server
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-8">
                  <li>
                    Users can filter products by categories and can buy products
                    and give reviews. As a payment system stripe is used here.
                  </li>
                  <li>
                    An admin can verify a user or seller &amp; a user or seller
                    can be an admin if an admin allows also an admin can remove
                    a user or seller.
                  </li>
                  <li>
                    A seller can add or remove products and also can see who
                    bought his products.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  <span className="text-gray-800 font-semibold self-center md:self-start">
                    Technology :{" "}
                  </span>
                  React | Tailwind CSS | Express JS | MongoDB | Firebase |
                  Stripe
                </p>
              </li>
              <li className="text-gray-700 text-sm py-4 border-b border-slate-700 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <p>
                    <span className="text-gray-800 font-semibold text-lg">
                      Sakib Consultancy
                    </span>{" "}
                    - Law &amp; tax related services website
                  </p>
                  <div className="font-bold self-center md:self-start">
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Live
                    </a>
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Client
                    </a>
                    <a
                      href=""
                      className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                    >
                      Server
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-8">
                  <li>
                    There are multiple services a user can take one or more
                    services.
                  </li>
                  <li>A user has to log in if he wants to add new services.</li>
                  <li>
                    Users can give, add and remove their reviews and also see
                    what others say.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  <span className="text-gray-800 font-semibold self-center md:self-start">
                    Technology :{" "}
                  </span>
                  React | Tailwind CSS | Express JS | MongoDB | Firebase
                </p>
              </li>
            </ol>
          </div>
          {/* <div className="mt-10 text-gray-700 text-sm">
            <h2 className="text-xl font-normal bg-purple-200/50 pl-3 py-1 rounded-md text-emerald-500 ">
              Education
            </h2>
            <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
              <p className="font-semibold text-base">
                BBA , Department of Accounting
              </p>
              <span>2019 - Present</span>
            </div>
            <p>Chandpur Govt. College</p>
          </div> */}
          <div className="mt-10 text-gray-700 text-sm">
            <h2 className="text-xl font-normal bg-purple-200/50 pl-3 py-1 rounded-md text-emerald-500  ">
              Language
            </h2>
            <div className="flex gap-10 items-center mt-4">
              <p>
                <span className="font-semibold">Bangla</span> - Native
              </p>
              <p>
                <span className="font-semibold">English</span> - Fluent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
