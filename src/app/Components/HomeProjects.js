import Image from 'next/image';
import Link from 'next/link';
import { TiArrowForward } from "react-icons/ti";

const HomeProjects = () => {
    return (
        <div className='flex justify-center mt-8 mb-8'>
            <div className='w-1/2 p-12 relative'>
                <h1 className='text-5xl bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent font-bold mb-6'>Selected Projects</h1>
                <p className='text-lg font-medium mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam illum asperiores optio expedita itaque consectetur temporibus dolorem adipisci laborum!</p>
                <Link href=""><Image src="/hotstar.jpg" width={600} height={300} className='opacity-80' /></Link>
                <div className='flex bg-black items-center justify-between w-[82%] mt-4 pl-4 pr-4 absolute bottom-20 bg-opacity-20' style={{ backdropFilter: "blur(15px)" }}>
                    <h3 className='text-black font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto commodi voluptatibus dolorem vel corrupti illoa! Aperiam labore dolores ratione culpa reiciendis, quam et rerum dicta animi odio iste?</h3>
                    <Link href=""><TiArrowForward className='text-green-600 font-bold min-w-10 text-3xl cursor-pointer ' /></Link>
                </div>
            </div>
            <div className='w-1/2 p-12 '>
                <div className='relative'>
                    <Image src="/whatsapp.jpg" width={500} height={100} className='mb-2 h-72 w-11/12 
                object-cover' />
                    <div className='flex bg-white backdrop-blur-xl bg-opacity-5 items-center justify-between w-11/12 mt-4 pl-2 pr-4 absolute bottom-0 '>
                        <h3 className='text-slate-200 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto commodi voluptatibus dolorem vel corrupti illo a! Aperiam labore dolores ratione culpa reiciendis, quam et rerum dicta animi odio iste?</h3>
                        <Link href=""><TiArrowForward className='text-green-600 font-bold min-w-10 text-3xl cursor-pointer ' /></Link>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/ecommerce.webp" width={500} height={100} className='mb-2 h-72 w-11/12 object-cover ' />
                    <div className='flex items-center justify-between w-11/12 mt-4 pl-2 pr-4 absolute bottom-0 backdrop-blur-xl bg-opacity-5'>
                        <h3 className='text-black font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto commodi voluptatibus dolorem vel corrupti illo a! Aperiam labore dolores ratione culpa reiciendis, quam et rerum dicta animi odio iste?</h3>
                        <Link href=""><TiArrowForward className='text-green-600 font-bold min-w-10 text-3xl cursor-pointer ' /></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeProjects