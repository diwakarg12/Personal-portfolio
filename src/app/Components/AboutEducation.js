import React from 'react'

const AboutEducation = ({ title, content }) => {
    return (
        <div className='w-full p-2'>
            <h1 className='text-3xl font-semibold mt-2 mb-4 text-white'>{title}</h1>
            {
                content.map((item, index) => (
                    <div key={index}>
                        <h2 className='text-xl font-semibold mb-2 mt-4'>{item.organisation}</h2>
                        <div className='flex items-center justify-between mb-2 text-slate-400'>
                            <p className='text-lg font-medium'>{item.position}</p>
                            <p className='text-lg font-medium'>{item.duration}</p>
                        </div>
                        <hr className='' />
                    </div>
                ))
            }
        </div>
    )
}

export default AboutEducation