import React, { useState } from 'react';
import Section_1 from '../../components/homepage/section_1/Section_1'
import Section_2 from '../../components/homepage/section_2/Section_2'
import Section_3 from '../../components/homepage/section_3/Section_3'
import Section_4 from '../../components/homepage/section_4/Section_4'
import Section_5 from '../../components/homepage/section_5/Section_5'
import Section_6 from '../../components/homepage/section_6/Section_6'
import Section_7 from '../../components/homepage/section_7/Section_7'
import Menu from '../../components/homepage/overflow_menu/Menu'
import styled from 'styled-components'

const BlurContainer = styled.div`
  position: relative;
`;

export default function homepage() {
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
        <Section_1 onClick={openMenu} />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Section_7 />
      </BlurContainer>

      {isMenuOpen && <Menu onClick={closeMenu} />}
    </div>
  );
}