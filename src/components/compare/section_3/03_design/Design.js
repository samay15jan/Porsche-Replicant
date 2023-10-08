import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import BigCard from './BigCard'

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-56`}`

const Design = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Heading>Design</Heading>
            <Grid>
                <BigCard img={Model1} />
                <BigCard img={Model2} />
            </Grid>

        </Container>
    )
}

export default Design