import HomeAboutMe from "../pageSections/home/home.about-me";
import HomeBlog from "../pageSections/home/home.blog";
import HomeHeader from "../pageSections/home/home.header";
import HomeProjects from "../pageSections/home/home.projects";
import HomeTestimonial from "../pageSections/home/home.testimonial";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeAboutMe />
      <HomeProjects />
      <HomeBlog />
      <HomeTestimonial />
    </>
  );
};

export default Home;
