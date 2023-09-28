import React from 'react'
import Header from '../../components/models/Header'
import Section_7 from '../../components/homepage/section_7/Section_7'
import Main from '../../components/compare/Main'
import styled from 'styled-components/macro'
import tw from 'twin.macro'

const Container = styled.div`
    ${tw`overflow-x-hidden`}`

const Compare = () => {
    return (
        <Container>
            <div><Header /></div>
            <div><Main /></div>
            <div><Section_7 /></div>
        </Container>
    )
}

export default Compare