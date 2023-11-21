import React, { useState } from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`snap-x select-none p-2`}
`
const SubContainer = styled.div`
  ${tw`m-5 w-72 rounded-2xl hover:bg-gray-200 snap-center`}
`
const Image = styled.img`
  ${tw`w-72 transition-transform `}
`
const Name = styled.div`
  ${tw`text-sm font-semibold my-2`}
`
const Description = styled.div`
  ${tw`text-sm`}
`
const Button = styled.div`
  ${tw`flex z-[500px] hover:bg-gray-300 text-sm mt-2 mb-4 rounded-md p-1 m-2`}
`

const Cards = ({ productImage, productName, productDescription, productCategory }) => {
  const [imgHovered, setImgHovered] = useState(false)
  const handleMouseEnter = () => {
    setImgHovered(true)
  }
  const handleMouseLeave = () => {
    setImgHovered(false)
  }
  return (
    <Container>
      <SubContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className={`${imgHovered ? 'transform scale-105' : ''}`}
          src={productImage}
          alt='product'
        />
        <Name>{productName}</Name>
        <Description>
          {productDescription}
        </Description>
        <Button>
          <ArrowForwardOutlinedIcon />
          {productCategory}
        </Button>
      </SubContainer >
    </Container>
  )
}

export default Cards