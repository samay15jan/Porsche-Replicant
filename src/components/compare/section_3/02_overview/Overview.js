import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { SpeedSharp, DriveEtaOutlined } from '@mui/icons-material'

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10`}`
const Divider = styled.hr`${tw`w-auto border border-slate-200 my-4 mx-10 lg:mx-72`}`
const Title = styled.div`${tw`mx-10 lg:mx-72 mb-2 text-lg`}`
const Data = styled.div`${tw`ml-1 font-extrabold`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-10 lg:mx-72`}`
const Flex = styled.div`${tw`flex`}`

const Overview = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Heading>Overview</Heading>

            <Title>MSRP</Title>
            <Grid>
                <Data>$ {parseInt(Model1.MSRP).toLocaleString()}</Data>
                <Data>$ {parseInt(Model2.MSRP).toLocaleString()}</Data>
            </Grid>
            <Divider />

            <Title>HorsePower</Title>
            <Grid>
                <Flex><DriveEtaOutlined /><Data>{Model1.HorsePower}</Data></Flex>
                <Flex><DriveEtaOutlined /><Data>{Model2.HorsePower}</Data></Flex>
            </Grid>
            <Divider />

            <Title>0 - 60 mph</Title>
            <Grid>
                <Flex><SpeedSharp /><Data>{Model1.SpeedTest}</Data></Flex>
                <Flex><SpeedSharp /><Data>{Model2.SpeedTest}</Data></Flex>
            </Grid>
            <Divider />

            <Title>Top track speed</Title>
            <Grid>
                <Flex><SpeedSharp /><Data>{Model1.Speed}</Data></Flex>
                <Flex><SpeedSharp /><Data>{Model2.Speed}</Data></Flex>
            </Grid>
            <Divider />

        </Container>
    )
}

export default Overview
