import { Add } from '@mui/icons-material'
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
${tw`hover:bg-slate-100 border-slate-100`}
`

const Button = styled.div`
${tw`border-2 flex border-black p-4 pr-6 w-48 m-4 justify-center`}
`

const FilterButton = ({ text, onClick }) => {
    return (
        <Container>
            <Button onClick={onClick}>
                <Add />
                {text}
            </Button>
        </Container>
    )
}

export default FilterButton