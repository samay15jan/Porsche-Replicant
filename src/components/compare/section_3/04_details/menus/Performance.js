import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`w-screen`}`
const Divider = styled.hr`${tw`w-auto border border-slate-200 my-4 mx-72`}`
const Title = styled.div`${tw`mx-72 mb-2 text-lg`}`
const Data = styled.div`${tw`ml-1 font-extrabold`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-72`}`
const Flex = styled.div`${tw`flex`}`

const Performance = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Title>0 - 60 mph</Title>
            <Grid>
                <Data>{Model1.SpeedTest}</Data>
                <Data>{Model2.SpeedTest}</Data>
            </Grid>
            <Divider />

            <Title>Top track speed</Title>
            <Grid>
                <Flex><Data>{Model1.Speed}</Data></Flex>
                <Flex><Data>{Model2.Speed}</Data></Flex>
            </Grid>
        </Container>
    )
}

export default Performance