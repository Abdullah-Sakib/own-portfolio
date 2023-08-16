import { BiChevronRight } from "react-icons/bi";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const AllBlogs = () => {
  const blogs = [
    {
      category: "Web Development",
      title: "Mastering HTML and CSS",
      description:
        "A comprehensive guide to understanding and utilizing the power of HTML and CSS in web design.",
      detailsPage: "/blogs/mastering-html-css",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, purus auctor sagittis euismod, dui augue aliquam odio...",
      author: "Your Name",
      date: "2023-08-15",
    },
    {
      category: "Graphic Design",
      title: "Creating Captivating Logos",
      description:
        "Exploring the art of crafting visually striking logos that leave a lasting impression.",
      detailsPage: "/blogs/creating-captivating-logos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, purus auctor sagittis euismod, dui augue aliquam odio...",
      author: "Your Name",
      date: "2023-08-16",
    },
    {
      category: "Photography",
      title: "Capturing Nature's Beauty",
      description:
        "A journey through breathtaking landscapes and techniques to capture the essence of nature.",
      detailsPage: "/blogs/capturing-natures-beauty",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, purus auctor sagittis euismod, dui augue aliquam odio...",
      author: "Your Name",
      date: "2023-08-17",
    },
  ];
  return (
    <section className="text-gray-600 body-font" id="blog">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-14">
          <div className=" text-center w-full mb-6 lg:mb-0">
            <h1
              className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-gray-700 pt-4"
              style={{ transform: "none" }}
            >
              <span className="text-emerald-500 dark:text-primary">My All</span>{" "}
              Blogs
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <div key={item} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="rounded-lg">
                <img
                  className="h-48 border-2 border-emerald-500 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV4dCUyMGpzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="content"
                />
                <div className="py-4">
                  <Badge
                    style={{
                      boxShadow:
                        "inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)",
                    }}
                    className="font-thin mb-2 bg-orange-300 hover:bg-orange-300 border-none  text-black"
                  >
                    Debuging
                  </Badge>
                  <h2 className="text-lg  font-semibold text-gray-900 mb-2">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>

                  <Button className="group w-full mt-4 bg-emerald-500 h-8 duration-300 hover:bg-emerald-600">
                    Read more
                    <BiChevronRight className="text-xl ml-1 mt-[3px] transition-all duration-300 group-hover:translate-x-2.5 group-hover:scale-x-110" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
