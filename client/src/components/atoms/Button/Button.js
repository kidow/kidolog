import React from 'react'
import styles from './Button.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const DivButton = ({ children, ...rest }) => <div {...rest}>{children}</div>

const Button = ({ children, to, onClick, theme = 'default' }) => {
  const Element = to ? Link : DivButton
  return (
    <Element to={to} onClick={onClick} className={cx('button', theme)}>
      {children}
    </Element>
  )
}

export default Button
