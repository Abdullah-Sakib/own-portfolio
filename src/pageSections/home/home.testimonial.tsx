import { FaQuoteRight } from "react-icons/fa";
import BasharVai from "../../assets/bashar.png";

const HomeTestimonial = () => {
  return (
    <section className="text-gray-600 body-font " id="testimonials">
      <div className="container px-5 py-24 mx-auto">
        <h1
          className="text-center font-extrabold text-4xl sm:text-5xl  mb-12  uppercase text-gray-700 pt-4"
          style={{ transform: "none" }}
        >
          <span className="text-emerald-500 dark:text-primary">
            Testimonials
          </span>{" "}
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-emerald-200/10 duration-300 p-8 rounded border-2 border-emerald-500">
              <FaQuoteRight className="block w-5 h-5 text-emerald-400 mb-4" />
              <p className="leading-relaxed mb-6">
                Working with Abdullah sakib was a pleasure. His expertise in the
                MERN stack and attention to detail was instrumental in
                delivering our project on time and within budget.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={BasharVai}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Abul Bashar
                  </span>
                  <span className="text-gray-500 text-sm">
                    Head of Front-end at 3W
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-emerald-200/10 duration-300 p-8 rounded border-2 border-emerald-500">
              <FaQuoteRight className="block w-5 h-5 text-emerald-400 mb-4" />
              <p className="leading-relaxed mb-6">
                Working with Abdullah sakib was a pleasure. His expertise in the
                MERN stack and attention to detail was instrumental in
                delivering our project on time and within budget.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={BasharVai}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Abul Bashar
                  </span>
                  <span className="text-gray-500 text-sm">
                    Head of Front-end at 3W
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
