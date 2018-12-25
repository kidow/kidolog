import React from 'react'
import './Input.scss'
import PropTypes from 'prop-types'

const Input = ({ theme, ...rest }) => {
  return <input className={theme} autoComplete="off" {...rest} />
}

Input.propTypes = {
  theme: PropTypes.string
}

Input.defaultProps = {
  theme: ''
}

export default Input
