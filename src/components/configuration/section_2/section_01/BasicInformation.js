import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import TotalPrice from './TotalPrice'
import TechnicalData from './TechnicalData'

const Container = styled.div`${tw`grid grid-cols-2 mr-10 bg-white rounded-xl p-2`}`

const BasicInformation = ({ data }) => {
    return (
        <Container>
            <TotalPrice price={data.MSRP} />
            <TechnicalData data={data} />
        </Container>
    )
}

export default BasicInformation
