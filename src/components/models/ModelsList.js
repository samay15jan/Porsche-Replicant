import React from 'react'
import CarsCard from './CarsCard'
import data from '../../pages/models/data.json'

const ModelsList = () => {
    const sectionData = data.models;
    return (
        <div className='grid grid-cols-3'>
            {
                sectionData.map((model, index) => (
                    < CarsCard
                        src={model.image}
                        text={model.name}
                        price={model.starting_price}
                        listing={model.new}
                        index={index} />
                ))
            }
        </div>
    )
}

export default ModelsList