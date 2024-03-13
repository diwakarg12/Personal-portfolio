"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeTestimonial = () => {
    
    

    return (
        <div className='flex items-center justify-center mt-12'>
            <div className='w-1/2 flex items-center justify-center'>
                {/* Assuming there's an 'image' property in your testimonial object */}
                <Image src={currentTestimonial.image} className='' width={200} height={300} />
            </div>
            <div className='w-1/2 justify-center pr-40'>
                <h1>Testimonial</h1>
                <p>{currentTestimonial.message}</p>
                <h3>{`By ${currentTestimonial.name}`}</h3>
                <h4>{currentTestimonial.position}</h4>
                <div className='flex items-center justify-center'>
                    <FaArrowCircleLeft onClick={handlePrevTestimonial} className='cursor-pointer' />
                    <FaArrowCircleRight onClick={handleNextTestimonial} className='cursor-pointer ml-4' />
                </div>
            </div>
        </div>
    );
};


export default HomeTestimonial