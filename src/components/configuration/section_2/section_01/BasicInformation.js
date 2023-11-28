import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import TotalPrice from './TotalPrice'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'

const Container = styled.div`${tw`w-screen mt-10 lg:mt-0 lg:w-[294px] grid grid-cols-2 mr-10 bg-white rounded-xl p-2`}`
const Button = styled.button`${tw`p-1 bg-gray-200 text-sm rounded-md animate-pulse`}`

const BasicInformation = ({ data }) => {
    return (
        <Container>
            <TotalPrice price={parseInt(data.MSRP).toLocaleString()} />
	    <Button><NearMeOutlinedIcon /> Contact dealer</Button>
        </Container>
    )
}

export default BasicInformation
