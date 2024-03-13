import React from 'react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image'

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
    return (
        <div className='flex items-center justify-center mt-12'>
            {blogData?.map((item) => (
                <div className="w-96 h-full m-6" key={item.id}>
                    <Image src={item.img} alt="blog" width={400} height={400} className="rounded-lg" />
                    <small className="ml-1 font-medium">{item.date}</small>
                    <div className=" w-full mt-6 flex items-center justify-start">
                        <p className="w-2/3 text-lg font-medium">{item.title}</p>
                        <div className="w-1/3 flex items-center justify-center pl-20" >
                            <Link href="/"><MdOutlineArrowOutward className="bg-white text-black rounded-lg " /></Link>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default HomeBlog