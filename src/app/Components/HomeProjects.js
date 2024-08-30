'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TiArrowForward } from 'react-icons/ti';
import { useSelector } from 'react-redux';

const HomeProjects = () => {
  const mode = useSelector(state=>state.theme.mode);
  return (
    <div className={`flex flex-wrap justify-center py-8 md:items-center lg:items-start ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className='lg:w-1/2 lg:items-start lg:p-12 relative md:w-full md:items-center md:p-0'>
        <h1 className='text-5xl font-bold mb-6'>
          Selected Projects
        </h1>
        <p className='text-lg font-medium mb-16 mr-4'>
          Here are some sample projects to show, to get all the projects, please
          visit projects section.
        </p>
        <Link href='/portfolio'>
          <Image
            src='/hotstar.jpg'
            width={600}
            height={300}
            alt=''
            className='opacity-80 sm:w-11/12 sm:mx-auto md:w-full md:mx-0 shadow-2xl'
          />
        </Link>
        <div
          className='flex bg-black items-center justify-between lg:w-[82%] mt-4 pl-4 pr-4 absolute lg:bottom-20 bg-opacity-20 md:bottom-12 md:w-[78%] sm:hidden md:visible'
          style={{ backdropFilter: 'blur(15px)' }}
        >
          {/* <h3 className='text-black font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            architecto commodi voluptatibus dolorem vel corrupti illoa! Aperiam
            labore dolores ratione culpa reiciendis, quam et rerum dicta animi
            odio iste?
          </h3> */}
          <Link href=''>
            <TiArrowForward className='text-green-600 font-bold min-w-10 text-3xl cursor-pointer ' />
          </Link>
        </div>
      </div>
      <div className='lg:w-1/2 md:p-12 sm:p-4 md:w-full '>
        <div className='relative md:w-[97%] lg:full'>
          <Link href='/portfolio'>
            <Image
              src='/whatsapp.jpg'
              width={500}
              height={100}
              alt=''
              className='mb-2 md:h-72 sm:h-48 md:w-[94%] sm:w-full object-cover'
            />
          </Link>
          <div className='flex bg-white backdrop-blur-xl bg-opacity-5 items-center justify-between w-11/12 mt-4 pl-2 pr-4 absolute bottom-0 md:visible sm:hidden'>
            {/* <h3 className='text-slate-200 font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              architecto commodi voluptatibus dolorem vel corrupti illo a!
              Aperiam labore dolores ratione culpa reiciendis, quam et rerum
              dicta animi odio iste?
            </h3> */}
            <Link href=''>
              <TiArrowForward className='text-green-600 font-bold min-w-10 text-3xl cursor-pointer ' />
            </Link>
          </div>
        </div>
        <div className='relative sm:w-full md:w-[97%] lg:w-full'>
          <Link href='/portfolio'>
            <Image
              src='/ecommerce.webp'
              width={500}
              height={100}
              alt=''
              className='mb-2 md:h-72 sm:h-auto md:w-11/12 sm:full object-cover '
            />
          </Link>
          <div className='flex items-center justify-between w-11/12 mt-4 pl-2 pr-4 absolute bottom-0 backdrop-blur-xl bg-opacity-5 md:visible sm:hidden'>
            {/* <h3 className='text-black font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              architecto commodi voluptatibus dolorem vel corrupti illo a!
              Aperiam labore dolores ratione culpa reiciendis, quam et rerum
              dicta animi odio iste?
            </h3> */}
            <Link href=''>
              <TiArrowForward className='text-green-600 font-bold min-w-10 text-3xl cursor-pointer ' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
