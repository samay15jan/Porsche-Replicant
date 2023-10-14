import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'

const Container = styled.div`${tw`px-8`}`
const Image = styled.img`${tw`w-[450px] rounded-2xl`}`

const BigCard = ({ stockImage, customImage }) => {
    const imageUrl = customImage || stockImage

    return (
        <Container>
            <Image src={imageUrl} />
            <Button />
        </Container>
    )
}

export default BigCard