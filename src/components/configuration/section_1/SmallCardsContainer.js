import React from 'react'
import SmallCard from './SmallCard'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`flex space-x-4 overflow-x-auto w-[950px] mx-8`}`
const SubContainer = styled.div`${tw`flex-none`}`

const SmallCardsContainer = ({ DefaultImages, customImages, onClick }) => {
    const imageUrl = customImages?.Images || DefaultImages;

    return (
        <Container>
            {Object.values(imageUrl).map((model, index) => (
                <SubContainer key={index}>
                    <SmallCard model={model} onClick={onClick} />
                </SubContainer>
            ))}
        </Container>
    )
}

export default SmallCardsContainer