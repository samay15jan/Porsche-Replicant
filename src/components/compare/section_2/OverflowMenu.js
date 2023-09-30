import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import CardsContainer from './CardsContainer'
import { Close } from '@mui/icons-material'

const Container = styled.div`
    ${tw`flex w-screen h-screen justify-center bg-black bg-opacity-70`}
`
const SubContainer = styled.div`
    ${tw`bg-white my-10 border border-2 shadow-2xl drop-shadow-xl border-black rounded-2xl`}
`
const Flex = styled.div`${tw`flex justify-between mt-5`}`

const Step = styled.div`${tw`text-sm ml-5`}`

const CustomButton = styled(Close)`${tw`text-black absolute`}`

const Text = styled.div`${tw`text-4xl font-semibold ml-5`}`

const Divider = styled.hr`${tw`mt-5`}`

const OverflowMenu = ({ onClick }) => {
    return (
        <Container>
            <SubContainer>
                <Flex>
                    <Step>
                        Step 1/2
                    </Step>
                    <Button
                        onClick={onClick}
                    >
                        <CustomButton />
                    </Button>
                </Flex>
                <Text>
                    Select model range
                </Text>
                <Divider />
                <CardsContainer />
            </SubContainer>
        </Container>
    )
}

export default OverflowMenu