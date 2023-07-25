import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { BsLink45Deg, BsGithub, BsFillPatchCheckFill } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

interface IProject {
  title: string;
  subTitle: string;
  liveLink: string;
  clientSide: string;
  serverSide: string;
  features: string[];
  technologies: string[];
  images: string[];
}

const HomeProjects = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  const projectData = [
    {
      title: "Best Buy",
      subTitle: "Used laptop buy and sale related E- commerce website",
      liveLink: "https://make-better-use.netlify.app/",
      clientSide: "https://github.com/Abdullah-Sakib",
      serverSide: "https://github.com/Abdullah-Sakib",
      features: [
        "Users can filter products by categories and can buy products and give reviews. As a payment system stripe is used here.",
        "An admin can verify a user or seller & a user or seller can be an admin if an admin allows also an admin can remove a user or seller.",
        "A seller can add or remove products and also can see who bought his products.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Express JS",
        "MongoDB",
        "Firebase",
        "Context API",
        "Stripe",
      ],
      images: [
        "https://i.ibb.co/4SY3xM0/best-buy.png",
        "https://i.ibb.co/H25rxxj/best-buy-1.png",
        "https://i.ibb.co/0FrYR6j/best-buy-2.png",
        "https://i.ibb.co/pfZ6GJV/best-buy-3.png",
        "https://i.ibb.co/F8zbDz9/best-buy-4.png",
      ],
    },
    {
      title: "Best Buy",
      subTitle: "Used laptop buy and sale related E- commerce website",
      liveLink: "https://make-better-use.netlify.app/",
      clientSide: "https://github.com/Abdullah-Sakib",
      serverSide: "https://github.com/Abdullah-Sakib",
      features: [
        "Users can filter products by categories and can buy products and give reviews. As a payment system stripe is used here.",
        "An admin can verify a user or seller & a user or seller can be an admin if an admin allows also an admin can remove a user or seller.",
        "A seller can add or remove products and also can see who bought his products.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Express JS",
        "MongoDB",
        "Firebase",
        "Context API",
        "Stripe",
      ],
      images: [
        "https://i.ibb.co/4SY3xM0/best-buy.png",
        "https://i.ibb.co/H25rxxj/best-buy-1.png",
        "https://i.ibb.co/0FrYR6j/best-buy-2.png",
        "https://i.ibb.co/pfZ6GJV/best-buy-3.png",
        "https://i.ibb.co/F8zbDz9/best-buy-4.png",
      ],
    },
    {
      title: "Best Buy",
      subTitle: "Used laptop buy and sale related E- commerce website",
      liveLink: "https://make-better-use.netlify.app/",
      clientSide: "https://github.com/Abdullah-Sakib",
      serverSide: "https://github.com/Abdullah-Sakib",
      features: [
        "Users can filter products by categories and can buy products and give reviews. As a payment system stripe is used here.",
        "An admin can verify a user or seller & a user or seller can be an admin if an admin allows also an admin can remove a user or seller.",
        "A seller can add or remove products and also can see who bought his products.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Express JS",
        "MongoDB",
        "Firebase",
        "Context API",
        "Stripe",
      ],
      images: [
        "https://i.ibb.co/4SY3xM0/best-buy.png",
        "https://i.ibb.co/H25rxxj/best-buy-1.png",
        "https://i.ibb.co/0FrYR6j/best-buy-2.png",
        "https://i.ibb.co/pfZ6GJV/best-buy-3.png",
        "https://i.ibb.co/F8zbDz9/best-buy-4.png",
      ],
    },
    {
      title: "Best Buy",
      subTitle: "Used laptop buy and sale related E- commerce website",
      liveLink: "https://make-better-use.netlify.app/",
      clientSide: "https://github.com/Abdullah-Sakib",
      serverSide: "https://github.com/Abdullah-Sakib",
      features: [
        "Users can filter products by categories and can buy products and give reviews. As a payment system stripe is used here.",
        "An admin can verify a user or seller & a user or seller can be an admin if an admin allows also an admin can remove a user or seller.",
        "A seller can add or remove products and also can see who bought his products.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Express JS",
        "MongoDB",
        "Firebase",
        "Context API",
        "Stripe",
      ],
      images: [
        "https://i.ibb.co/4SY3xM0/best-buy.png",
        "https://i.ibb.co/H25rxxj/best-buy-1.png",
        "https://i.ibb.co/0FrYR6j/best-buy-2.png",
        "https://i.ibb.co/pfZ6GJV/best-buy-3.png",
        "https://i.ibb.co/F8zbDz9/best-buy-4.png",
      ],
    },
  ];

  return (
    <section className="text-gray-600 body-font" id="project">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0">
            <h1
              className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-gray-700 pt-4"
              style={{ transform: "none" }}
            >
              <span className="text-emerald-500 dark:text-primary">My</span>{" "}
              Projects
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {projectData?.map((project, idx) => (
            <div className="p-4 md:w-1/4">
              <div key={idx} className="h-full overflow-hidden">
                <img
                  className=" w-full object-cover object-center border-2 border-emerald-500"
                  src={project?.images[0]}
                  alt="blog"
                />
                <div className="pt-6">
                  <h1 className="text-lg font-semibold text-gray-900 ">
                    {project?.title}
                  </h1>
                  <p className="leading-relaxed mb-4">{project?.subTitle}</p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedProject(project);
                          setSelectedImage(project?.images[0]);
                        }}
                        className="group w-full py-1 bg-emerald-500 hover:bg-emerald-500 text-white hover:text-gray-100 text-sm rounded-full flex justify-center items-center h-8 border-none"
                      >
                        Details
                        <BiChevronRight className="text-xl ml-1 mt-[3px] transition-all duration-300 group-hover:translate-x-2.5 group-hover:scale-x-110" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-10 text-gray-200 mt-10 ">
                        <div>
                          <img
                            src={selectedImage}
                            alt="project Image"
                            style={{ height: 320, width: "100%" }}
                          />
                          <div className="flex justify-center gap-4 mt-4">
                            {selectedProject?.images?.map(
                              (image: string, idx: number) => (
                                <button
                                  key={idx}
                                  className={`h-10 lg:h-20 w-full border-2  duration-300 ${
                                    image === selectedImage
                                      ? " border-emerald-500 "
                                      : "border-transparent"
                                  }`}
                                  onClick={() => setSelectedImage(image)}
                                >
                                  <img
                                    src={image}
                                    alt="project image"
                                    className="h-full w-full"
                                    style={{ height: "100%", width: "100%" }}
                                  />
                                </button>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <h1 className="text-2xl font-semibold dark:text-purple-500 text-white">
                            {project?.title}
                            <span className="text-lg font-normal text-gray-300">
                              {" "}
                              - {project?.subTitle}
                            </span>
                          </h1>
                          <div className="mt-4 text-white">
                            <h3 className="text-lg">Source Code</h3>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm">
                              <div className="inline-flex">
                                <a
                                  href={project?.liveLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-normal bg-emerald-400/60 dark:bg-purple-500/80"
                                >
                                  <BsLink45Deg className="text-[15px]" />
                                  <span>Live</span>
                                </a>
                              </div>
                              <div className="inline-flex">
                                <a
                                  href={project?.clientSide}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-normal bg-emerald-400/60 dark:bg-purple-500/80"
                                >
                                  <BsGithub className="text-[15px]" />
                                  <span>Client</span>
                                </a>
                              </div>
                              <div className="inline-flex">
                                <a
                                  href={project?.serverSide}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-normal bg-emerald-400/60 dark:bg-purple-500/80"
                                >
                                  <IoServer className="text-[15px]" />
                                  <span>Server</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="text-lg">Features</h3>
                            <div className="space-y-3 mt-2">
                              {project?.features?.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex gap-3 items-start"
                                >
                                  <BsFillPatchCheckFill className="flex-shrink-0 text-lg dark:text-primary text-emerald-500 rounded-full" />
                                  <p className="text-xs">{feature}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 text-white">
                            <h3 className="text-lg">Technology</h3>
                            <div className="flex flex-wrap gap-2 mt-2 text-xs">
                              {project?.technologies?.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full cursor-pointer"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
