import React from 'react'
import Data from '../../../pages/compare/data.json'
import Cards from './Cards'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Grid = styled.div`${tw`grid grid-cols-3`}`

const CardsContainer = () => {
    const SectionData = Data.OverflowMenu[0]

    return (
        <Grid>
            {Object.keys(SectionData).map((range, index) => (
                <Cards key={index} src_image={SectionData[range].Image} src_logo={SectionData[range].Logo} />
            ))}
        </Grid>
    )
}

export default CardsContainer