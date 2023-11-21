import React, { useState } from 'react'
import Button from './Button';
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`mt-10 relative w-80 m-2`}
`
const CardContainer = styled.div`
  ${tw`relative overflow-hidden`}
`
const Image = styled.img`
  ${tw`justify-center rounded-[30px] hover:p-2 hover:w-80 transition-transform `}
`
const SubContainer = styled.div`
${tw`absolute flex justify-between rounded-3xl hover:p-2 px-4 bottom-0 bg-gradient-to-t h-20 text-white font-bold from-zinc-900 to-transparent w-full`}
`
const Text = styled.div`
${tw`mb-4`}
`
const BottomShadeContainer = styled.div`
${tw`rounded-full`}
`
const BottomShade = styled.div`
${tw`absolute top-0 left-0 right-0 bottom-0 border-8 border-solid ring-8  ring-white border-white rounded-3xl`}
`

const Cards = ({ src, text }) => {
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
            <CardContainer>
                <Image className={`${imgHovered ? 'transform scale-105' : ''}`} src={src} alt='Image' />
                <SubContainer>
                    <Text>{text}</Text>
                    <Button />
                </SubContainer>
                <BottomShadeContainer>
                    <BottomShade />
                </BottomShadeContainer>
            </CardContainer>
        </Container>
    )
}

export default Cards