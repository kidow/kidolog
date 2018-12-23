import React from 'react'
import './Header.scss'
import { Button } from 'components/atoms'

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <a href="/">Kidolog</a>
        </div>
        <Button>글쓰기</Button>
      </div>
      <div className="header__divider" />
    </div>
  )
}

export default Header
