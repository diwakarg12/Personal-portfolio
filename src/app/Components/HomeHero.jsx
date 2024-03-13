import Image from 'next/image'
import Link from 'next/link'
import { RiSendPlaneFill } from "react-icons/ri";

const HomeHero = () => {
    return (
        <div className=' w-screen flex items-center justify-center m-4 bg-black '>
            <div className='w-1/2 item-start  text-white text-lg font-semibold pl-28 pr-28'>
                <h1 className='text-5xl mb-2'>Hi ! 👋</h1>
                <span className='text-5xl'>I am </span><span className="bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent text-5xl">Diwakar Giri</span>
                <p className="mt-6">I am a passionate Full Stack Developer, specializing in building web applications using JavaScript and TypeScript. I have experience with various technologies such as Html, CSS, SCSS, Bootstrap, TaiwindCss, ReactJS, Next.js, Express Js, MongoDB, Postman testing.  </p>
                <div className="flex flex-col items-start justify-center mt-6"><Link href="/" className=' bg-orange-500 p-2 pl-4 pr-4 rounded-md hover:rounded-none font-semibold'><button className='flex text-white'>Hire Me <RiSendPlaneFill className="text-white text-2xl ml-1" /></button></Link></div>
            </div>
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <Image src="/profile3.png" alt="Profile Picture" className height={350} width={350} />
            </div>
        </div>
    )
}

export default HomeHero