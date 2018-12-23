import React from 'react'
import './IconButton.scss'

const IconButton = ({ IconName, children, ...rest }) => {
  return (
    <div className="icon-button">
      <IconName className="icon" {...rest} />
      {children}
    </div>
  )
}

export default IconButton
