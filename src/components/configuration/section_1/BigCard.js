import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'

const Container = styled.div`${tw`px-4 lg:px-8`}`
const Image = styled.img`${tw`w-[950px] rounded-2xl`}`

const BigCard = ({ DefaultImage, customImage }) => {
    const imageUrl = customImage || DefaultImage

    return (
        <Container>
            <Image src={imageUrl} />
            <Button />
        </Container>
    )
}

export default BigCard
