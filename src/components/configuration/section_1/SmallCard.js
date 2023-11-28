import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`object-cover`}`
const Image = styled.img`${tw`w-44 rounded-lg`}`

const SmallCard = ({ model, onClick }) => {
    return (
        <Container >
            <Image src={model} onClick={() => onClick(model)} />
        </Container>
    )
}

export default SmallCard
