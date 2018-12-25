import React from 'react'
import './IconButton.scss'
import PropTypes from 'prop-types'

/* eslint-disable */
const IconButton = ({ IconName, onClick, children, ...rest }) => {
  return (
    <div className="icon-button" onClick={onClick}>
      <IconName className="icon" {...rest} />
      {children}
    </div>
  )
}

IconButton.propTypes = {
  IconName: PropTypes.element,
  onClick: PropTypes.func,
  children: PropTypes.node
}

IconButton.defaultProps = {
  IconName: React.createElement('svg'),
  onClick: () => null
}

export default IconButton
