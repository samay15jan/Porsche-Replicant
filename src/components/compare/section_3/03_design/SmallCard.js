import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`mt-2 object-cover`}`
const Image = styled.img`${tw`w-32 rounded-lg`}`

const SmallCard = ({ model, onClick }) => {
    return (
        <Container >
            <Image src={model} onClick={() => onClick(model)} />
        </Container>
    )
}

export default SmallCard