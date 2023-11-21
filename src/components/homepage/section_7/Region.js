import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`p-10 mt-5`}
`
const Heading = styled.div`
  ${tw`text-lg font-bold pb-4`}
`
const SubContainer = styled.div`
  ${tw`flex`}
`
const Image = styled.img`
  ${tw`w-8 h-8 rounded-full mr-2 border`}
`
const Text = styled.div`
  ${tw`hover:text-red-500 ml-2 underline`}
`

const Region = ({ src }) => {
    return (
        <Container>
            <Heading>Current Region / Language</Heading>
            <SubContainer >
                <Image src={src} alt="united states Logo" />
                United States / English
                <Text>Change</Text>
            </SubContainer>
        </Container>
    )
}

export default Region