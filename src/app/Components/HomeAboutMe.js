import React from 'react'
import Image from 'next/image'

const HomeAboutMe = () => {
    return (
        <div className='flex items-center justify-center mt-36'>
            <div className='w-1/2 h-96 flex flex-col items-center justify-center'>
                <Image src="/profile3.png" alt="Profile Picture" className height={350} width={350} />
            </div>
            <div className='w-1/2 item-start  text-white text-lg font-semibold pr-32'>
                <h1 className='text-5xl mb-6 bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent '>About Me</h1>
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus nulla dicta sequi, nobis tenetur quis repellat quae. Facere, nihil?</p>
                <div className={`flex mb-8 justify-center mt-4`}>
                    <div className='w-64 h-36 pr-6'>
                        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent">10+</h1>
                        <p className=''>Years of Experience in Development</p>
                    </div>
                    <div className='w-64 h-36'>
                        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent">120+</h1>
                        <p className=''>Sucessfull Project completion</p>
                    </div>
                    <div className='w-64 h-36'>
                        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-amber-400 bg-clip-text text-transparent">60+</h1>
                        <p className=''>Global customers</p>
                    </div>
                </div>
                <button className='bg-gradient-to-r from-violet-700 to-amber-400 p-2 rounded-lg'>Download CV</button>
            </div>
        </div>
    )
}

export default HomeAboutMe