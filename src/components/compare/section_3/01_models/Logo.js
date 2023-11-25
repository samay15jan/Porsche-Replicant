import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import { Close } from '@mui/icons-material'

const Container = styled.div`${tw`w-[450px]`}`
const CustomButton = styled(Button)`${tw``}`
const Image = styled.img`${tw`w-[450px]`}`
const Text1 = styled.div`${tw`flex text-xl font-medium mb-2 text-center justify-center mx-2`}`
const Text2 = styled.div`${tw`text-lg font-bold mt-2 mx-2`}`
const Text3 = styled.div`${tw`text-sm mx-2`}`

const Logo = ({ image, text, transmission, onClick }) => {
    return (
        <Container>
            <CustomButton onClick={onClick}>
                <Close />
            </CustomButton>
            <Image src={image} alt={text} />
            <Text1>{text}</Text1>
            <Text2>Transmission</Text2>
            <Text3>{transmission}</Text3>
        </Container >
    )
}

export default Logo
