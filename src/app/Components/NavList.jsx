'use client';
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

export default function NavList() {
    const mode = useSelector((state)=>state.theme.mode);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme());
    }
  return (
    <ul className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-x-20`}>
      <Typography
        as='li'
        variant='h5'
        color={mode ? 'text-white' : 'text-black'}
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
        color={mode ? 'text-white' : 'text-black'}
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
        color={mode ? 'text-white' : 'text-black'}
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
        color={mode ? 'text-white' : 'text-black'}
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
        color={mode ? 'text-white' : 'text-black'}
        className='p-1 font-semibold'
      >
        <Link
          href='/contact'
          className='flex items-center hover:text-orange-500 transition-colors'
        >
          Contact
        </Link>
      </Typography>
       <div className={`flex items-center hover:text-orange-500 transition-colors cursor-pointer ${mode ? 'text-black':'text-white'}`} onClick={handleToggle}>
          {
            mode ? <MdDarkMode title='Dark Mode' className="size-6" /> : <MdLightMode title='Light Mode' className="size-6" />
          }
       </div>
    </ul>
  );
}