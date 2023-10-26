import React from 'react'
import BasicInformation from './section_01/BasicInformation'
import Container from './section_02/Container'

const FixedContainer = ({ ID, data }) => {
    return (
        <div>
            <BasicInformation data={data} />
            <Container ID={ID} />
        </div>
    )
}

export default FixedContainer