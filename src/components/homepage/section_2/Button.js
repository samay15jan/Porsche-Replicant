import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import tw from 'twin.macro'
import styled from 'styled-components'

const ArrowButton = styled.button`
  ${tw`bg-neutral-500 bg-opacity-10 text-slate-200 rounded`}
`

const Button = () => {
  return (
    <ArrowButton>
      <ArrowForwardOutlinedIcon />
    </ArrowButton>
  )
}

export default Button