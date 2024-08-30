'use client'
import React from 'react'
import Marquee from "react-fast-marquee";
import { useSelector } from 'react-redux';

const Ribbon = () => {
  const mode = useSelector(state=>state.theme.mode); 
  return (
    <div className={`w-full h-full flex items-center justify-center py-4 border-y ${mode ? 'bg-white text-black border-black' : 'bg-black text-white border-white'}`}>
      <Marquee autoFill pauseOnHover speed={100} className='flex items-center justify-center cursor-pointer'>
        <h2 className='text-2xl mx-12'>Design</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl mx-12'>Develop</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl mx-12'>Discover</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl mx-12'>Design</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl mx-12'>Develop</h2><p className='text-2xl'>✨</p>
        <h2 className='text-2xl mx-12'>Discover</h2><p className='text-2xl'>✨</p>
      </Marquee>
    </div>
  )
}

export default Ribbon