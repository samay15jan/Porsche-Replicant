import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Motor from './menus/Motor'
import Performance from './menus/Performance'
import Body from './menus/Body'
import Capacities from './menus/Capacities'
import { Add, Remove } from '@mui/icons-material'


const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10 mt-10`}`
const Text = styled.div`${tw`flex justify-between text-xl font-bold w-auto bg-gray-100 py-2 px-2 mx-10 lg:mx-72 rounded-lg`}`
const Divider = styled.hr`${tw`w-auto border border-slate-200 my-4 mx-10 lg:mx-72`}`

const Overview = ({ Model1, Model2 }) => {
    const [showMotor, setShowMotor] = useState(false)
    const [showPerformance, setShowPerformance] = useState(false)
    const [showBody, setShowBody] = useState(false)
    const [showCapacities, setShowCapacities] = useState(false)

    const toggleMotor = () => setShowMotor(prevState => !prevState)
    const togglePerformance = () => setShowPerformance(prevState => !prevState)
    const toggleBody = () => setShowBody(prevState => !prevState)
    const toggleCapacities = () => setShowCapacities(prevState => !prevState)

    return (
        <Container>
            <Heading>Details</Heading>

            <Text onClick={toggleMotor}>Motor {showMotor ? <Remove /> : <Add />}</Text>
            {showMotor ? <Motor Model1={Model1} Model2={Model2} /> : ""}
            <Divider />

            <Text onClick={togglePerformance}>Performance {showPerformance ? <Remove /> : <Add />}</Text>
            {showPerformance ? <Performance Model1={Model1} Model2={Model2} /> : ""}
            <Divider />

            <Text onClick={toggleBody}>Body {showBody ? <Remove /> : <Add />}</Text>
            {showBody ? <Body Model1={Model1} Model2={Model2} /> : ""}
            <Divider />

            <Text onClick={toggleCapacities}>Capacities {showCapacities ? <Remove /> : <Add />}</Text>
            {showCapacities ? <Capacities Model1={Model1} Model2={Model2} /> : ""}
            <Divider />
        </Container>
    )
}

export default Overview
