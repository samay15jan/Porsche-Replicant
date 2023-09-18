import React from 'react';
import './Homepage.css';
import Section_1 from '../../components/homepage/section_1/Section_1'
import Section_2 from '../../components/homepage/section_2/Section_2'


export default function homepage() {
  return (
    <div>
      <Section_1/>
      <Section_2/>
    </div>
  );
}