import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import BigCard from './BigCard'
import SmallCardsContainer from './SmallCardsContainer'
import ColorsContainer from './ColorsContainer'

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-44`}`

const Design = ({ color1, color2 }) => {

    const [customImage1, setCustomImage1] = useState(null)
    const [customImage2, setCustomImage2] = useState(null)
    const handleClick1 = (imgPath) => {
        setCustomImage1(imgPath)
    }
    const handleClick2 = (imgPath) => {
        setCustomImage2(imgPath)
    }

    return (
        <Container>
            <Heading>Design</Heading>
            <Grid>
                <BigCard stockImage={color1.Default.Images.image1} customImage={customImage1} />
                <BigCard stockImage={color2.Default.Images.image1} customImage={customImage2} />
                <SmallCardsContainer stock={color1.Default.Images} onClick={handleClick1} />
                <SmallCardsContainer stock={color2.Default.Images} onClick={handleClick2} />
                <ColorsContainer color={color1} />
                <ColorsContainer color={color2} />
            </Grid>
        </Container>
    )
}

export default Design