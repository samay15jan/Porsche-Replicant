import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Add } from '@mui/icons-material'

const Button = styled.div`
  ${tw`lg:border flex rounded-sm lg:border-black m-2 p-1 lg:p-4 lg:m-4 lg:mr-10 bg-white`}
  &:hover {
    ${tw`text-white bg-red-500`}
  }
  &:active {
    ${tw`text-white bg-red-500`}
  }
`

const FilterButton = ({ text, onClick }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button onClick={handleClick}>
      <Add />
      {text}
    </Button>
  )
}

export default FilterButton
