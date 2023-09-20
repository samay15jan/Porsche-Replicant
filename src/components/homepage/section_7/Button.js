import React from 'react'

const Button = ({ text, title, desc }) => {
    return (
        <div className='mr-10'>
            <div className='text-lg font-bold mb-2'>{title}</div>
            <div>{desc}</div>
            <button className='hover:bg-slate-200 text-black bg-white rounded-md px-28 py-4 mt-8'>
                {text}
            </button>
        </div>
    )
}

export default Button