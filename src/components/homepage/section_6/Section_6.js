import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'

const Section_6 = () => {
    const sectionData = data.homepage.section_6
    return (
        <div className='mb-32 mt-10'>
            <div className='flex text-3xl font-semibold pt-10 justify-center pb-5'>Discover</div>
            <div className='flex justify-center'>
                {sectionData.map((data, index) => (
                    <Cards key={index} src={data.Image} text={data.Text} />
                ))}
            </div>
        </div>
    )
}

export default Section_6