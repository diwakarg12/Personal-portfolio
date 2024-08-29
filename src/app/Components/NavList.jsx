'use client';
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import React from 'react';

export default function NavList() {
    const [mode, setMode] = React.useState(false);

    const toggleMode = () => {
        setMode(prevMode => !prevMode);
    }
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-x-20'>
      <Typography
        as='li'
        variant='h5'
        color='white'
        className='p-1 font-semibold'
      >
        <Link
          href='/'
          className='flex items-center hover:text-orange-500 transition-colors'
        >
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='h5'
        color='white'
        className='p-1 font-semibold'
      >
        <Link
          href='/about'
          className='flex items-center hover:text-orange-500 transition-colors'
        >
          About
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='h5'
        color='white'
        className='p-1 font-semibold'
      >
        <Link
          href='/services'
          className='flex items-center hover:text-orange-500 transition-colors'
        >
          Services
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='h5'
        color='white'
        className='p-1 font-semibold'
      >
        <Link
          href='/portfolio'
          className='flex items-center hover:text-orange-500 transition-colors'
        >
          Projects
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='h5'
        color='white'
        className='p-1 font-semibold'
      >
        <Link
          href='/contact'
          className='flex items-center hover:text-orange-500 transition-colors'
        >
          Contact
        </Link>
      </Typography>
       <div className='flex items-center hover:text-orange-500 transition-colors cursor-pointer' onClick={toggleMode}>
          {
            mode ? <MdDarkMode className="size-6" /> : <MdLightMode className="size-6" />
          }
       </div>
    </ul>
  );
}