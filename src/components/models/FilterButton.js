import React from 'react'

const FilterButton = ({ text }) => {
    return (
        <div className='border-4 p-10 pr-20 hover:text-red-500'>
            {text}
        </div>
    )
}

export default FilterButton