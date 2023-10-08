import React, { useState } from 'react'
import Logo from './Logo'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import FixedBar from './FixedBar'

const Card = styled.div`${tw`flex justify-center`}`

const Container = ({ onClick, Model1, Model2 }) => {
    const [bar, showBar] = useState(false)
    return (
        <div>
            {bar ? <FixedBar img1={Model1.Model} img2={Model2.Model} text1={Model1.Name} text2={Model2.Name} /> : ""}
            <Card>
                <Logo image={Model1.Model} text={Model1.Name} transmission={Model1.Transmission} onClick={onClick} />
                <Logo image={Model2.Model} text={Model2.Name} transmission={Model2.Transmission} onClick={onClick} />
            </Card>
        </div>
    )
}

export default Container