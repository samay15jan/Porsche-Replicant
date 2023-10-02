import React, { useState } from 'react'
import Header from '../../components/models/Header'
import Section_7 from '../../components/homepage/section_7/Section_7'
import Main from '../../components/compare/Main'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import OverflowMenu from '../../components/compare/section_2/OverflowMenu'

const Container = styled.div`
    ${tw`overflow-x-hidden`}`

const Compare = () => {
    const [overflow, setOverflow] = useState(true)
    const toggleOverflow = () => {
        setOverflow(!overflow)
    }
    return (
        <Container>
            {overflow ?
                <>
                    <div><Header /></div>
                    <div><Main toggleOverflow={toggleOverflow} /></div>
                    <div><Section_7 /></div>
                </>
                : <OverflowMenu toggleOverflow={toggleOverflow} />
            }
        </Container>
    )
}

export default Compare