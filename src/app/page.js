
import HomeAboutMe from "./Components/HomeAboutMe";
import HomeBlog from "./Components/HomeBlog";
import HomeHero from "./Components/HomeHero";
import HomeTestimonials from "./Components/HomeTestimonials";
import HomeProjects from "./Components/HomeProjects";
import Ribbon from "./Components/Ribbon";

export default function page() {
  return (
    <div className="bg-black text-slate-400 sm:overflow-x-hidden border-2 sm:text-center">
      <HomeHero />
      <Ribbon />
      <HomeAboutMe />
      <HomeProjects />
      <HomeTestimonials />
      <HomeBlog />
    </div>
  );
}
