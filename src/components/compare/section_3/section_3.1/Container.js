import React from 'react'
import Logo from './Logo'
import tw from 'twin.macro'
import styled from 'styled-components'
import Data from '../../../../pages/compare/modelsData.json'
import { useSelector } from 'react-redux';

const Card = styled.div`${tw`flex justify-center`}`

const Container = () => {
    const sectionData = Data.ModelsData
    const compareState = useSelector((state) => state.compare);
    const compareData = compareState.compare
    const Model1 = sectionData.find((model) => model.ID === compareData[1].id);
    const Model2 = sectionData.find((model) => model.ID === compareData[0].id);
    return (
        <Card>
            <Logo image={Model1.Model} svg={Model1.svg} text={Model1.Name} transmission={Model1.Transmission} />
            <Logo image={Model2.Model} svg={Model2.svg} text={Model2.Name} transmission={Model2.Transmission} />
        </Card>
    )
}

export default Container