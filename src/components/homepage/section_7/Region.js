import React from 'react'

const Region = ({ src }) => {
    return (
        <div className='p-10 mt-5'>
            <div className='text-lg font-bold pb-4'>Current Region / Language</div>
            <div className='flex'>
                <img className='w-8 h-8 rounded-full mr-2 border' src={src} alt="united states Logo" />
                <div>United States / English</div>
                <div className='hover:text-red-500 ml-2 underline'>Change</div>
            </div>
        </div>
    )
}

export default Region