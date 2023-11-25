import React from 'react'
import Data from '../../../pages/compare/data.json'
import Cards from './Cards'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Grid = styled.div`${tw`grid grid-cols-2 lg:grid-cols-3 p-10 lg:p-5 bg-slate-100`}`

const CardsContainer = ({ toggleMenu, onCardClick }) => {
    const SectionData = Data.OverflowMenu[0]
    return (
        <Grid>
            {Object.keys(SectionData).map((range, index) => (
                <Cards
                    key={index}
                    toggleMenu={toggleMenu}
                    id={SectionData[range].ID}
                    src_image={SectionData[range].Image}
                    src_logo={SectionData[range].Logo}
                    onCardClick={onCardClick}
                />
            ))}
        </Grid>
    )
}

export default CardsContainer
