import React from 'react'
import styles from '@/app/about/About.module.css';

const AboutNumbers = () => {
    return (
        <div className={`flex md:flex-row sm:flex-col m-4 mb-8 mt-12 justify-center text-center`}>
            <div className='md:w-60 sm:w-full h-36 p-8 border-gray-100 md:border-r sm:border-none ml-4 mr-4'>
                <h1 className="text-4xl font-bold mb-2 text-white">10+</h1>
                <p className='text-slate-400 font-semibold'>Years of Experience in Development</p>
            </div>
            <div className='md:w-60 sm:w-full h-36 p-8 border-r-gray-100 md:border-r sm:border-none ml-4 mr-4'>
                <h1 className="text-4xl font-bold mb-2 text-white">120+</h1>
                <p className='text-slate-400 font-semibold'>Sucessfull Project completion</p>
            </div>
            <div className='md:w-60 sm:w-full h-36 p-8 ml-4 mr-4'>
                <h1 className="text-4xl font-bold mb-2 text-white">60+</h1>
                <p className='text-slate-400 font-semibold'>Global customers</p>
            </div>
        </div>
    )
}

export default AboutNumbers