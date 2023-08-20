import { ImMagicWand } from "react-icons/im";
import Lottie from "lottie-react";
import dev from "../../assets/animations/dev.json";

const HomeAboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-full flex items-center sm:mb-0  sm:pt-0 overflow-x-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-sm text-green-500 tracking-widest font-medium title-font ">
            <ImMagicWand className="inline-block text-base" /> Lumos Maxima
          </h2>
          <h1
            className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-gray-700 pt-4"
            style={{ transform: "none" }}
          >
            <span className="text-emerald-500 dark:text-primary">About</span> me
          </h1>
        </div>

        <div className="grid grid-cols-12 items-center w-full px-0 sm:px-3 lg:pr-5">
          <div className="col-span-12 lg:col-span-5">
            <div>
              <Lottie animationData={dev} loop={true} />
            </div>
          </div>
          <p className="col-span-12 lg:col-span-7 text-justify text-gray-700 text-[15px]">
            Hello! I am{" "}
            <strong>Abdullah Sakib Junior MERN Stack Developer</strong>. As a
            Junior Web Developer, I am eager to bring my technical skills and
            passion for creating dynamic, user-friendly websites to a
            challenging and dynamic work environment. With a solid understanding
            of <strong>HTML, CSS, JavaScript,</strong> and{" "}
            <strong>React Js</strong> and a growing knowledge of back-end
            technologies like <strong>Node Js, and Express Js</strong>. I am
            confident in my ability to build and maintain websites that meet the
            needs of users and clients alike. I am a quick learner and always
            eager to take on new challenges, and I thrive in collaborative
            environments where I can work with designers, senior developers, and
            other stakeholders to bring projects to life. If you are looking for
            a Junior Web Developer who is dedicated, detail-oriented, and eager
            to grow and learn, please do not hesitate to reach out. I would be
            thrilled to bring my skills and enthusiasm to your team!
          </p>
        </div>
      </div>
    </section>

    // <section className="text-gray-600 body-font" id="about">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-col text-center w-full mb-20">
    //       <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
    //         <ImMagicWand className="inline-block text-base" /> Lumos Maxima
    //       </h2>
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
    //         More About Me
    //       </h1>
    //     </div>
    //     <div className="flex flex-wrap -m-4">
    //       <div className="p-4 md:w-1/2">
    //         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
    //           <div className="flex items-center mb-3">
    //             <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 className="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    //               </svg>
    //             </div>
    //             <h2 className="text-gray-900 text-lg title-font font-medium">
    //               Introduction
    //             </h2>
    //           </div>
    //           <div className="flex-grow">
    //             <p className="leading-relaxed text-base">
    //               Hello there! I'm Abdullah Sakib, a dedicated MERN stack
    //               developer with a passion for building exceptional web
    //               experiences.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2">
    //         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
    //           <div className="flex items-center mb-3">
    //             <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 className="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    //                 <circle cx={12} cy={7} r={4} />
    //               </svg>
    //             </div>
    //             <h2 className="text-gray-900 text-lg title-font font-medium">
    //               Experience and Expertise
    //             </h2>
    //           </div>
    //           <div className="flex-grow">
    //             <p className="leading-relaxed text-base">
    //               With 6 months of experience in web development, I thrive on
    //               transforming ideas into reality through elegant and efficient
    //               code. My journey in the world of development began during my
    //               college life. Since then, I have been honing my skills in
    //               MongoDB, Express.js, React.js, and Node.js to create robust
    //               and scalable applications.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2">
    //         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
    //           <div className="flex items-center mb-3">
    //             <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 className="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <circle cx={6} cy={6} r={3} />
    //                 <circle cx={6} cy={18} r={3} />
    //                 <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    //               </svg>
    //             </div>
    //             <h2 className="text-gray-900 text-lg title-font font-medium">
    //               Continuous Learning and Innovation
    //             </h2>
    //           </div>
    //           <div className="flex-grow">
    //             <p className="leading-relaxed text-base">
    //               I believe in staying up-to-date with the latest technologies
    //               and best practices, enabling me to deliver innovative
    //               solutions. Beyond my technical expertise, I am a team player
    //               and an effective communicator. I enjoy collaborating with
    //               clients and fellow developers to bring projects to life.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2">
    //         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
    //           <div className="flex items-center mb-3">
    //             <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 className="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <circle cx={6} cy={6} r={3} />
    //                 <circle cx={6} cy={18} r={3} />
    //                 <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    //               </svg>
    //             </div>
    //             <h2 className="text-gray-900 text-lg title-font font-medium">
    //               Beyond Work
    //             </h2>
    //           </div>
    //           <div className="flex-grow">
    //             <p className="leading-relaxed text-base">
    //               When I'm not coding, you can find me exploring new
    //               technologies or immersing myself in a good book.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2">
    //         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
    //           <div className="flex items-center mb-3">
    //             <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 className="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <circle cx={6} cy={6} r={3} />
    //                 <circle cx={6} cy={18} r={3} />
    //                 <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    //               </svg>
    //             </div>
    //             <h2 className="text-gray-900 text-lg title-font font-medium">
    //               Bring Your Ideas to Life!
    //             </h2>
    //           </div>
    //           <div className="flex-grow">
    //             <p className="leading-relaxed text-base">
    //               I'm excited to embark on new challenges and contribute to the
    //               success of your next web project. Feel free to reach out, and
    //               let's discuss how we can work together to bring your ideas to
    //               life!
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomeAboutMe;
