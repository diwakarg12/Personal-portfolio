'use client';
import Image from "next/image";
import { useSelector } from "react-redux";

const AboutHero = () => {
  const mode = useSelector(state=>state.theme.mode);
  return (
    <div className={`flex items-center justify-center ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <Image
        src="/portfolio1.jpeg"
        className="m-4"
        width={300}
        height={100}
        alt="Image1"
      />
      <Image
        src="/portfolio1.jpeg"
        className="m-4 sm:hidden md:block"
        width={300}
        height={100}
        alt="Image2"
      />
      <Image
        src="/portfolio1.jpeg"
        className="m-4 md:hidden lg:block"
        width={300}
        height={100}
        alt="Image3"
      />
    </div>
  );
};

export default AboutHero;
