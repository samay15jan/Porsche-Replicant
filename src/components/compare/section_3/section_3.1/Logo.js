import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Close } from '@mui/icons-material'

const Container = styled.div`${tw`w-[450px]`}`
const CustomButton = styled(Button)`${tw``}`
const SVG = styled.img`${tw`w-32 absolute ml-32`}`
const Image = styled.img`${tw`w-[450px]`}`
const Text1 = styled.div`${tw`text-2xl font-medium mb-2 justify-center`}`
const Text2 = styled.div`${tw`text-xl font-bold my-2`}`
const Text3 = styled.div`${tw`text-sm`}`

const Logo = ({ image, svg, text, transmission }) => {
    return (
        <Container>
            <CustomButton >
                <Close />
            </CustomButton>
            <SVG src={svg} alt={text} />
            <Image src={image} alt={text} />
            <Text1>{text}</Text1>
            <Text2>Transmission</Text2>
            <Text3>{transmission}</Text3>
        </Container >
    )
}

export default Logo