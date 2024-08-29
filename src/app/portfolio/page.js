import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TiArrowForward } from 'react-icons/ti';
import { projectData } from './projectsData';

const page = () => {

    const All = () => {
        projectData;
    }
  return (
    <div>
      {/*
      <div className='w-1/2 m-auto flex justify-between items-center py-6'>
        <div className='px-6 py-1 text-xl font-semibold border  rounded-lg bg-orange-300 text-black hover:bg-orange-700 cursor-pointer'>
          All
        </div>
        <div className='px-6 py-1 text-xl font-semibold border  rounded-lg bg-orange-400 text-black hover:bg-orange-700 cursor-pointer '>
          Html, Css and JS
        </div>
        <div className='px-6 py-1 text-xl font-semibold border  rounded-lg bg-orange-400 text-black hover:bg-orange-700 cursor-pointer '>
          React JS
        </div>
        <div className='px-6 py-1 text-xl font-semibold border  rounded-lg bg-orange-400 text-black hover:bg-orange-700 cursor-pointer '>
          Next JS
        </div>
        <div className='px-6 py-1 text-xl font-semibold border  rounded-lg bg-orange-400 text-black hover:bg-orange-700 cursor-pointer'>
          Other
        </div>
      </div>
      */}
      <div className='w-screen flex flex-wrap items-center justify-center text-center'>
        {projectData.map((data) => (
          <Link
            href={`/portfolio/${data.urltitle}`}
            key={data.id}
            className=' m-4 ml-8 mr-8 border-2 w-80 flex flex-col flex-wrap justify-center'
          >
            <div>
              <Image
                src={data.img}
                alt=''
                className='border-b-2 border-white object-cover w-full h-64 rounded-bl-none rounded-br-none cursor-pointer'
                width={200}
                height={200}
              />
            </div>
            <div className=' px-2 p-7 text-white bg-slate-700 rounded-bl-lg rounded-br-lg text-lg font-semibold text-start'>
              <div className='flex items-center justify-between '>
                <h3>{data.title}</h3>
                <div>
                  <TiArrowForward className='text-green-600 font-bold min-w-10 text-4xl cursor-pointer ' />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
