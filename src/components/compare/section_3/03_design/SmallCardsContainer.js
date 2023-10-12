import React from 'react'
import SmallCard from './SmallCard'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`flex space-x-2 overflow-x-auto mx-8`}`
const SubContainer = styled.div`${tw`flex-none`}`

const SmallCardsContainer = ({ stock, onClick }) => {
    return (
        <Container>
            {Object.values(stock).map((model, index) => (
                <SubContainer key={index}>
                    <SmallCard model={model} onClick={onClick} />
                </SubContainer>
            ))}
        </Container>
    )
}

export default SmallCardsContainer