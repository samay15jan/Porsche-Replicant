import React from 'react'
import Cards from './Cards'
import Image1 from '../../../resources/homepage/02_section/1.webp'
import Image2 from '../../../resources/homepage/02_section/2.webp'
import Image3 from '../../../resources/homepage/02_section/3.webp'

const Section_2 = () => {
  return (
    <div className='flex m-10 justify-center'>
        <Cards src={Image1} text={"Rennsport is Back & You'r Invited."} />
        <Cards src={Image2} text={"The new Cayenne E-Hybrid Coupé."} />
        <Cards src={Image3} text={"The new 718 Spyder RS."} />
    </div>
  )
}

export default Section_2