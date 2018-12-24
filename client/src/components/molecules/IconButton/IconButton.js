import React from 'react'
import './IconButton.scss'

/* eslint-disable */
const IconButton = ({ IconName, onClick, children, ...rest }) => {
  return (
    <div className="icon-button" onClick={onClick}>
      <IconName className="icon" {...rest} />
      {children}
    </div>
  )
}

export default IconButton
