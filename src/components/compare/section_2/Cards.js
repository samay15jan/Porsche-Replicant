import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`bg-black w-48 m-5 `}`
const Svg = styled.svg`${tw`w-10`}`
const Image = styled.img`${tw`w-48`}`

const Cards = ({ src_logo, src_image, key }) => {
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
        >
            <Image className={` transition-transform ${imgHovered ? 'transform scale-105' : ''}`} src={src_image} alt='card' />
        </Container>
    )
}

export default Cards