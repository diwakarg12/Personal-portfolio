import Link from 'next/link'
import styles from '@/app/about/About.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";



const About = () => {
    return (
        <div className='bg-slate-800 text-slate-400 p-2 m-2 flex flex-col items-center justify-center'>
            <h1 className='flex flex-col text-center text-4xl font-semibold mb-4'>Hi, I am <span className="bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent text-5xl" >Diwakar Giri</span></h1>
            <p className='text-center w-2/5 text-md font-medium mb-4'>
                Diligent and organized Software Engineer, adept at transforming ideas into efficient solutions. With a robust foundation in software engineering, I specialize in HTML, CSS, JavaScript, React JS, Next JS, Bootstrap, SASS, C++, and Java
            </p>
            <div className='flex text-xl mb-6'>
                <TiSocialLinkedinCircular className={`bg-gradient-to-r from-violet-700 to-amber-400 ${styles.icon}`} />
                <IoLogoInstagram className={`bg-gradient-to-r from-violet-700 to-amber-400 ${styles.icon}`} />
                <TiSocialFacebookCircular className={`bg-gradient-to-r from-violet-700 to-amber-400 ${styles.icon}`} />
            </div>
            <Link href="/" className=' bg-orange-500 p-2 pl-4 pr-4 rounded-md hover:rounded-none font-semibold'><button className='flex text-white'>Hire Me <RiSendPlaneFill className="text-white text-2xl ml-1" /></button></Link>
        </div>
    )
}

export default About