import HomeAboutMe from "../pageSections/home/home.about-me";
import HomeBlog from "../pageSections/home/home.blog";
import HomeContact from "../pageSections/home/home.contact";
import HomeHeader from "../pageSections/home/home.header";
import HomeProjects from "../pageSections/home/home.projects";
import HomeSkills from "../pageSections/home/home.skills";
import HomeTestimonial from "../pageSections/home/home.testimonial";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeAboutMe />
      <HomeProjects />
      <HomeSkills />
      <HomeBlog />
      <HomeTestimonial />
      <HomeContact />
    </div>
  );
};

export default Home;
