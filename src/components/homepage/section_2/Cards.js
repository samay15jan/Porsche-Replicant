import React, { useState }from 'react'
import Button from './Button';
import LazyLoad from 'react-lazyload';

const Cards = ({ src, text }) => {
    const [imgHovered, setImgHovered] = useState(false)
    const handleMouseEnter = () => {
        setImgHovered(true)
    }
    const handleMouseLeave = () => {
        setImgHovered(false)
    }
    return (
    <div className='mt-10  relative w-72 m-5'>
        <div
        className={`w-72 rounded-xl hover:w-80 transition-transform ${
            imgHovered ? 'transform scale-105' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <LazyLoad >
                <img className='w-72 rounded-xl justify-center' src={src} alt='card' loading='lazy' />
            </LazyLoad> 
        </div>
        <div className='absolute flex justify-between rounded-xl px-8 bottom-0 bg-gradient-to-t h-20 text-white font-bold from-zinc-900 to-transparent w-full'>
            <div className='mb-4'>{text}</div>
            <Button />
        </div>
    </div>
  )
}

export default Cards