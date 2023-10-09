import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Data from '../../../pages/compare/modelsData.json'
import Color from '../../../pages/compare/colors.json'
import { useSelector } from 'react-redux';
import ButtonFixedBar from './01_models/ButtonFixedBar'
import Container from './01_models/Container'
import Overview from './02_overview/Overview'
import Design from './03_design/Design'

const Divider = styled.hr`${tw`w-screen border border-slate-200 my-4`}`

const CompareModels = ({ onClick }) => {
    const sectionData = Data.ModelsData
    const colorsData = Color.Colors
    const compareState = useSelector((state) => state.compare);
    const compareData = compareState.compare
    const Model1 = sectionData.find((model) => model.ID === compareData[1].id);
    const Model2 = sectionData.find((model) => model.ID === compareData[0].id);
    const color1 = colorsData.find((color) => color.ID === compareData[1].id);
    const color2 = colorsData.find((color) => color.ID === compareData[0].id);

    return (
        <div>
            <Container onClick={onClick} Model1={Model1} Model2={Model2} />
            <Divider />
            <ButtonFixedBar />
            <Divider />
            <Overview Model1={Model1} Model2={Model2} />
            <Design Model1={Model1} Model2={Model2} color1={color1} color2={color2} />
        </div>
    )
}

export default CompareModels