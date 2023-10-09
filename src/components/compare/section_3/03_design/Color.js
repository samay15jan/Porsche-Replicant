import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Icon = styled.div`
    ${tw`w-20 h-10`}
    ${props => props.color ? tw`` : ''}
`

const Color = ({ color }) => {
    return (
        <div>
            <Icon color={color} />
        </div>
    )
}

export default Color