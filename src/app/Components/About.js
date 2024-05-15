import Link from 'next/link'
import styles from '@/app/about/About.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

const About = () => {
    return (
        <div className='sm:w-full bg-slate-800 text-slate-400 p-2 m-2 flex flex-col items-center justify-center'>
            <h1 className='flex flex-col text-center text-4xl font-semibold mb-4'>Hi, I am <span className="text-6xl text-orange-500">Diwakar Giri</span></h1>
            <p className='text-center lg:w-2/5 md:w-4/5 sm:w-full text-md font-medium mb-4'>
                Diligent and organized Software Engineer, adept at transforming ideas into efficient solutions. With a robust foundation in software engineering, I specialize in HTML, CSS, JavaScript, React JS, Next JS, Bootstrap, SASS, C++, and Java
            </p>
            <div className='flex text-xl mb-6'>
                <Link href="" target='_blank'><TiSocialLinkedinCircular className={`bg-orange-500 ${styles.icon}`} /></Link>
                <Link href="" target='_blank'><IoLogoInstagram className={`bg-gradient-to-r from-violet-700 to-amber-400 ${styles.icon}`} /></Link>
                <Link href="" target='_blank'><TiSocialFacebookCircular className={`bg-gradient-to-r from-violet-700 to-amber-400 ${styles.icon}`} /></Link>
            </div>
            <Link href="/content" className=' bg-orange-500 py-2 px-4 rounded-md hover:rounded-none font-semibold flex items-center justify-center'>Hire Me <RiSendPlaneFill className="text-white text-2xl ml-1" /></Link>
        </div>
    )
}

export default About