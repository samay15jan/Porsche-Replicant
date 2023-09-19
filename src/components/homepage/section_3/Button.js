import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
      <button className='bg-white text-black justify-center w-full text-sm py-3 mb-4 rounded-md'>{`Build your ${name}`}</button>
      <button className='border-white text-white border justify-center w-full text-sm py-3 rounded-md'>{`All ${name} models`}</button>
    </div>
  )
}

export default Button