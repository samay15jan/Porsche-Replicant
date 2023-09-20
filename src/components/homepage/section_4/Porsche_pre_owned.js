import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Porsche_pre_owned = ({ img }) => {
    return (
        <div className='flex'>
            <div className='w-[500px] ml-48'>
                <div className='text-4xl font-bold mb-4 mt-14'>
                    Find your new or pre-owned Porsche.
                </div>
                Making it easy to find your dream Porsche. Enter your location and browse the best car offers available near you.
                <div className='mt-6 mb-1'>Enter a location for your search</div>
                <input style={{ outline: 'none' }} className='p-4 border-2 border-black w-96 rounded' name="" placeholder='Enter City or ZIP Code' id="" cols="30" rows="1" />
            </div>
            <img className=' w-[700px] right-0' src={img} alt="pre-owned vehicles" />

        </div>
    )
}

export default Porsche_pre_owned