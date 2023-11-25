import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`w-screen`}`
const SubContainer = styled.div`${tw`mx-1 lg:mx-0 lg:ml-10 relative`}`
const Heading = styled.div`${tw`flex justify-center text-4xl font-bold p-10 mt-10`}`
const Text = styled.div`${tw`text-sm mb-4 text-center`}`
const Image = styled.img`${tw`w-96 lg:w-96 rounded-lg h-32 lg:h-56 mb-5`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-5 lg:mx-44`}`
const Audio = styled.audio`${tw`w-32 lg:w-[340px] mb-5 mx-7 lg:mx-5 rounded-xl bg-gray-500 opacity-70 absolute z-20 bottom-0`}`

const Sound = ({ Model1, Model2 }) => {
    return (
        <Container>
            <Heading>Sound</Heading>
            <Grid>
                    <Text>{Model1.Name}</Text>
                    <Text>{Model2.Name}</Text>
                <SubContainer>
                    {Model1.exhaustImage == "" ? "Not Available" : <Image src={Model1.exhaustImage} alt="Exhaust Image" />}
                    {Model1.exhaustAudio == "" ? "" : <Audio src={Model1.exhaustAudio} controls="true"></Audio>}
                </SubContainer>
                <SubContainer>
                    {Model2.exhaustImage == "" ? "Not Available" : <Image src={Model2.exhaustImage} alt="Exhaust Image" />}
                    {Model2.exhaustAudio == "" ? "" : <Audio src={Model2.exhaustAudio} controls="true"></Audio>}
                </SubContainer>
            </Grid>
        </Container>
    )
}

export default Sound
