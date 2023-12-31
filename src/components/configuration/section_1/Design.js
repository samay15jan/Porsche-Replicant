import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import BigCard from './BigCard'
import SmallCardsContainer from './SmallCardsContainer'
import { useSelector } from 'react-redux';
import ColorsDefault from '../../../pages/compare/colors-default.json'
import Color from '../../../pages/compare/colors.json'

const Container = styled.div`${tw`w-screen`}
  top: 0;
  left: 0;
  overflow: hidden;
`

const Design = ({ ID }) => {

    // Getting Default Images
    const DefaultModelData = ColorsDefault.DefaultColors
    const DefaultModel = DefaultModelData.find((model) => model.ID === ID);
    // Adding customImage for BigCard
    const [customImage, setCustomImage] = useState(null)
    const handleClick = (imgPath) => {
        setCustomImage(imgPath)
    }
    // Getting customColor
    const colors = Color.Colors
    const color = colors.find((color) => color.ID === ID);
    const reduxColor = useSelector((state) => state.config.SelectedColor)
    const customColor = reduxColor[0]?.color
    useEffect(() => {
        setCustomImage(color[customColor]?.Images.image1)
    }, [reduxColor])
    return (
        <Container>
            <BigCard
                DefaultImage={DefaultModel.Images.image1}
                customImage={customImage}
            />
            <SmallCardsContainer
                onClick={handleClick}
                DefaultImages={DefaultModel.Images}
                customImages={color[customColor]}
            />
        </Container>
    )
}

export default Design
