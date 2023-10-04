import React from 'react'
import Button from '../compare/section_1/Button'
import Heading from '../compare/section_1/Heading'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import { useSelector } from 'react-redux';

const ButtonContainer = styled.div`${tw`flex justify-between mx-72`}`
const Main = ({ toggleOverflow }) => {
    const compareState = useSelector((state) => state.compare);
    const compareData = compareState.compare;
    return (
        <>
            <Heading />
            <ButtonContainer>
                <Button text={"Select model"} onClick={toggleOverflow} />
                <Button text={"Select model"} onClick={toggleOverflow} />
            </ButtonContainer>
        </>
    )
}

export default Main