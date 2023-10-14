import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`w-screen`}`
const Divider = styled.hr`${tw`w-auto border border-slate-200 my-4 mx-72`}`
const Title = styled.div`${tw`mx-72 mb-2 text-lg`}`
const Data = styled.div`${tw`ml-1 font-extrabold`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-72`}`
const Flex = styled.div`${tw`flex`}`

const Body = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Title>Length</Title>
            <Grid>
                <Data>{Model1.Length}</Data>
                <Data>{Model2.Length}</Data>
            </Grid>
            <Divider />

            <Title>Width</Title>
            <Grid>
                <Flex><Data>{Model1.Width}</Data></Flex>
                <Flex><Data>{Model2.Width}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Height</Title>
            <Grid>
                <Flex><Data>{Model1.Height}</Data></Flex>
                <Flex><Data>{Model2.Height}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Wheelbase</Title>
            <Grid>
                <Flex><Data>{Model1.Wheelbase}</Data></Flex>
                <Flex><Data>{Model2.Wheelbase}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Maximum load</Title>
            <Grid>
                <Flex><Data>{Model1.Load}</Data></Flex>
                <Flex><Data>{Model2.Load}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Gross Vehicle Weight Rating (GVWR)</Title>
            <Grid>
                <Flex><Data>{Model1.Weight}</Data></Flex>
                <Flex><Data>{Model2.Weight}</Data></Flex>
            </Grid>
        </Container>
    )
}

export default Body