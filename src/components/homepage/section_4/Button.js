import React from 'react'
import { useNavigate } from "react-router-dom";
import tw from 'twin.macro'
import styled from 'styled-components'

const CustomButton = styled.button`
  ${tw`hover:bg-slate-200 z-[50px] text-black bg-white rounded-md p-8 py-4 mt-8`}
`

const Button = ({ text }) => {
  const navigate = useNavigate();
  const navigateRoute = () => {
    navigate("/models");
  };
  return (
    <>
      <CustomButton
        onClick={navigateRoute}
      >
        {text}
      </CustomButton>
    </>
  )
}

export default Button
