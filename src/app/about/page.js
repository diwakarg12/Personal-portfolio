import React from 'react';
import About from '../Components/About';
import AboutHero from '../Components/AboutHero';
import AboutNumbers from '../Components/AboutNumbers';
import AboutEducation from '../Components/AboutEducation';
import { education, experience } from './aboutdata';
import AboutFollow from '../Components/AboutFollow';
const page = () => {

    return (
        <div className='bg-slate-800 p-1 overflow-x-hidden'>
            <About />
            <AboutHero />
            <AboutNumbers />
            <div className='p-2 w-full flex items-center justify-center pl-12 pr-12 mb-10 '>
                <div className='p-2 pl-24 pr-24 w-1/2 flex items-center justify-center'>
                    <AboutEducation title={"Education"} content={education} />
                </div>
                <div className='p-2 pl-24 pr-24 w-1/2 flex items-center justify-center'>
                    <AboutEducation title={"Experience"} content={experience} />
                </div>
            </div>
            <AboutFollow />
        </div>
    )
}

export default page;