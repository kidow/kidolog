import React from 'react'
import './Tag.scss'
import { Link } from 'react-router-dom'

const Tag = ({ children, ...rest }) => {
  return (
    <Link className="tag" {...rest}>
      {children}
    </Link>
  )
}

export default Tag
