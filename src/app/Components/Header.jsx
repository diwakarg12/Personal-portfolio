"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-x-24">
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-semibold"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-semibold"
      >
        <Link
          href="/about"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-semibold"
      >
        <Link
          href="/services"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-semibold"
      >
        <Link
          href="/portfolio"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Portfolio
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-semibold"
      >
        <Link
          href="/contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 767 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="lg:mx-auto lg:w-[1150rem] md:max-w-screen-md py-3 bg-transparent text-white border-b-2 border-r-0 border-l-0 border-t-0 border-orange-700 rounded-none sticky top-0 z-10">
      <div className="flex items-center">
        <Typography as="li" variant="h4" className="cursor-pointer py-1.5">
          <Link
            href="/"
            className="flex items-center justify-center hover:text-blue-500 transition-colors"
          >
            Diwakar
          </Link>
        </Typography>
        <div className="hidden ml-80 lg:block ">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiOutlineXMark className="h-6 w-6" strokeWidth={2} />
          ) : (
            <IoMenu className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
