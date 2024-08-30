'use client';
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { IoMenu } from 'react-icons/io5';
import { HiOutlineXMark } from 'react-icons/hi2';
import NavList from './NavList';
import { useSelector } from 'react-redux';

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 767 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const mode = useSelector((state) => state.theme.mode)

  return (
    <Navbar className={`lg:mx-auto lg:w-[1150rem] md:max-w-screen-md py-3 border-b-2 border-r-0 border-l-0 border-t-0 border-orange-700 rounded-none sticky top-0 z-10 ${mode ? 'text-black bg-white' : 'text-white bg-black'}`}>
      <div className='flex items-center'>
        <Typography as='li' variant='h4' className='cursor-pointer py-1.5'>
          <Link
            href='/'
            className='flex items-center justify-center hover:text-orange-500 transition-colors'
          >
            Diwakar
          </Link>
        </Typography>
        <div className='hidden ml-72 lg:block '>
          <NavList />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiOutlineXMark className='h-6 w-6' strokeWidth={2} />
          ) : (
            <IoMenu className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
