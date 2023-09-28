import { Add } from '@mui/icons-material'
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.div`
${tw`border flex border-black p-4 m-4 mr-10 hover:text-red-500`}
`

const FilterButton = ({ text, key, onClick }) => {
    return (
        <Button key={key} onClick={onClick}>
            <Add />
            {text}
        </Button>
    )
}

export default FilterButton