import React from 'react'
import Header from './Header'
import Background from './Background'

const Section_1 = ({ onClick }) => {
  return (
    <div>
      <Header onClick={onClick} />
      <Background />
    </div>
  )
}

export default Section_1