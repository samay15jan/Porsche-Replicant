import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'

const Flex = styled.div`${tw`flex justify-center w-screen h-5 m-2`}`

const ButtonFixedBar = () => {
    return (
        <Flex>
            <Button>Overview</Button>
            <Button>Design</Button>
            <Button>Details</Button>
            <Button>Sound</Button>
            <Button>Next Steps</Button>
        </Flex>
    )
}

export default ButtonFixedBar