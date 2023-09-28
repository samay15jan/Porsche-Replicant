import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`hover:cursor-pointer`}`
const Image = styled.div`${tw`w-72`}`
const Listing = styled.div`${tw`text-red-500 font-bold`}`

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