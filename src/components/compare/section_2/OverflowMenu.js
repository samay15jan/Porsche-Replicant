import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import { Close } from '@mui/icons-material'
import CardsContainer from './CardsContainer'
import ModelsContainer from './ModelsContainer'

const Container = styled.div`
    ${tw`flex w-screen h-screen justify-center bg-black bg-opacity-70 overflow-hidden`}
`
const SubContainer = styled.div`
    ${tw`bg-white my-5 border border-2 shadow-2xl drop-shadow-xl border-black rounded-2xl`}
`
const Flex = styled.div`${tw`flex justify-between mt-5`}`

const Step = styled.div`${tw`text-sm ml-5`}`

const CustomButton = styled(Close)`${tw`text-black absolute`}`

const Text = styled.div`${tw`text-4xl font-semibold ml-5`}`

const DividerHalf = styled.hr`${tw`mt-5 w-1/2 border border-black`}`
const DividerFull = styled.hr`${tw`mt-5 border border-black`}`

const OverflowMenu = ({ toggleOverflow }) => {
    const [menu, setMenu] = useState(true)
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleCardClick = (id) => {
        setSelectedCardId(id);
    };

    const toggleMenu = () => {
        setMenu(!menu)
    }
    return (
        <Container>
            <SubContainer>
                <Flex>
                    <Step>
                        {menu ? "Step 1/2" : "Step 2/2"}
                    </Step>
                    <Button onClick={toggleOverflow}><CustomButton /></Button>
                </Flex>
                <Text>
                    {menu ? "Select model range" : "Select model"}
                </Text>
                {menu ? <DividerHalf /> : <DividerFull />}
                {menu
                    ? <CardsContainer toggleMenu={toggleMenu} onCardClick={handleCardClick} />
                    : <ModelsContainer toggleOverflow={toggleOverflow} toggleMenu={toggleMenu} selectedCardId={selectedCardId} />
                }
            </SubContainer>
        </Container>
    )
}

export default OverflowMenu