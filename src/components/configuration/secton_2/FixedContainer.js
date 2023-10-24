import React from 'react'
import BasicInformation from './section_01/BasicInformation'

const FixedContainer = ({ data }) => {
    return (
        <div>
            <BasicInformation data={data} />
        </div>
    )
}

export default FixedContainer