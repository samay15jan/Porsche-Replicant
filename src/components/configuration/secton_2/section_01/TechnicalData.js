import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Button, List } from '@mui/material'

const Text = styled(Button)`${tw`text-sm font-bold m-2 text-black`}`

const TechnicalData = ({ data }) => {
  return (
    <Text><List />Technical Data</Text>
  )
}

export default TechnicalData
