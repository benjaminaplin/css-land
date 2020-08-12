import React from 'react'

const Footer = ({parallax}) => {
  return (
    <div className={`${parallax ? 'parallax' : ''} footer`}>
      Fixed gear hot chicken dharma. Bahn mi <strong>beer</strong>. taco
      sneaker.
    </div>
  )
}

export default Footer
