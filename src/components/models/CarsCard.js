import React from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'

const Container = styled.div`${tw`hover:cursor-pointer`}`
const Image = styled.dev`${tw`w-72`}`
const Listing = styled.div`${`text-red-500 font-bold`}`

const CarsCard = ({ src, text, price, listing, index }) => {
    return (
        <Container index={index}>
            <Image>
                <img src={src} alt={text} />
            </Image>
            {text}
            <Listing>
                {listing ? "New" : ""}
            </Listing>
            {price}
        </Container>
    )
}

export default CarsCard