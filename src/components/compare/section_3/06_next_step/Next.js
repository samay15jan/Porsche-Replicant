import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { Settings, Search, ArrowForward } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../../features/homepage/homeSlice'

const Container = styled.div`${tw`w-screen bg-gray-100`}`
const SubContainer = styled.div`${tw`ml-0 lg:ml-6 relative`}`
const Title = styled.h1`${tw`text-center font-semibold text-4xl font-bold flex justify-center m-5 pt-20 mb-5`}`
const Subheading = styled.h3`${tw`text-center font-normal text-lg flex justify-center mb-20 hover:opacity-20 mx-4 lg:mx-20`}`
const Name = styled.h3`${tw`text-center justify-center flex mb-3 text-sm lg:text-lg`}`
const Button = styled.button`${tw`font-normal text-sm lg:text-lg flex justify-center bg-black text-white my-1 py-3 mx-0 lg:mx-10 mb-2 rounded w-48 lg:w-96`}`
const Grid = styled.div`${tw`grid grid-cols-2 justify-between mx-2 lg:mx-44 mb-20`}`

const Heading = ({ Model1, Model2 }) => {

  // Navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateRoute1 = () => {
    dispatch(Configuration(Model1.ID))
    navigate("/configuration");
  };
  const navigateRoute2 = () => {
    dispatch(Configuration(Model2.ID))
    navigate("/configuration");
  };
  const navigateRoute3 = () => {
    navigate("/models");
  };

    return (
        <Container>
            <Title>
                Ready to make your selection?
            </Title>
            <Subheading>
                With countless customization options, your dream car can be a reality. Start personalizing your Porsche today.
            </Subheading>
            <Grid>
                    <Name>{Model1.Name}</Name>
                    <Name>{Model2.Name}</Name>
                <SubContainer>
                    <Button onClick={navigateRoute1}><Settings />Configure my Porsche</Button>
                    <Button onClick={navigateRoute3}><Search />Find your Porsche</Button>
                </SubContainer>
                <SubContainer>
                    <Button onClick={navigateRoute2}><Settings />Configure my Porsche</Button>
                    <Button onClick={navigateRoute3}><Search />Find your Porsche</Button>
                </SubContainer>
            </Grid>
        </Container>
    )
}

export default Heading
