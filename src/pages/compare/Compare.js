import React, { useState } from 'react'
import Header from '../../components/models/01_header/Header'
import Main from '../../components/compare/Main'
import Section_7 from '../../components/homepage/section_7/Section_7'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import OverflowMenu from '../../components/compare/section_2/OverflowMenu'
import Menu from '../../components/models/01_header/overflow_menu/Menu'


const Container = styled.div`
    ${tw`overflow-x-hidden`}`

const BlurContainer = styled.div`
    position: relative;
  `;

const Compare = () => {
    const [overflow, setOverflow] = useState(true)
    const toggleOverflow = () => {
        setOverflow(!overflow)
    }
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
                {overflow ?
                    <>
                        <div><Header /></div>
                        <div><Main toggleOverflow={toggleOverflow} /></div>
                        <div><Section_7 /></div>
                    </>
                    : <OverflowMenu toggleOverflow={toggleOverflow} />
                }
            </BlurContainer>
            {isMenuOpen && <Menu onClick={closeMenu} />}

        </Container>
    )
}

export default Compare