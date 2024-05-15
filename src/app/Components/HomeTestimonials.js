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
        // {
        //     id: 4,
        //     name: 'Alice Williams',
        //     position: 'Product Manager',
        //     message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     image: '/portfolio1.jpeg'
        // },
        // {
        //     id: 5,
        //     name: 'Charlie Brown',
        //     position: 'Designer',
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
        //     image: '/portfolio2.jpg',
        // },
        // {
        //     id: 6,
        //     name: 'Eva Davis',
        //     position: 'Sales Representative',
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
        //     image: '/portfolio3.jpg'
        // },
        // {
        //     id: 7,
        //     name: 'Samuel Turner',
        //     position: 'Software Engineer',
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!",
        //     image: '/portfolio1.jpg'
        // },
        // {
        //     id: 8,
        //     name: 'Grace Mitchell',
        //     position: 'HR Manager',
        //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!',
        //     image: '/portfolio2.jpg'
        // },
        // {
        //     id: 9,
        //     name: 'Daniel White',
        //     position: 'Finance Analyst',
        //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!',
        //     image: '/portfolio3.jpg'
        // },
        // {
        //     id: 10,
        //     name: 'Olivia Taylor',
        //     position: 'Customer Support',
        //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ea cum, modi harum quis asperiores nisi labore eveniet ab, doloremque accusantium debitis rem placeat, numquam voluptatum est similique necessitatibus cumque ad! Distinctio debitis quia possimus, fugiat placeat suscipit sit! Veniam sequi possimus perspiciatis tempore quae et! Amet, dolor blanditiis!',
        // },
    ];

    return (

        <div className="rounded-lg flex flex-wrap items-center justify-center mt-8">
            {
                testimonials.map((testimonial) => (
                    <div className='md:w-[26rem] sm:w-11/12 mx-4 my-4 flex justify-center items-start text-start relative md:border-black' key={testimonial.id}>
                        <div className='bg-orange-400 text-black rounded-lg p-6 font-serif'>
                            <h1 className='text-3xl font-bold pt-2'>{testimonial.name}</h1>
                            <h2 className="text-xl font-semibold pb-2">{testimonial.position}</h2>
                            <p className="my-4">
                                {testimonial.message}
                            </p>
                            <div className='flex justify-start my-6'>
                                <IoMdStar className='text-green-600 text-3xl' />
                                <IoMdStar className='text-green-600 text-3xl' />
                                <IoMdStar className='text-green-600 text-3xl' />
                                <IoMdStar className='text-green-600 text-3xl' />
                                <IoMdStar className='text-green-600 text-3xl' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default HomeTestimonials;
