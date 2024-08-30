'use client';
import Link from 'next/link';
import footerStyle from '../Styles/Footer.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Footer = () => {
  const mode = useSelector(state=>state.theme.mode);
  return (
    <div className={`pt-10 pb-10 w-full ${mode ? 'bg-white text-black' : 'bg-black text-white' }`}>
      <div className=' flex md:flex-row sm:flex-col items-center justify-center w-full'>
        <div className='lg:w-1/2 md:w-1/4 flex items-center justify-start lg:pl-32 md:pl-16 '>
          <Link href='/'>
            <Image src={mode ? '/logo2.png' :'/logo2.png'} alt='Logo' width={120} height={64} />
          </Link>
        </div>
        <div className='lg:w-1/2 md:w-3/4'>
          <ul className='flex md:flex-row sm:flex-col items-center justify-center'>
            <li className={footerStyle.navItem}>
              <Link href='/'>Home</Link>
            </li>
            <li className={footerStyle.navItem}>
              <Link href='/about'>About</Link>
            </li>
            <li className={footerStyle.navItem}>
              <Link href='/services'>Services</Link>
            </li>
            <li className={footerStyle.navItem}>
              <Link href='/portfolio'>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='flex flex-col items-center justify-center text-lg mt-4'>
        <p>&copy; 2024 Diwakar Giri. </p>
        <p>
          Contact:{' '}
          <a
            title='send mail'
            className='hover:underline hover:text-blue-800'
            href='mailto:diwakargiri23@gmail.com'
          >
            diwakargiri23@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
