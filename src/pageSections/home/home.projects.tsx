import hogwarts from "../../assets/hogwarts.avif";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-10 text-gray-200   mt-10 ">
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
                      <div className="text-black">
                        <h1 className="text-2xl font-semibold dark:text-purple-500 text-emerald-500">
                          Best Buy
                          <span className="text-lg font-normal text-gray-300">
                            {" "}
                            - Used laptop buy and sale related E-commerce
                            website
                          </span>
                        </h1>
                        <div className="mt-8">
                          <h3 className="text-lg">Source Code</h3>
                          <div className="flex flex-wrap gap-3 mt-2 text-sm">
                            <div className="inline-flex">
                              <a
                                href="https://best-buy-be3c4.web.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-emerald-400/60 dark:bg-purple-500/80"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                                <span>Live</span>
                              </a>
                            </div>
                            <div className="inline-flex">
                              <a
                                href="https://github.com/RakibMojumder/Best-buy-client"
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-emerald-400/60 dark:bg-purple-500/80"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 1024 1024"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <span>Client</span>
                              </a>
                            </div>
                            <div className="inline-flex">
                              <a
                                href="https://github.com/RakibMojumder/Best-buy-server"
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-emerald-400/60 dark:bg-purple-500/80"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 00-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z" />
                                  <path d="M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 00-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z" />
                                  <path d="M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 00-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z" />
                                </svg>
                                <span>Server</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8">
                          <h3 className="text-lg">Features</h3>
                          <div className="space-y-3 mt-2">
                            <div className="flex gap-3 items-start">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="flex-shrink-0 text-xl dark:text-primary text-emerald-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-xs">
                                Users can filter products by categories and can
                                buy products and give reviews. As a payment
                                system stripe is used here.
                              </p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="flex-shrink-0 text-xl dark:text-primary text-emerald-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-xs">
                                An admin can verify a user or seller &amp; a
                                user or seller can be an admin if an admin
                                allows also an admin can remove a user or
                                seller.
                              </p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="flex-shrink-0 text-xl dark:text-primary text-emerald-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-xs">
                                A seller can add or remove products and also can
                                see who bought his products.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8">
                          <h3 className="text-lg">Technology</h3>
                          <div className="flex flex-wrap gap-2 mt-2 text-xs">
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
                              React
                            </span>
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
                              Tailwind CSS
                            </span>
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
                              Express JS
                            </span>
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
                              MongoDB
                            </span>
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
                              Firebase
                            </span>
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
                              Context API
                            </span>
                            <span className="px-2 py-0.5 text-black border border-emerald-500 dark:border-primary rounded-full">
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
