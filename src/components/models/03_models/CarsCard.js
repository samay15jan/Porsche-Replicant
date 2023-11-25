import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'
import { ArrowForwardIosOutlined } from '@mui/icons-material'

const Container = styled.div`${tw`w-screen lg:w-80 hover:cursor-pointer`}`
const Image = styled.img`${tw`w-80 justify-center lg:w-80`}`
const Listing = styled.div`${tw`text-red-500 font-bold`}`
const Heading = styled.div`${tw`text-2xl mt-2 font-bold`}`

const CarsCard = ({ id, model, src, text, price, listing }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateRoute = () => {
        dispatch(Configuration(id))
        navigate("/configuration");
    };

    return (
        <Container onClick={navigateRoute}>
            <Heading><ArrowForwardIosOutlined />{model} Models</Heading>
	    <Image src={src} alt={text} />
            {text}
            <Listing>
                {listing ? "New" : ""}
            </Listing>
            {price}
        </Container>
    )
}

export default CarsCard
