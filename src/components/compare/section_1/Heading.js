import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`bg-gray-100 pt-16 pb-16`}`
const Title = styled.h1`${tw`font-semibold text-4xl flex justify-center m-5`}`
const Subheading = styled.h3`${tw`font-normal text-xl flex justify-center text-center mx-4`}`

const Heading = () => {
    return (
        <Container>
            <Title>
                Compare Models
            </Title>
            <Subheading>
                Need help deciding on the perfect Porsche for you? Compare your favorite models side-by-side.
            </Subheading>
        </Container>
    )
}

export default Heading
