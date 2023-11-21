import React from 'react'
import Icons from './Icons'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`mr-10 mt-4 lg:mt-0 `}
`
const Text = styled.div`
  ${tw`text-lg font-bold mb-2`}
`

const Socials = () => {
  return (
    <Container>
      <Text>Social Media</Text>
      Get in touch with us via social media.
      <Icons />
    </Container>
  )
}

export default Socials