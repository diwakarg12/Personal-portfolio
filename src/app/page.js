import HomeAboutMe from "./Components/HomeAboutMe";
import HomeBlog from "./Components/HomeBlog";
import HomeHero from "./Components/HomeHero";
import HomeTestimonials from "./Components/HomeTestimonials";
import HomeProjects from "./Components/HomeProjects";
import Ribbon from "./Components/Ribbon";

export default function page() {
  return (
    <div className={`sm:overflow-x-hidden sm:text-center`}>
      <HomeHero />
      <Ribbon />
      <HomeAboutMe />
      <HomeProjects />
      <HomeTestimonials />
      <HomeBlog />
    </div>
  );
}
