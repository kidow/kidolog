import React from 'react'
import './Logo.scss'

const Logo = ({ big }) => {
  return (
    <div className="logo">
      <a className={big ? 'big' : ''} href="/">
        Kidolog
      </a>
    </div>
  )
}

export default Logo
