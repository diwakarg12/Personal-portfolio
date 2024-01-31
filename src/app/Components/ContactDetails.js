import React from 'react'

const ContactDetails = ({ title, content, icon }) => {
    return (
        <div className='w-72 h-60 flex flex-col items-center justify-center bg-slate-800 p-8 text-white text-xl font-medium border border-green-500 rounded-xl ml-6 mr-6 mt-4 mb-8'>
            {icon}
            <h2 className='text-2xl font-medium mb-2 mt-2'>{title}</h2>
            <p className='text-center'>{content}</p>
        </div>
    )
}

export default ContactDetails