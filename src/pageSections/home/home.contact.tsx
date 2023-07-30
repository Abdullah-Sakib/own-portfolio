import contact from "../../assets/animations/contact.json";
import Lottie from "lottie-react";

const HomeContact = () => {
  return (
    <section
      id="contact"
      className="min-h-full flex justify-center items-center pt-20 mb-24  px-3 sm:px-0 overflow-x-hidden"
    >
      <div>
        <h1
          className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-gray-700  mb-10 pt-4"
          style={{ transform: "none" }}
        >
          <span className="text-emerald-500 dark:text-primary">Contact</span> me
        </h1>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 hidden lg:block">
            <div className="h-96">
              <Lottie
                className="h-full w-full"
                animationData={contact}
                loop={true}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 md:w-[70%] md:mx-auto lg:w-[85%]">
            <form className="w-full space-y-4 text-gray-700 ">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500  dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
                data-temp-mail-org={0}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <textarea
                name=""
                placeholder="Message"
                className="w-full h-20 bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
                defaultValue={""}
              />
              <button
                type="submit"
                className="w-full py-1 text-white bg-emerald-500 dark:bg-primary rounded-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
