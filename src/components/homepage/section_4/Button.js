import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
      <button className='hover:bg-slate-200 text-black bg-white rounded-md p-8 py-4 mt-8'>
        {text}
      </button>
    </div>
  )
}

export default Button