import React, { useState } from 'react'
import Button from './Button';

const Cards = ({ src_logo, src_bg, text, price, name }) => {
    const [imgHovered, setImgHovered] = useState(false)
    const handleMouseEnter = () => {
        setImgHovered(true)
    }
    const handleMouseLeave = () => {
        setImgHovered(false)
    }
    return (
        <div className='relative w-[450px]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='relative overflow-hidden'>
                <img className='absolute w-auto h-7 mt-10 ml-10' src={src_logo} alt="" />
                <img className={`justify-center rounded-[30px] hover:p-3 transition-transform ${imgHovered ? 'transform scale-105' : ''}`} src={src_bg} alt='card' />
                <div className='absolute rounded-3xl text-lg hover:p-2 px-4 bottom-0 bg-gradient-to-t h-56 text-white font-bold from-zinc-900 to-transparent w-full'>
                    <div className='font-bold px-4'>{text}</div>
                    <div className='mb-4 text-sm font-medium px-4'>{price}</div>
                    <div className='px-4'><Button name={name} /></div>
                </div>
                <div className='rounded-full'>
                    <div className='absolute top-0 left-0 right-0 bottom-0 border-8 border-solid ring-8  ring-white border-white rounded-3xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Cards