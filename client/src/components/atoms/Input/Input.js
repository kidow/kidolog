import React from 'react'
import './Input.scss'

const Input = ({ theme, ...rest }) => {
  return <input className={theme} {...rest} />
}

export default Input
