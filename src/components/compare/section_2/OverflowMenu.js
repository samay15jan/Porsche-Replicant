import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import CardsContainer from './CardsContainer'

const Container = styled.div`${tw`mx-32 my-20 border border-2 border-black rounded-2xl`}`
const Text = styled.div`${tw`text-4xl font-semibold`}`

const OverflowMenu = ({ onClick }) => {
    return (
        <Container>
            <Button onClick={onClick}>Close</Button>
            <Text>Select model range</Text>
            <CardsContainer />
        </Container>
    )
}

export default OverflowMenu