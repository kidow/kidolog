import React from 'react'
import './Input.scss'

const Input = ({ theme, ...rest }) => {
  return <input className={theme} autoComplete="off" {...rest} />
}

export default Input
