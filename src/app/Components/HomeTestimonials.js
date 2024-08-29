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
            name: 'Ravi Kumar',
            position: 'Frontend Developer',
            message: 'Working alongside Diwakar has been incredibly enriching. His expertise in modern JavaScript frameworks and attention to detail are outstanding. He consistently delivers clean, efficient code and transforms complex designs into user-friendly interfaces. His collaborative spirit and proactive problem-solving have greatly benefited our team.'
        },
        {
            id: 2,
            name: 'Ankit Giri',
            position: 'Software Developer',
            message: 'I`ve collaborated with Diwakar on several projects, and his frontend skills are top-notch. He has a deep understanding of user experience and design, creating beautiful and intuitive interfaces. His ability to integrate frontend technologies with backend systems ensures seamless performance. Diwakar is a great communicator and team player, making valuable contributions to our development efforts.'
        },
        {
            id: 3,
            name: 'Atul Kumar',
            position: 'Digital Marketing',
            message: 'Partnering with Diwakar has been a game-changer for our digital campaigns. His ability to create visually appealing and responsive web pages has enhanced our online presence and user engagement. He understands the importance of performance and SEO, ensuring our sites are optimized for search engines. Diwakar works closely with our marketing team, providing robust and innovative web solutions that support our strategies.'
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

    const trimParagraph = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    return (

        <div className="rounded-lg flex flex-wrap items-center justify-center mt-8">
            {
                testimonials.map((testimonial) => (
                    <div className='md:w-[24rem] sm:w-11/12 mx-4 my-4 flex justify-center items-start text-start relative md:border-black' key={testimonial.id}>
                        <div className='bg-orange-400 text-black rounded-lg p-6 font-serif h-[350px]'>
                            <h1 className='text-3xl font-bold pt-2'>{testimonial.name}</h1>
                            <h2 className="text-xl font-semibold pb-2">{testimonial.position}</h2>
                            <p className="my-4">
                                {trimParagraph(testimonial.message, 250)}
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
        </div>
    );
};

export default HomeTestimonials;
