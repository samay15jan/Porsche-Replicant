import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Image = styled.div`${tw`w-48 rounded-2xl`}`

const BigCard = ({ img }) => {
    return (
        <div>
            <Image src={img} />
        </div>
    )
}

export default BigCard