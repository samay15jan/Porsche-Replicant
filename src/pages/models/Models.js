import React, { useState } from 'react'
import Header from '../../components/models/01_header/Header'
import Main from '../../components/models/Main'
import Section_7 from '../../components/homepage/section_7/Section_7'
import Menu from '../../components/models/01_header/overflow_menu/Menu'
import styled from 'styled-components'
import tw from 'twin.macro'

const BlurContainer = styled.div`
  ${tw`relative overflow-x-hidden`}
`;

const models = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <BlurContainer className={isMenuOpen ? 'h-screen w-screen blur-2xl' : ''}>
                <Header onClick={openMenu} />
                <Main />
                <Section_7 />
            </BlurContainer>
            {isMenuOpen && <Menu onClick={closeMenu} />}
        </div>
    )
}

export default models
