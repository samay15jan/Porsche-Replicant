import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`lg:flex my-36 lg:my-0`}
`
const SubContainer = styled.div`
  ${tw`w-auto lg:w-[500px] ml-3 lg:ml-48`}
`
const Heading = styled.div`
  ${tw`text-4xl font-bold mb-4 mt-14`}
`
const Text = styled.div`
  ${tw`mt-6 mb-1`}
`
const TextArea = styled.input`
  ${tw`p-4 border-2 border-black w-96 rounded`}
`
const Image = styled.img`
  ${tw`w-[700px] right-0`}
`

const Porsche_pre_owned = ({ img }) => {
  return (
    <Container>
      <SubContainer>
        <Heading>Find your new or pre-owned Porsche.</Heading>
        Making it easy to find your dream Porsche. Enter your location and browse the best car offers available near you.
        <Text>Enter a location for your search:</Text>
        <TextArea style={{ outline: 'none' }} placeholder='Enter City or ZIP Code' cols="30" rows="1" />
      </SubContainer>
      <Image src={img} alt="Image" />
    </Container>
  )
}

export default Porsche_pre_owned