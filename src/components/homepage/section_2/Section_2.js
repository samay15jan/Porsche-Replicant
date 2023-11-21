import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`grid grid-cols-1 m-10 justify-center`}
  ${tw`lg:flex m-10 justify-center`}
`

const Section_2 = () => {
  const sectionData = data.homepage.section_2[0];
  return (
    <Container>
      <Cards src={sectionData.Image1} text={sectionData.Text1} />
      <Cards src={sectionData.Image2} text={sectionData.Text2} />
      <Cards src={sectionData.Image3} text={sectionData.Text3} />
    </Container>
  )
}

export default Section_2