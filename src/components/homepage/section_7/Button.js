import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`mr-10 hover:bg-slate-200 mt-4 lg:mt-0`}
`
const Title = styled.div`
  ${tw`text-lg font-bold mb-2`}
`
const CustomButton = styled.div`
  ${tw`text-black bg-white rounded-md px-28 py-4 mt-8`}
`

const Button = ({ text, title, desc }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {desc}
      <CustomButton>
        {text}
      </CustomButton>
    </Container>
  )
}

export default Button