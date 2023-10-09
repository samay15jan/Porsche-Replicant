import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import BigCard from './BigCard'
import SmallCardsContainer from './SmallCardsContainer'
import ColorsContainer from './ColorsContainer'

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-44`}`

const Design = ({ Model1, Model2, color1, color2 }) => {
    return (
        <Container>
            <Heading>Design</Heading>
            <Grid>
                <BigCard img={Model1.Grey.image1} />
                <BigCard img={Model2.Yellow.image1} />
                <SmallCardsContainer Model={Model1} color={color1} />
                <SmallCardsContainer Model={Model2} color={color2} />
                <ColorsContainer Model={Model1} />
                <ColorsContainer Model={Model2} />
            </Grid>
        </Container>
    )
}

export default Design