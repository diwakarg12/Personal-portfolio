'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TiArrowForward } from "react-icons/ti";
import { projectData } from './projectsData';

const page = () => {

    const handleClick = (id) => {
        cosnt
    }
    return (
        <div className=''>
            <h1 className='text-center text-4xl font-medium mt-4 mb-4'>My PortFolio</h1>
            <div className='w-screen flex flex-wrap items-center justify-center text-center'>
                {projectData.map((data) => (
                    <div key={data.id} className=' m-4 ml-8 mr-8 border-2 rounded-lg w-96 flex flex-col flex-wrap justify-center'>
                        <Link href={`/portfolio/${data.id}`}><Image src={data.img} alt="" className='border-b-2 border-white object-cover w-full h-64 rounded-lg rounded-bl-none rounded-br-none cursor-pointer' width={200} height={200} /></Link>
                        <div className='p-2 h-36 text-white bg-slate-700 rounded-bl-lg rounded-br-lg text-lg font-semibold text-start'>
                            <small className=''>{data.id}</small>
                            <div className='flex items-center justify-between mt-4 '>
                                <h3>{data.title}</h3>
                                <Link href={`/portfolio/${data.id}`}><TiArrowForward className='text-green-600 font-bold min-w-10 text-4xl cursor-pointer ' onClick={() => handleClick(data.id)} /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page