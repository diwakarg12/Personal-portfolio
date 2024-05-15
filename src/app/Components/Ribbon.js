import React from 'react'
import Marquee from "react-fast-marquee";

const Ribbon = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-4 bg-white text-black">
      <Marquee autoFill pauseOnHover speed={100} className='flex items-center justify-center cursor-pointer'>
        <h2 className='text-2xl ml-12 mr-12'>Design</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl ml-12 mr-12'>Develop</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl ml-12 mr-12'>Discover</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl ml-12 mr-12'>Design</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl ml-12 mr-12'>Develop</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl ml-12 mr-12'>Discover</h2><p className='text-2xl'>✨</p>
      </Marquee>
    </div>
  )
}

export default Ribbon