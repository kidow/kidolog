import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <a href="/">Kidolog</a>
        </div>
        <div className="header__buttons">버튼</div>
      </div>
      <div className="header__divider" />
    </div>
  )
}

export default Header
