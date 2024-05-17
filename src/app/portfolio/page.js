import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TiArrowForward } from "react-icons/ti";
import { projectData } from './projectsData';

const page = () => {
    return (
        <div className=''>
            <h1 className='text-start mx-auto text-4xl font-medium pt-4 mb-4 border-b w-3/5 md:block sm:hidden '>Here are some of the projects which i have worked </h1>
            <div className='w-screen flex flex-wrap items-center justify-center text-center'>
                {projectData.map((data) => (
                    <Link href={`/portfolio/${data.urltitle}`} key={data.id} className=' m-4 ml-8 mr-8 border-2 w-96 flex flex-col flex-wrap justify-center'>
                        <div><Image src={data.img} alt="" className='border-b-2 border-white object-cover w-full h-64 rounded-bl-none rounded-br-none cursor-pointer' width={200} height={200} /></div>
                        <div className=' px-2 p-7 text-white bg-slate-700 rounded-bl-lg rounded-br-lg text-lg font-semibold text-start'>
                            <div className='flex items-center justify-between '>
                                <h3>{data.title}</h3>
                                <div><TiArrowForward className='text-green-600 font-bold min-w-10 text-4xl cursor-pointer ' /></div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default page