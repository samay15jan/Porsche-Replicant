import { Add } from '@mui/icons-material'
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.div`
${tw`border flex border-black w-10 p-4 pr-32 hover:text-red-500`}
`

const FilterButton = ({ text, key }) => {
    return (
        <Button>
            <Add />
            {text}
        </Button>
    )
}

export default FilterButton