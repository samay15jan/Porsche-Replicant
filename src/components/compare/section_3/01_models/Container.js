import React, { useState } from 'react'
import Logo from './Logo'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Card = styled.div`${tw`flex justify-center`}`

const Container = ({ onClick, Model1, Model2 }) => {
    const [bar, showBar] = useState(false)
    return (
        <div>
            <Card>
                <Logo image={Model1.Model} text={Model1.Name} transmission={Model1.Transmission} onClick={onClick} />
                <Logo image={Model2.Model} text={Model2.Name} transmission={Model2.Transmission} onClick={onClick} />
            </Card>
        </div>
    )
}

export default Container
