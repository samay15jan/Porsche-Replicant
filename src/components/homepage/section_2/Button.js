import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Button = ({ onclick }) => {
  return (
    <div>
        <button className='bg-neutral-500 bg-opacity-10 text-slate-200 hover:bg-opacity-90 rounded' onClick={onclick}>
            <ArrowForwardOutlinedIcon/>
        </button>
    </div>
  )
}

export default Button