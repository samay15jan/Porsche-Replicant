import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import BasicInformation from './section_01/BasicInformation'
import Container from './section_02/Container'
import WheelsContainer from './section_03/WheelsContainer'
import InteriorColorContainer from './section_04/InteriorColorContainer'
import OptionsContainer from './section_05/OptionsContainer'
import TechnologyContainer from './section_06/TechnologyContainer'

const RightContainer = styled.div`${tw`absolute right-0`}`
const Components = styled.div`${tw`mb-4`}`

const FixedContainer = ({ ID, data }) => {
    return (
        <RightContainer>
          <Components><BasicInformation data={data}/></Components>
          <Components><Container ID={ID}/></Components>
          <Components><WheelsContainer/></Components>
          <Components><InteriorColorContainer/></Components>
          <Components><OptionsContainer/></Components>
          <Components><TechnologyContainer/></Components>
        </RightContainer>
    )
}

export default FixedContainer
