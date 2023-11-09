import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'

const Button = ({ name, id }) => {
  // Navigate
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
    <div className='absolute z-[400]'>
      <button className='bg-white text-black justify-center w-96 text-sm py-3 mb-4 rounded-md ' onClick={navigateRoute1}>{`Build your ${name}`}</button>
      <button className='border-white text-white border justify-center w-96 text-sm py-3 rounded-md z-[400]' onClick={navigateRoute2}>{`Compare Models`}</button>
    </div>
  )
}

export default Button
