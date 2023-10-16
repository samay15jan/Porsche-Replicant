import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Settings, Search, ArrowForward } from '@mui/icons-material'

const Container = styled.div`${tw`w-screen bg-gray-100`}`
const SubContainer = styled.div`${tw`ml-10 relative`}`
const Title = styled.h1`${tw`font-semibold text-4xl font-bold flex justify-center m-5 pt-20 mb-5`}`
const Subheading = styled.h3`${tw`font-normal text-lg  flex justify-center mb-10 hover:opacity-20 mx-20`}`
const Name = styled.h3`${tw`justify-center flex mb-3 text-lg`}`
const Button = styled.div`${tw`font-normal text-lg  flex justify-center bg-black text-white my-1 py-3 mx-10 mb-2 rounded `}`
const Button2 = styled.div`${tw`w-auto hover:bg-gray-200 ml-10 mt-3 mb-10`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-44`}`

const Heading = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Title>
                Ready to make your selection?
            </Title>
            <Subheading>
                With countless customization options, your dream car can be a reality. Start personalizing your Porsche today.
            </Subheading>
            <Grid>
                <SubContainer>
                    <Name>{Model1.Name}</Name>
                    <Button><Settings />Configure my Porsche</Button>
                    <Button><Search />Find your Porsche</Button>
                    <Button2><ArrowForward />View vehicle information</Button2>
                </SubContainer>
                <SubContainer>
                    <Name>{Model2.Name}</Name>
                    <Button><Settings />Configure my Porsche</Button>
                    <Button><Search />Find your Porsche</Button>
                    <Button2><ArrowForward />View vehicle information</Button2>
                </SubContainer>
            </Grid>
        </Container>
    )
}

export default Heading