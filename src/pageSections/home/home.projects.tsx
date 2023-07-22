import hogwarts from "../../assets/hogwarts.avif";
import { Button } from "../../components/ui/button";
import { TiTick } from "react-icons/ti";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { IoServer } from "react-icons/io5";

const HomeProjects = () => {
  return (
    <section className="text-gray-600 body-font" id="project">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Projects
            </h1>
            <div className="h-1 w-16 bg-green-500 rounded" />
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={hogwarts}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  This is a photographer services selling application.
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-10 text-gray-200 mt-10 ">
                      <div>
                        <img
                          src="https://i.ibb.co/4SY3xM0/best-buy.png"
                          alt="project Image"
                          style={{ height: 320, width: "100%" }}
                        />
                        <div className="flex justify-center gap-4 mt-4">
                          <button className="h-10 lg:h-20 w-full false">
                            <img
                              src="https://i.ibb.co/4SY3xM0/best-buy.png"
                              alt="project image"
                              className="h-full w-full"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </button>
                          <button className="h-10 lg:h-20 w-full false">
                            <img
                              src="https://i.ibb.co/H25rxxj/best-buy-1.png"
                              alt="project image"
                              className="h-full w-full"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </button>
                          <button className="h-10 lg:h-20 w-full false">
                            <img
                              src="https://i.ibb.co/0FrYR6j/best-buy-2.png"
                              alt="project image"
                              className="h-full w-full"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </button>
                          <button className="h-10 lg:h-20 w-full false">
                            <img
                              src="https://i.ibb.co/pfZ6GJV/best-buy-3.png"
                              alt="project image"
                              className="h-full w-full"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </button>
                          <button className="h-10 lg:h-20 w-full false">
                            <img
                              src="https://i.ibb.co/F8zbDz9/best-buy-4.png"
                              alt="project image"
                              className="h-full w-full"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </button>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-2xl font-semibold dark:text-purple-500 text-white">
                          Best Buy
                          <span className="text-lg font-normal text-gray-300">
                            {" "}
                            - Used laptop buy and sale related E-commerce
                            website
                          </span>
                        </h1>
                        <div className="mt-4 text-white">
                          <h3 className="text-lg">Source Code</h3>
                          <div className="flex flex-wrap gap-3 mt-2 text-sm">
                            <div className="inline-flex">
                              <a
                                href="https://best-buy-be3c4.web.app/"
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
                                href="https://github.com/RakibMojumder/Best-buy-client"
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
                                href="https://github.com/RakibMojumder/Best-buy-server"
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
                            <div className="flex gap-3 items-start">
                              <TiTick className="flex-shrink-0 text-md dark:text-primary bg-emerald-500 rounded-full" />
                              <p className="text-xs">
                                Users can filter products by categories and can
                                buy products and give reviews. As a payment
                                system stripe is used here.
                              </p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <TiTick className="flex-shrink-0 text-md dark:text-primary bg-emerald-500 rounded-full" />
                              <p className="text-xs">
                                An admin can verify a user or seller &amp; a
                                user or seller can be an admin if an admin
                                allows also an admin can remove a user or
                                seller.
                              </p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <TiTick className="flex-shrink-0 text-md dark:text-primary bg-emerald-500 rounded-full" />
                              <p className="text-xs">
                                A seller can add or remove products and also can
                                see who bought his products.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-white">
                          <h3 className="text-lg">Technology</h3>
                          <div className="flex flex-wrap gap-2 mt-2 text-xs">
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              React
                            </span>
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              Tailwind CSS
                            </span>
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              Express JS
                            </span>
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              MongoDB
                            </span>
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              Firebase
                            </span>
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              Context API
                            </span>
                            <span className="px-2 py-0.5  border border-emerald-500 dark:border-primary rounded-full">
                              Stripe
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section></section>
    </section>
  );
};

export default HomeProjects;
