import React from 'react'
import Image from 'next/image'

const HomeAboutMe = () => {
    return (
        <div className='flex flex-wrap items-center justify-center md:mt-12 lg:mt-40 sm:mt-24'>
            <div className='lg:w-1/2 flex flex-col items-center justify-center sm:w-full border-2'>
                <Image src="/profile3.png" alt="Profile Picture" className="md:w-3/4 sm:w-10/12" height={350} width={350} />
            </div>
            <div className='lg:w-1/2 item-start lg:text-start sm:flex sm:flex-col text-white text-lg font-semibold pr-28 sm:p-4 sm:w-full sm:pt-12 lg:mt-0 sm:text-center md:pl-28 lg:pl-0'>
                <h1 className='text-5xl mb-6 text-white w-full'>About Me</h1>
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus nulla dicta sequi, nobis tenetur quis repellat quae. Facere, nihil?</p>
                <div className={`flex md:flex-row sm:flex-col mb-8 justify-center items-center mt-4`}>
                    <div className='w-64 h-36 md:pr-6'>
                        <h1 className="text-3xl font-bold mb-2 text-white">10+</h1>
                        <p className=''>Years of Experience in Development</p>
                    </div>
                    <div className='w-64 h-36'>
                        <h1 className="text-3xl font-bold mb-2 text-white">120+</h1>
                        <p className=''>Sucessfull Project completion</p>
                    </div>
                    <div className='w-64 md:h-36 sm:h-auto'>
                        <h1 className="text-3xl font-bold mb-2 text-white">60+</h1>
                        <p className=''>Global customers</p>
                    </div>
                </div>
                <button className='bg-orange-600'>Download CV</button>
            </div>
        </div>
    )
}

export default HomeAboutMe