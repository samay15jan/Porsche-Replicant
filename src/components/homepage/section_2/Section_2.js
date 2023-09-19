import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'

const Section_2 = () => {
  const sectionData = data.homepage.section_2[0];
  return (
    <div className='flex m-10 justify-center'>
      <Cards src={sectionData.Image1} text={sectionData.Text1} />
      <Cards src={sectionData.Image2} text={sectionData.Text2} />
      <Cards src={sectionData.Image3} text={sectionData.Text3} />
    </div>
  )
}

export default Section_2