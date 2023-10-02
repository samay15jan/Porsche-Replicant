import React from 'react'
import Data from '../../../pages/compare/data.json'
import Models from './Models'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const Grid = styled.div`${tw`grid grid-cols-3 p-5 bg-slate-100`}`

const ModelsContainer = ({ toggleMenu, selectedCardId }) => {
    const SectionData = Data.OverflowMenu[0]
    return (
        <Grid>
            {Object.keys(SectionData).map((range) => (
                SectionData[range].ID === selectedCardId && (
                    <Models
                        id={selectedCardId}
                        src_name={SectionData[range].Name}
                        src_model={SectionData[range].Model}
                    />
                )))}
            <Button onClick={toggleMenu}><ArrowBack />Back</Button>
        </Grid>
    )
}

export default ModelsContainer