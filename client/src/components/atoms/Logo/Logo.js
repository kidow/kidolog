import React from 'react'
import './Logo.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Logo = ({ big }) => {
  return (
    <div className="logo">
      <Link className={big ? 'big' : ''} to="/">
        Kidolog
      </Link>
    </div>
  )
}

Logo.propTypes = {
  big: PropTypes.bool
}

Logo.defaultProps = {
  big: false
}

export default Logo
