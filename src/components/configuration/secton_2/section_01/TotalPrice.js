import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Text = styled.div`${tw`text-lg font-bold m-2`}`

const TotalPrice = ({ price }) => {
  return (
    <Text>{price}</Text>
  )
}

export default TotalPrice
