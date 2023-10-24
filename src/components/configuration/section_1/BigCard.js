import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'

const Container = styled.div`${tw`px-8`}`
const Image = styled.img`${tw`w-[950px] rounded-2xl`}`

const BigCard = ({ DefaultImage, customImage }) => {
    const custom = customImage == "" ? customImage.image : "" 
    const imageUrl = custom | DefaultImage

    return (
        <Container>
            <Image src={imageUrl} />
            <Button />
        </Container>
    )
}

export default BigCard
