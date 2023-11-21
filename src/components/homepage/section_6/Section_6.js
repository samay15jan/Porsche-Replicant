import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`mb-32 mt-10`}
`
const Heading = styled.div`
  ${tw`flex text-3xl font-semibold pt-10 justify-center pb-5`}
`
const Main = styled.div`
  ${tw`grid grid-cols-1 ml-10 lg:flex justify-center`}
`

const Section_6 = () => {
    const sectionData = data.homepage.section_6
    return (
        <Container>
            <Heading>Discover</Heading>
            <Main>
                {sectionData.map((data, index) => (
                    <Cards key={index} src={data.Image} text={data.Text} />
                ))}
            </Main>
        </Container>
    )
}

export default Section_6