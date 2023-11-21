import React, { useState } from 'react'
import Button from './Button';
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`relative w-[400px] lg:w-[450px]`}
`
const SubContainer = styled.div`
  ${tw`relative overflow-hidden z-[500px]`}
`
const Image = styled.img`
  ${tw`justify-center rounded-[30px] hover:p-3 transition-transform `}
`
const DetailsContainer = styled.div`
  ${tw`absolute rounded-3xl text-lg hover:p-2 px-4 bottom-0 bg-gradient-to-t h-56 text-white font-bold from-zinc-900 to-transparent w-full`}
`
const Text = styled.div`
  ${tw`font-bold px-4`}
`
const Price = styled.div`
  ${tw`mb-4 text-sm font-medium px-4`}
`
const ButonContainer = styled.div`
${tw`transition-transform`}
`
const BottomShadeContainer = styled.div`
${tw`rounded-full`}
`
const BottomShade = styled.div`
${tw`absolute top-0 left-0 right-0 bottom-0 border-8 border-solid ring-8 ring-white border-white rounded-3xl`}
`

const Cards = ({ id, src_bg, text, price, name }) => {
  const [imgHovered, setImgHovered] = useState(false)
  const handleMouseEnter = () => {
    setImgHovered(true)
  }
  const handleMouseLeave = () => {
    setImgHovered(false)
  }
  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}

    >
      <SubContainer>
        <Image className={`${imgHovered ? 'transform scale-105' : ''}`} src={src_bg} alt='Image' />
        <DetailsContainer>
          <Text>{text}</Text>
          <Price>{price}</Price>
          <ButonContainer>
            <Button name={name} id={id} />
          </ButonContainer>
        </DetailsContainer>
        <BottomShadeContainer>
          <BottomShade />
        </BottomShadeContainer>
      </SubContainer>
    </Container >
  )
}

export default Cards
