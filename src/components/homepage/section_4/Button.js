import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();
  const navigateRoute = () => {
    navigate("/models");
  };
  return (
    <div>
      <button
      className='hover:bg-slate-200 text-black bg-white rounded-md p-8 py-4 mt-8'
        onClick={navigateRoute}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
