import React, { useState } from 'react'
import Header from '../../components/models/01_header/Header'
import Main from '../../components/configuration/Main'
import Section_7 from '../../components/homepage/section_7/Section_7'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import Menu from '../../components/models/01_header/overflow_menu/Menu'


const Container = styled.div`${tw`overflow-x-hidden bg-gray-100`}`

const BlurContainer = styled.div`
  position: relative;
`;

const Configuration = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Container>
            <BlurContainer className={isMenuOpen ? 'h-screen w-screen blur-2xl' : ''}>
                <Header />
                <Main />
                <Section_7 />
            </BlurContainer>
            {isMenuOpen && <Menu onClick={closeMenu} />}

        </Container>
    )
}

export default Configuration
