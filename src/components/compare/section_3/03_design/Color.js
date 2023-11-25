import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Icon = styled.div`${tw`w-20 lg:w-24 h-10 lg:h-14 m-1 lg:m-2 rounded-sm lg:rounded-lg border lg:border-2 border-black`}`

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
    White: "bg-[#eff5f9]",
    Berry: "bg-[#c7c7bf]",
    Silver: "bg-[#c3cdd3]",
    Orange: "bg-[#d34624]",
}

const Color = ({ color, onClick }) => {
    return (
        <div>
            {iconColor[color] && <Icon className={iconColor[color]} onClick={() => onClick(color)} />}
        </div>
    )
}

export default Color
