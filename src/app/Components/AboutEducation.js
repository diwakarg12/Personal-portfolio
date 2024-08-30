'use client';
import { useSelector } from 'react-redux'

const AboutEducation = ({ title, content }) => {
    const mode = useSelector(state=>state.theme.mode);
    return (
        <div className={`w-full p-2 ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <h1 className='text-3xl font-semibold pt-2 pb-4'>{title}</h1>
            {
                content.map((item, index) => (
                    <div key={index}>
                        <h2 className='text-xl font-semibold pb-2 pt-4'>{item.organisation}</h2>
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