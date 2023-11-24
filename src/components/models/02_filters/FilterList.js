import React, { useState } from 'react'
import FilterButton from './FilterButton'
import Data from '../../../pages/models/data.json'
import tw, { css } from 'twin.macro'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { selectedOption, selectedType } from '../../../features/models/modelSlice'

const Heading = styled.div`
    ${tw`hidden lg:block font-bold text-xl ml-2 lg:ml-5`}
`
const Text= styled.div`
    ${tw`font-bold mt-5 ml-2 lg:hidden`}
`
const Box = styled.div`
    ${tw`grid grid-flow-col overflow-y-auto lg:ml-20 lg:grid-flow-row lg:overflow-hidden`}
`
const Container = styled.div`
    ${tw`grid grid-flow-col lg:grid-flow-row`}
`

const FilterList = () => {
    const filters = ['Model', 'BodyDesign', 'Transmission', 'Seats', 'Drive', 'FuelType']

    const dispatch = useDispatch()

    const setModel = (option, text) => {
        dispatch(selectedOption(option))
        dispatch(selectedType(text));
    };

    return (
        <Box>
	  <Text>Filters</Text>
            {filters.map((option, index) => (
                <Container key={index}>
                    <Heading>{option}</Heading>
                    {Data[option].map((text, subindex) => (
                        <FilterButton
                            key={subindex}
                            text={text}
                            onClick={() => setModel(option, text)}
                        />
                    ))}
                </Container>
            ))}
        </Box>
    )
}

export default FilterList
