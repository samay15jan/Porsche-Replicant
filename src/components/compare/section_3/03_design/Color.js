import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Icon = styled.div`
    ${tw`w-20 h-10`}
    ${props => props.color ? tw`` : ''}
`

const Color = ({ color }) => {
    const iconColor = {
        Grey: "bg-[#6a6c70]",
        Black: "bg-[#000000]",
        Blue1: "bg-[#00194b]",
        Blue2: "bg-[#9edef7]",
        Blue3: "bg-[#1d2738]",
        Blue4: "bg-[#2f3743]",
        Yellow: "bg-[#ffcc00]",
        Green: "bg-[#3c3c32]",
        Red: "bg-[#990033]",
        White: "bg-[#c7c7bf]",
        Berry: "bg-[#eff5f9]",
        Silver: "bg-[#c3cdd3]",
        Orange: "bg-[#d34624]",
    }
    return (
        <div>
            <Icon color={color} />
        </div>
    )
}

export default Color