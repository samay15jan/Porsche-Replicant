import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`
    ${tw`bg-slate-100 w-36 mb-2 `}
`
const SubContainer = styled.div`
    ${tw`relative flex justify-center overflow-hidden border-8 border-slate-100 rounded-3xl`}
`
const Image = styled.img`
    ${tw`w-32 rounded-2xl`}
`
const TextContainer = styled.div`
    ${tw`absolute bottom-0 w-36 flex justify-center bg-black bg-opacity-50`}
`
const Text = styled.div`
    ${tw` text-xl text-white font-bold`}
`

const Cards = ({ src_logo, src_image, key, onClick }) => {
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
            key={key}
            onClick={() => onClick({ src_logo })}
        >
            <SubContainer>
                <Image className={`transition-transform ${imgHovered ? 'transform scale-110' : ''}`} src={src_image} alt='card' />
                <TextContainer>
                    <Text>
                        {src_logo}
                    </Text>
                </TextContainer>
            </SubContainer>
        </Container>
    )
}

export default Cards