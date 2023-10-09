import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`px-8`}`
const Image = styled.img`${tw`w-[450px] rounded-2xl`}`

const BigCard = ({ img }) => {
    return (
        <Container>
            <Image src={img} />
        </Container>
    )
}

export default BigCard