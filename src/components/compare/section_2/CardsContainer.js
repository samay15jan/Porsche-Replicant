import React, { useState } from 'react'
import Data from '../../../pages/compare/data.json'
import Cards from './Cards'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Models from './Models'

const Grid = styled.div`${tw`grid grid-cols-3 p-5 bg-slate-100`}`

const CardsContainer = ({ onClick }) => {
    const SectionData = Data.OverflowMenu[0]
    const [menu, setMenu] = useState(true)
    const Menu = () => {
        setMenu(!menu)
    }
    return (
        <Grid>
            {Object.keys(SectionData).map((range, index) => (
                menu ?
                    <Cards key={index} src_image={SectionData[range].Image} src_logo={SectionData[range].Logo} onClick={onClick} />
                    :
                    <Models key={index} image={SectionData[range].Image} logo={SectionData[range].Logo} />
            ))}
        </Grid>
    )
}

export default CardsContainer