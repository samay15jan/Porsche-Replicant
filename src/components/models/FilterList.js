import React from 'react'
import FilterButton from './FilterButton'
import Data from '../../pages/models/data.json'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`font-bold text-xl ml-5`}`
const Box = styled.div`${tw`ml-20`}`

const FilterList = ({ onClick }) => {
    const objectData = {
        ModelsList: "Models",
        BodyDesign: "Body Design",
        Transmission: "Transmission",
        Seats: "Seats",
        Drive: "Drive",
        FuelType: "Fuel Type"
    };

    return (
        <Box>
            {Object.keys(objectData).map((option, index) => (
                <div key={index}>
                    <Container>{objectData[option]}</Container>
                    {Data[option].map((text, subindex) => (
                        <FilterButton
                            key={subindex}
                            text={text}
                            onClick={() => onClick(text)}
                        />
                    ))}
                </div>
            ))}
        </Box>
    )
}

export default FilterList