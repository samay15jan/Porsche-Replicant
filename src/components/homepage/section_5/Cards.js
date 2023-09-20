import React, { useState } from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Cards = ({ key, productImage, productName, productDescription, productCategory }) => {
    const [imgHovered, setImgHovered] = useState(false)
    const handleMouseEnter = () => {
        setImgHovered(true)
    }
    const handleMouseLeave = () => {
        setImgHovered(false)
    }
    return (
        <div className='snap-x select-none p-2'>
            <div
                className='m-5 w-72 rounded-2xl hover:bg-gray-200 snap-center'
                key={key}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={`w-72 transition-transform ${imgHovered ? 'transform scale-105' : ''}`}
                    src={productImage}
                    alt='product'
                />
                <div
                    className='text-md font-semibold my-2 '>
                    {productName}
                </div>
                <div
                    className='text-sm'>
                    {productDescription}
                </div>
                <div className='flex z-[500px]'>
                    <div className='hover:bg-gray-300 text-sm mt-2 mb-4 rounded-md p-1 m-2'>
                        <ArrowForwardOutlinedIcon />
                        {productCategory}
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Cards