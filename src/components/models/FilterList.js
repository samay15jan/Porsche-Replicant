import React from 'react'
import FilterButton from './FilterButton'
import Data from '../../pages/models/data.json'

const FilterList = ({ onClick }) => {
    const ModelsList = Data.ModelsList
    const BodyDesign = Data.BodyDesign
    const Transmission = Data.Transmission
    const Seats = Data.Seats
    const Drive = Data.Drive
    const finalData = [ModelsList, BodyDesign, Transmission, Seats, Drive]

    return (
        <div>
            {finalData.map((option, index) => (
                option.map((text, subindex) => (
                    <FilterButton key={subindex} text={text} onClick={onClick} />
                ))
            ))}
        </div>
    )
}

export default FilterList