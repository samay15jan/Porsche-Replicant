import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux';
import Data from '../../../pages/compare/modelsData.json'
import Color from '../../../pages/compare/colors.json'
import ColorsDefault from '../../../pages/compare/colors-default.json'
import ButtonFixedBar from './01_models/ButtonFixedBar'
import Container from './01_models/Container'
import Overview from './02_overview/Overview'
import Design from './03_design/Design'
import Details from './04_details/Details'
import Sound from './05_sound/Sound'
import Next from './06_next_step/Next'

const Divider = styled.hr`${tw`w-screen border border-slate-200 my-4`}`

const CompareModels = ({ onClick }) => {
    const sectionData = Data.ModelsData
    const defaultData = ColorsDefault.DefaultColors
    const colorsData = Color.Colors
    const compareState = useSelector((state) => state.compare);
    const compareData = compareState.compare
    const Model1 = sectionData.find((model) => model.ID === compareData[1].id);
    const Model2 = sectionData.find((model) => model.ID === compareData[0].id);
    const color1 = colorsData.find((color) => color.ID === compareData[1].id);
    const color2 = colorsData.find((color) => color.ID === compareData[0].id);
    const DefaultModel1 = defaultData.find((model) => model.ID === compareData[1].id);
    const DefaultModel2 = defaultData.find((model) => model.ID === compareData[0].id);

    return (
        <div>
            <Container onClick={onClick} Model1={Model1} Model2={Model2} />
            <Divider />
            <ButtonFixedBar />
            <Divider />
            <Overview Model1={Model1} Model2={Model2} />
            <Design color1={color1} color2={color2} default1={DefaultModel1} default2={DefaultModel2} />
            <Details Model1={Model1} Model2={Model2} />
            <Sound Model1={Model1} Model2={Model2} />
            <Next Model1={Model1} Model2={Model2} />
        </div>
    )
}

export default CompareModels