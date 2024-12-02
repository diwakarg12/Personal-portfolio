'use client'
import React from 'react';
import About from '../Components/About';
import AboutHero from '../Components/AboutHero';
import AboutNumbers from '../Components/AboutNumbers';
import AboutEducation from '../Components/AboutEducation';
import { education, experience } from './aboutdata';
import { useSelector } from 'react-redux';

const page = ({con}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mode = useSelector(state => state.theme.mode)
    return (
        <div className={`overflow-x-hidden ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <About />
            <AboutHero />
            <AboutNumbers />
            <div className='w-full flex lg:flex-row sm:flex-col items-center justify-center lg:pl-12 lg:pr-12 sm:pl-0 sm:pr-0'>
                <div className='lg:pl-20 lg:pr-20 sm:pl-0 sm:pr-0 lg:w-1/2 md:w-4/5 sm:w-full flex items-center justify-center'>
                    <AboutEducation title={"Education"} content={education} />
                </div>
                <div className='lg:pl-20 lg:pr-20 sm:pl-0 sm:pr-0 lg:w-1/2 md:w-4/5 sm:w-full flex items-center justify-center'>
                    <AboutEducation title={"Experience"} content={experience} />
                </div>
            </div>
        </div>
    )
}

export default page;