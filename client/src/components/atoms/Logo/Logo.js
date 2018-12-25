import React from 'react'
import './Logo.scss'
import PropTypes from 'prop-types'

const Logo = ({ big }) => {
  return (
    <div className="logo">
      <a className={big ? 'big' : ''} href="/">
        Kidolog
      </a>
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
