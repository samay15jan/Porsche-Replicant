import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`absolute z-[400] px-5 lg:px-4`}
`
const Button1 = styled.button`
  ${tw`bg-white text-black justify-center w-80 lg:w-96 text-sm py-2 mb-4 rounded-md`}
`
const Button2 = styled.button`
  ${tw`border-white text-white border justify-center w-80 lg:w-96 text-sm py-2 rounded-md z-[400]`}
`

const Button = ({ name, id }) => {
  // Navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateRoute1 = () => {
    dispatch(Configuration(id))
    navigate("/configuration");
  };

  const navigateRoute2 = () => {
    navigate("/compare");
  };

  return (
    <Container>
      <Button1 onClick={navigateRoute1}>{`Build your ${name}`}</Button1>
      <Button2 onClick={navigateRoute2}>{`Compare Models`}</Button2>
    </Container>
  )
}

export default Button
