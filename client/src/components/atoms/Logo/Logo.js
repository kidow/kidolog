import React from 'react'
import './Logo.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Logo = ({ theme }) => {
  return (
    <div className="logo__container">
      <Link className={theme} to="/">
        Kidolog
      </Link>
    </div>
  )
}

Logo.propTypes = {
  theme: PropTypes.string
}

Logo.defaultProps = {
  theme: ''
}

export default Logo
