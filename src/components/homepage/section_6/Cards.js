import React, { useState } from 'react'
import Button from '../section_2/Button';
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`snap-x select-none p-2`}
`

const Cards = ({ key, src, text }) => {
    const [imgHovered, setImgHovered] = useState(false)
    const handleMouseEnter = () => {
        setImgHovered(true)
    }
    const handleMouseLeave = () => {
        setImgHovered(false)
    }
    return (
        <div className='mt-10 relative w-80 m-2 '>
            <div
                className='relative overflow-hidden'
                key={key}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
            >
                <img
                    className={`justify-center rounded-[30px] hover:p-2 hover:w-80 transition-transform ${imgHovered ? 'transform scale-105' : ''}`}
                    src={src}
                    alt='card' />
                <div className='absolute flex justify-between rounded-3xl hover:p-2 px-4 bottom-0 bg-gradient-to-t h-16 text-white font-bold from-zinc-900 to-transparent w-full'>
                    <div className='ml-5'>
                        {text}
                    </div>
                    <Button />
                </div>
                <div className='rounded-full'>
                    <div className='absolute top-0 left-0 right-0 bottom-0 border-8 border-solid ring-8  ring-white border-white rounded-3xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Cards