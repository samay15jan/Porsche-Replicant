import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'
import tw from 'twin.macro'
import styled from 'styled-components'

const Heading = styled.div`
  ${tw`pt-20 text-4xl flex justify-center font-bold mb-6`}
`
const Container = styled.div`
  ${tw`flex justify-center`}
`
const SubContainer = styled.div`
  ${tw`grid grid-cols-1 gap-4`}
  ${tw`grid lg:grid-cols-2 gap-4`}
`

const Section_3 = () => {
  const sectionData = data.homepage.section_3[0]
  return (
    <>
      <Heading>Models</Heading>
      <Container>
        <SubContainer>
          <Cards id={'001'} name={sectionData.Name1} src_bg={sectionData.Image1} text={sectionData.Text1} price={sectionData.Price1} />
          <Cards id={'002'} name={sectionData.Name2} src_bg={sectionData.Image2} text={sectionData.Text2} price={sectionData.Price2} />
          <Cards id={'003'} name={sectionData.Name3} src_bg={sectionData.Image3} text={sectionData.Text3} price={sectionData.Price3} />
          <Cards id={'004'} name={sectionData.Name4} src_bg={sectionData.Image4} text={sectionData.Text4} price={sectionData.Price4} />
          <Cards id={'005'} name={sectionData.Name5} src_bg={sectionData.Image5} text={sectionData.Text5} price={sectionData.Price5} />
          <Cards id={'006'} name={sectionData.Name6} src_bg={sectionData.Image6} text={sectionData.Text6} price={sectionData.Price6} />
        </SubContainer>
      </Container>
    </>
  )
}

export default Section_3
