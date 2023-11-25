import React, { useState, useEffect } from 'react'
import Button from '../compare/section_1/Button'
import Heading from '../compare/section_1/Heading'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import CompareModels from './section_3/CompareModels'
import { useSelector } from 'react-redux';

const ButtonContainer = styled.div`${tw`flex justify-between w-screen lg:w-auto lg:mx-72`}`

const Main = ({ toggleOverflow }) => {
    const [reduxData, setReduxData] = useState(false)
    const compareState = useSelector((state) => state.compare)
    const compareData = compareState.compare

    const toggleUI = () => {
        setReduxData(!reduxData)
    }
    const toggleRedux = () => {
        if (compareData[0] && compareData[0].id && compareData[1] && compareData[1].id === null) {
            return
        } else if (compareData[0] && compareData[0].id && compareData[1] && compareData[1].id !== null) {
            setReduxData(!reduxData)
        }
    }

    useEffect(() => {
        toggleRedux()
    }, [compareData]);

    return (
        <>
            <Heading />
            {reduxData
                ? <CompareModels onClick={toggleUI} />
                : <ButtonContainer>
                    <Button text={"Select model"} onClick={toggleOverflow} />
                    <Button text={"Select model"} onClick={toggleOverflow} />
                </ButtonContainer>
            }
        </>
    )
}

export default Main
