import React from 'react'
import Button from '../compare/section_1/Button'
import Heading from '../compare/section_1/Heading'
import styled from 'styled-components/macro'
import tw from 'twin.macro'

const ButtonContainer = styled.div`${tw`flex justify-between mx-72`}`
const Main = ({ onClick }) => {
    return (
        <>
            <Heading />
            <ButtonContainer>
                <Button text={"Select model"} onClick={onClick} />
                <Button text={"Select model"} onClick={onClick} />
            </ButtonContainer>
        </>
    )
}

export default Main