'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeAboutMe = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleDownloadCV = () => {
    setShowDialog(true);
  };

  const handleConfirmDownload = () => {
    setShowDialog(false);
    window.open('./Diwakar.pdf', '_blank', 'noopener');
  };

  const handleCancelDownload = () => {
    setShowDialog(false);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className='flex flex-wrap items-center justify-center md:mt-12 lg:mt-12 sm:mt-12'>
      <div className='lg:w-1/2 flex flex-col items-center justify-center sm:w-full'>
        <Image
          src='/profile3.png'
          alt='Profile Picture'
          className='md:w-3/4 sm:w-10/12'
          height={350}
          width={350}
        />
      </div>
      <div className='lg:w-1/2 item-start lg:text-start sm:flex sm:flex-col text-white text-lg font-semibold pr-28 sm:p-4 sm:w-full sm:pt-12 lg:mt-0 sm:text-center md:pl-28 lg:pl-0'>
        <h1 className='text-5xl mb-6 text-white w-full'>About Me</h1>
        <p className=''>
          iligent and organized Software Engineer, adept at transforming ideas
          into efficient solutions. With a robust foundation in software
          engineering, I specialize in HTML, CSS, JavaScript, React JS, Next JS,
          Bootstrap and C++
        </p>
        <div
          className={`flex md:flex-row sm:flex-col mb-8 justify-center items-center mt-4`}
        >
          <div className='w-64 h-36 md:pr-6'>
            <h1 className='text-3xl font-bold mb-2 text-white'>01+</h1>
            <p className=''>Years of Experience in Development</p>
          </div>
          <div className='w-64 h-36'>
            <h1 className='text-3xl font-bold mb-2 text-white'>10+</h1>
            <p className=''>Sucessfull Project completion</p>
          </div>
          <div className='w-64 md:h-36 sm:h-auto'>
            <h1 className='text-3xl font-bold mb-2 text-white'>10K+</h1>
            <p className=''>Hours of Coding</p>
          </div>
        </div>
        <button
          onClick={handleDownloadCV}
          className='bg-orange-600 py-2 rounded-sm text-center cursor-pointer'
        >
          Download CV
        </button>
      </div>
      {showDialog && (
        <div className='fixed text-black inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50'>
          <div className='bg-white p-6 rounded-md text-center relative'>
            <button
              onClick={handleCloseDialog}
              className='absolute top-0 right-0   
                            mt-2 mr-2 text-gray-500 hover:text-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <p className='mb-4'>Do you want to download the CV?</p>
            <button
              onClick={handleConfirmDownload}
              className='bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-md mr-2'
            >
              Yes
            </button>
            <button
              onClick={handleCancelDownload}
              className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeAboutMe;
