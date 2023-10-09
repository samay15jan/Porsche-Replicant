import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`px-8`}`
const Image = styled.img`${tw`w-44 rounded-2xl`}`

const SmallCard = ({ index, Model, onClick }) => {
    return (
        <Container>
            <Image index={index} src={Model} onclick={onClick} />
        </Container>
    )
}

export default SmallCard