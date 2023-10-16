import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`w-screen`}`
const SubContainer = styled.div`${tw`ml-10 relative`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10 mt-10`}`
const Text = styled.div`${tw`text-sm mb-2`}`
const Image = styled.img`${tw`w-96 rounded-lg h-56 mb-5`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-44`}`
const Audio = styled.audio`${tw`w-[340px] mb-5 mx-5 rounded-xl bg-gray-500 opacity-70 absolute bottom-0`}`

const Sound = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Heading>Sound</Heading>
            <Grid>
                <SubContainer>
                    <Text>{Model1.Name}</Text>
                    {Model1.exhaustImage == "" ? "Not Available" : <Image src={Model1.exhaustImage} alt="Exhaust Image" />}
                    {Model1.exhaustAudio == "" ? "" : <Audio src={Model1.exhaustAudio} controls="true"></Audio>}
                </SubContainer>
                <SubContainer>
                    <Text>{Model2.Name}</Text>
                    {Model2.exhaustImage == "" ? "Not Available" : <Image src={Model2.exhaustImage} alt="Exhaust Image" />}
                    {Model2.exhaustAudio == "" ? "" : <Audio src={Model2.exhaustAudio} controls="true"></Audio>}
                </SubContainer>
            </Grid>
        </Container>
    )
}

export default Sound
