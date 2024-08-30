'use client'
import React from 'react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image'
import { useSelector } from 'react-redux';

export const blogData = [
    {
        id: 1,
        title: "My First Blog Post",
        date: '22 jan 2024',
        img: '/blog1.jpg',
    },
    {
        id: 2,
        title: "My Second Blog Post",
        date: '22 jan 2024',
        img: '/blog1.jpg',
    },
    {
        id: 3,
        title: "My Third Blog Post",
        date: '22 jan 2024',
        img: '/blog1.jpg',
    }
]

const HomeBlog = () => {
    const mode = useSelector(state => state.theme.mode);
    return (
        <div className={`flex flex-wrap items-center justify-center pt-12 md:w-full ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>

            {blogData?.map((item) => (
                <div className={`lg:w-80 h-full lg:m-6 md:w-3/4 md:m-0 md:mb-8 border-2 ${mode ? 'border-black' : 'border-white'}`} key={item.id}>
                    <Image src={item.img} alt="blog" width={400} height={400} className="md:w-full" />
                    <div className={`border-t-2 py-4 flex justify-around items-center ${mode ? 'border-black' : 'border-white'}`}>
                        <div className="font-medium">{item.date}</div>
                        <p className="text-lg font-medium">{item.title}</p>
                        <div className="flex items-center justify-center" >
                            <Link href="/"><MdOutlineArrowOutward className="bg-white text-black rounded-lg " /></Link>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default HomeBlog