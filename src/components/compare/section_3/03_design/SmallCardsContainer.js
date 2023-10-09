import React from 'react'
import SmallCard from './SmallCard'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`flex`}`

const SmallCardsContainer = ({ Model, color, onClick }) => {
    const images = {
        img1: "Image1",
        img2: "Image2",
        img3: "Image3",
        img4: "Image4",
        img5: "Image5"
    }
    return (
        <Container>
            {Object.keys(color).map((colorValue, index) => {
                const modelData = Model[colorValue];
                return <SmallCard index={index} Model={modelData} onclick={onClick} />
            })}
        </Container>
    )
}

export default SmallCardsContainer