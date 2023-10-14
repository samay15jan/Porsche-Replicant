import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10`}`
const Divider = styled.hr`${tw`w-auto border border-slate-200 my-4 mx-72`}`
const Title = styled.div`${tw`mx-72 mb-2 text-lg`}`
const Data = styled.div`${tw`ml-1 font-extrabold`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-72`}`
const Flex = styled.div`${tw`flex`}`

const Capacities = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Title>Rear luggage compartment volume</Title>
            <Grid>
                <Data>{Model1.VolumeRear}</Data>
                <Data>{Model2.VolumeRear}</Data>
            </Grid>
            <Divider />

            <Title>Fuel tank</Title>
            <Grid>
                <Flex><Data>{Model1.FuelTank}</Data></Flex>
                <Flex><Data>{Model2.FuelTank}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Front luggage compartment volume</Title>
            <Grid>
                <Flex><Data>{Model1.VolumeFront}</Data></Flex>
                <Flex><Data>{Model2.VolumeFront}</Data></Flex>
            </Grid>
        </Container>
    )
}

export default Capacities