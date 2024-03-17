import Image from "next/image";
import Link from "next/link";
import { RiSendPlaneFill } from "react-icons/ri";

const HomeHero = () => {
  return (
    <div className=" w-screen flex flex-wrap items-center justify-center m-4 bg-black sm:p-0 sm:m-0 sm:mb-4">
      <div className="lg:w-1/2 item-start text-white text-lg font-semibold pl-28 pr-28 md:w-full md:text-center lg:text-start sm:pl-4 sm:pr-4">
        <h1 className="text-5xl mb-2">Hi ! 👋</h1>
        <span className="text-5xl">I am </span>
        <span className="text-5xl">Diwakar Giri</span>
        <p className="mt-6">
          I am a passionate Full Stack Developer, specializing in building web
          applications using JavaScript and TypeScript. I have experience with
          various technologies such as Html, CSS, SCSS, Bootstrap, TaiwindCss,
          ReactJS, Next.js, Express Js, MongoDB, Postman testing.{" "}
        </p>
        <div className="flex flex-col lg:items-start justify-center mt-6 md:items-center sm:pl-16 sm:pr-20 sm:items-center sm:mb-8">
          <Link
            href="/"
            className=" bg-orange-500 p-2 pl-4 pr-4 rounded-md hover:rounded-none font-semibold"
          >
            <button className="flex text-white">
              Hire Me <RiSendPlaneFill className="text-white text-2xl ml-1" />
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center md:w-full md:mt-4 lg:mt-0">
        <Image
          src="/profile3.png"
          alt="Profile Picture"
          height={300}
          width={350}
          className="w-3/4 sm:w-10/12"
        />
      </div>
    </div>
  );
};

export default HomeHero;
