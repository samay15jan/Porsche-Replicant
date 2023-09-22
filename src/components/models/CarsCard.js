import React from 'react'

const CarsCard = ({ src, text, price, listing, index }) => {
    return (
        <div className='hover:cursor-pointer' index={index}>
            <div className='w-72'>
                <img src={src} alt={text} />
            </div>
            {text}
            <div className='text-red-500 font-bold'>
                {listing ? "New" : ""}
            </div>
            {price}
        </div>
    )
}

export default CarsCard