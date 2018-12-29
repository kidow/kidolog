import React from 'react'
import './Tag.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Tag = ({ children, ...rest }) => {
  return (
    <Link className="tag__container" {...rest}>
      {children}
    </Link>
  )
}

Tag.propTypes = {
  children: PropTypes.node
}

export default Tag
