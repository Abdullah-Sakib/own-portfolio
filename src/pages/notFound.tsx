import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/not-found.png";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  // Automatic redirect to the home page after 4 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <section className="text-gray-600 body-font  container  ">
      <div className="mx-auto flex px-5 h-screen md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-emerald-500">
            PAGE NOT FOUND
          </h1>

          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 duration-300 rounded text-lg"
            >
              Back Home
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-3/5 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded  "
            alt="hero"
            src={notFoundImage}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
