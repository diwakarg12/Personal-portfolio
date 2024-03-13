"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";


const HomeTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
            image: '/portfolio1.jpeg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'CTO',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
            image: '/portfolio2.jpeg'
        },
        {
            id: 3,
            name: 'Bob Johnson',
            position: 'Marketing Manager',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
            image: '/portfolio3.jpeg'
        },
        {
            id: 4,
            name: 'Alice Williams',
            position: 'Product Manager',
            message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: '/portfolio1.jpeg'
        },
        {
            id: 5,
            name: 'Charlie Brown',
            position: 'Designer',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
            image: '/portfolio2.jpg',
        },
        {
            id: 6,
            name: 'Eva Davis',
            position: 'Sales Representative',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
            image: '/portfolio3.jpg'
        },
        {
            id: 7,
            name: 'Samuel Turner',
            position: 'Software Engineer',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
            image: '/portfolio1.jpg'
        },
        {
            id: 8,
            name: 'Grace Mitchell',
            position: 'HR Manager',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!',
            image: '/portfolio2.jpg'
        },
        {
            id: 9,
            name: 'Daniel White',
            position: 'Finance Analyst',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!',
            image: '/portfolio3.jpg'
        },
        {
            id: 10,
            name: 'Olivia Taylor',
            position: 'Customer Support',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!',
            image: '/portfolio1.jpg'
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (

        <div className="rounded-lg flex items-center justify-center mt-8 mr-32">
            <FaArrowCircleLeft onClick={handlePrevTestimonial} className='cursor-pointer text-white text-4xl absolute right-[80rem] hover:text-green-600' />
            {/* Left Section */}
            <div className='border-4 rounded-md border-yellow-800 h-[28rem] w-1/3 flex items-center justify-center p-8 relative'>
                <div className="p-6 bg-black w-48 flex flex-col items-center justify-center absolute left-[-20%]">
                    <Image
                        src={currentTestimonial.image}
                        width={200} height={100}
                        alt="Client"
                        className="rounded w-40 h-40 object-cover"
                    />
                    <div className="text-white mt-2 ml-1">
                        <h1 className='text-xl font-semibold '>{currentTestimonial.name}</h1>
                        <h4 className='font-normal'>{currentTestimonial.position}</h4>
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-4 w-[30rem] bg-black absolute right-[-50%] ">
                    <div className='bg-orange-600 rounded-lg p-6'>
                        <h2 className="text-white text-xl font-semibold">Our Clients</h2>
                        <h1 className='text-white text-3xl font-bold'>FEEDBACK</h1>
                        <p className="text-white">
                            {currentTestimonial.message}
                        </p>
                        <div className='flex items-start justify-center w-2/3 px-2 my-2 bg-white rounded-full'>
                            <IoMdStar className='text-green-600 m-1 text-3xl' />
                            <IoMdStar className='text-green-600 m-1 text-3xl' />
                            <IoMdStar className='text-green-600 m-1 text-3xl' />
                            <IoMdStar className='text-green-600 m-1 text-3xl' />
                            <IoMdStar className='text-green-600 m-1 text-3xl' />
                        </div>
                    </div>
                    {/* Add star icons or other relevant content */}
                </div>
            </div>
            <FaArrowCircleRight onClick={handleNextTestimonial} className='cursor-pointer text-white text-4xl absolute left-[80rem] hover:text-green-600' />
        </div >
    );
};

export default HomeTestimonials;
