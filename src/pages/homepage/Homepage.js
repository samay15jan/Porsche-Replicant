import React from 'react';
import './Homepage.css';
import Section_1 from '../../components/homepage/section_1/Section_1'
import Section_2 from '../../components/homepage/section_2/Section_2'
import Section_3 from '../../components/homepage/section_3/Section_3'


export default function homepage() {
  return (
    <div>
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </div>
  );
}