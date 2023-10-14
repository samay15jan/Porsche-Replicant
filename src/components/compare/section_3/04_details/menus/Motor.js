import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`w-screen`}`
const Divider = styled.hr`${tw`w-auto border border-slate-200 my-4 mx-72`}`
const Title = styled.div`${tw`mx-72 mb-2 text-lg`}`
const Data = styled.div`${tw`ml-1 font-extrabold`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-72`}`
const Flex = styled.div`${tw`flex`}`

const Motor = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Title>Max. power</Title>
            <Grid>
                <Data>{Model1.HorsePower}</Data>
                <Data>{Model2.HorsePower}</Data>
            </Grid>
            <Divider />

            <Title>Stroke</Title>
            <Grid>
                <Flex><Data>{Model1.Stroke}</Data></Flex>
                <Flex><Data>{Model2.Stroke}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Displacement</Title>
            <Grid>
                <Flex><Data>{Model1.Displacement}</Data></Flex>
                <Flex><Data>{Model2.Displacement}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Max. torque</Title>
            <Grid>
                <Flex><Data>{Model1.Torque}</Data></Flex>
                <Flex><Data>{Model2.Torque}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Max. engine speed</Title>
            <Grid>
                <Flex><Data>{Model1.Engine}</Data></Flex>
                <Flex><Data>{Model2.Engine}</Data></Flex>
            </Grid>
        </Container>
    )
}

export default Motor