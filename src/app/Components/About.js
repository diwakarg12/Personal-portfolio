'use client';
import Link from 'next/link'
import styles from '@/app/about/About.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from 'react-redux';

const About = () => {
    const mode = useSelector(state => state.theme.mode);
    return (
        <div className={`sm:w-full p-2 md:p-4 sm:p-1 flex flex-col items-center justify-center ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <h1 className='flex flex-col text-center text-4xl font-semibold mb-4'>Hi, I am <span className="md:text-6xl sm:text-5xl text-orange-500">Diwakar Giri</span></h1>
            <p className='md:text-center sm:text-pretty lg:w-2/5 md:w-4/5 sm:w-full text-md font-medium mb-4'>
                Diligent and organized Software Engineer, adept at transforming ideas into efficient solutions. With a robust foundation in software engineering, I specialize in HTML, CSS, JavaScript, React JS, Next JS, Bootstrap, SASS, C++, and Java
            </p>
            <div className='flex text-xl mb-6'>
                <Link href="https://www.linkedin.com/in/diwakarg12/" target='_blank'><TiSocialLinkedinCircular className={`text-5xl font-medium ${styles.icon}`} /></Link>
                <Link href="https://www.linkedin.com/in/diwakarg12/" target='_blank'><IoLogoInstagram className={`text-5xl ${styles.icon}`} /></Link>
                <Link href="https://github.com/diwakarg12" target='_blank'><IoLogoGithub className={`text-[2.5rem]  ${styles.icon}`} /></Link>
            </div>
            <Link href="/contact" className='md:w-40 sm:w-full bg-orange-500 py-2 px-4 rounded-md hover:rounded-none font-semibold flex items-center justify-center'>Hire Me <RiSendPlaneFill className="text-2xl ml-1" /></Link>
        </div>
    )
}

export default About