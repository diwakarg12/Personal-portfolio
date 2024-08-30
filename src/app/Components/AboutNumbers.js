'use client';
import React from 'react';
import styles from '@/app/about/About.module.css';
import { useSelector } from 'react-redux';

const AboutNumbers = () => {
  const mode = useSelector(state=>state.theme.mode);
  return (
    <div
      className={`flex md:flex-row sm:flex-col pb-8 pt-12 justify-center text-center ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      <div className='md:w-60 sm:w-full h-36 p-8 border-gray-100 md:border-r sm:border-none ml-4 mr-4'>
        <h1 className='text-4xl font-bold mb-2'>1+</h1>
        <p className='font-semibold'>
          Year of Experience in Development
        </p>
      </div>
      <div className='md:w-60 sm:w-full h-36 p-8 border-r-gray-100 md:border-r sm:border-none ml-4 mr-4'>
        <h1 className='text-4xl font-bold mb-2'>10+</h1>
        <p className='text-slate-400 font-semibold'>
          Sucessfull Project completion
        </p>
      </div>
      <div className='md:w-60 sm:w-full h-36 p-8 ml-4 mr-4'>
        <h1 className='text-4xl font-bold mb-2'>10K+</h1>
        <p className='text-slate-400 font-semibold'>Hours of Coding</p>
      </div>
    </div>
  );
};

export default AboutNumbers;
