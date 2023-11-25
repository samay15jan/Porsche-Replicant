import React from 'react'
import Data from '../../../pages/compare/data.json'
import Models from './Models'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useSelector } from 'react-redux';

const Grid = styled.div`${tw`grid grid-rows-3 lg:grid-cols-3 p-5 bg-slate-100`}`

const ModelsContainer = ({ toggleMenu, selectedCardId, toggleOverflow }) => {

    const compareState = useSelector((state) => state.compare);
    const compareData = compareState.compare;
    const text = () => {
        if (compareData[0] && compareData[0].id && compareData[1] && compareData[1].id === null) {
            return
        } else if (compareData[0] && compareData[0].id && compareData[1] && compareData[1].id !== null) {
            return "(2/2)";
        } else if (compareData[0] && compareData[0].id || compareData[1] && compareData[1].id !== null) {
            return "(1/2)";
        } else {
            return "(0/2)";
        }
    }
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
            <Button onClick={toggleOverflow}>Add to comparision {text()}</Button>
            <Button onClick={toggleMenu}>Back</Button>
        </Grid>
    )
}

export default ModelsContainer
