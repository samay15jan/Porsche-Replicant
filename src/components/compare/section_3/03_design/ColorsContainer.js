import React from 'react'
import Color from './Color'
const ColorsContainer = ({ color }) => {

    const carsColors = {
        "001": [Grey, Black, Blue1, Yellow],
        "002": [Yellow, Green, Red, Chalk],
        "003": [White, Berry, Blue2, Black],
        "004": [Red, White, Black, Blue3],
        "005": [Silver, Blue1, Black, Orange],
        "006": [Grey, Blue4, Chalk, Black],
    }
    return (
        <div>
            <Color />
        </div>
    )
}

export default ColorsContainer