import React from 'react'
import BasicInformation from './section_01/BasicInformation'
import Container from './section_02/Container'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const RightContainer = styled.div`${tw`absolute right-0`}`
const Components = styled.div`${tw`mb-4`}`

const FixedContainer = ({ ID, data }) => {
    return (
        <RightContainer>
          <Components><BasicInformation data={data}/></Components>
          <Components><Container ID={ID}/></Components>
        </RightContainer>
    )
}

export default FixedContainer
