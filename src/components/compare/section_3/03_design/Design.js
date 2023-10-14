import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import BigCard from './BigCard'
import SmallCardsContainer from './SmallCardsContainer'
import ColorsContainer from './ColorsContainer'

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-44`}`
const Text1 = styled.div`${tw`text-sm ml-8 mt-4 mb-2`}`
const Text2 = styled.div`${tw`text-lg ml-8 mt-2`}`

const Design = ({ color1, color2, default1, default2 }) => {
    const [customImage1, setCustomImage1] = useState(null)
    const [customImage2, setCustomImage2] = useState(null)
    const [customColor1, setCustomColor1] = useState(null)
    const [customColor2, setCustomColor2] = useState(null)
    const [customColorName1, setCustomColorName1] = useState(null)
    const [customColorName2, setCustomColorName2] = useState(null)

    const handleClick1 = (imgPath) => {
        setCustomImage1(imgPath)
    }
    const handleClick2 = (imgPath) => {
        setCustomImage2(imgPath)
    }
    const handleClick3 = (ColorName) => {
        setCustomColorName1(color1[ColorName].Name)
        setCustomImage1(color1[ColorName].Images.image1)
        setCustomColor1(ColorName)
    }
    const handleClick4 = (ColorName) => {
        setCustomColorName2(color2[ColorName].Name)
        setCustomImage2(color2[ColorName].Images.image1)
        setCustomColor2(ColorName)
    }
    return (
        <Container>
            <Heading>Design</Heading>
            <Grid>
                <BigCard stockImage={default1.Images.image1} customImage={customImage1} />
                <BigCard stockImage={default2.Images.image1} customImage={customImage2} />
                <SmallCardsContainer stock={default1.Images} customImage={color1[customColor1]} onClick={handleClick1} />
                <SmallCardsContainer stock={default2.Images} customImage={color2[customColor2]} onClick={handleClick2} />
                <div>
                    <Text1>{customColorName1 == null ? default1.Name : customColorName1}</Text1>
                </div>
                <div>
                    <Text1>{customColorName2 == null ? default2.Name : customColorName2}</Text1>
                </div>

                <div>
                    <Text2>Special Color</Text2>
                    <ColorsContainer color={color1} onClick={handleClick3} />
                </div>
                <div>
                    <Text2>Special Color</Text2>
                    <ColorsContainer color={color2} onClick={handleClick4} />
                </div>
            </Grid>
        </Container>
    )
}

export default Design