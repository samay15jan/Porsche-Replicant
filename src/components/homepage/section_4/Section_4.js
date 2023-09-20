import React from 'react'
import Porsche_center from './Porsche_center'
import Porsche_pre_owned from './Porsche_pre_owned'
import data from '../../../pages/homepage/data.json'

const Section_4 = () => {
    const sectionData = data.homepage.section_4
    return (
        <div>
            <Porsche_center img={sectionData[0].Image1} />
            <Porsche_pre_owned img={sectionData[1].Image2} />
        </div>
    )
}

export default Section_4