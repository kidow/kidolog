import React from 'react'
import './Input.scss'

const Input = ({ ...rest }) => {
  return (
    <div className="input__container">
      <input {...rest} />
    </div>
  )
}

export default Input
