import React from 'react'

const ContactDetails = ({ title, content, icon }) => {
    return (
        <div className='w-72 sm:h-auto md:h-60 flex flex-col items-center justify-center bg-slate-800 md:p-8 sm:p-6 text-white text-xl font-medium border border-white rounded-xl md:ml-6 md:mr-6 md:mt-4 md:mb-8 sm:m-auto sm:mt-4 sm:mb-8'>
            {icon}
            <h2 className='text-2xl font-medium mb-2 mt-2'>{title}</h2>
            <p className='text-center'>{content}</p>
        </div>
    )
}

export default ContactDetails