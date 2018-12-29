import React from 'react'
import './Header.scss'
import { Button, Logo } from 'components/atoms'
import PropTypes from 'prop-types'

const Header = ({ logged }) => {
  return (
    <div className="header">
      <div className="header__content">
        <Logo />
        {logged && <Button to="/editor">새 포스트</Button>}
      </div>
      <div className="header__divider" />
    </div>
  )
}

Header.propTypes = {
  logged: PropTypes.bool
}

export default Header
