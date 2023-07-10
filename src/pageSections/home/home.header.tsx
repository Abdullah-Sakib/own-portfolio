import hogwarts from "../../assets/hogwarts.avif";

const HomeHeader = () => {
  return (
    <section className="text-gray-600 body-font container">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to my portfolio!
            <br className="hidden lg:inline-block" />
            I'm Abdullah sakib,
          </h1>
          <p className="mb-8 leading-relaxed">
            a passionate MERN stack developer. With a deep love for coding and a
            keen eye for design, I create web applications that combine
            functionality and aesthetics. Explore my projects, delve into my
            skills, and discover how I can contribute to your next web
            development venture.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-full w-full  "
            alt="hero"
            src={hogwarts}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
