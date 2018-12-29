import React from 'react'
import styles from './Button.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const DivButton = ({ children, ...rest }) => <div {...rest}>{children}</div>

const Button = ({ children, to, onClick, theme }) => {
  const Element = to ? Link : DivButton
  return (
    <Element to={to} onClick={onClick} className={cx('button', theme)}>
      {children}
    </Element>
  )
}

DivButton.propTypes = {
  children: PropTypes.node
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.string
}

Button.defaultProps = {
  to: null,
  onClick: () => null,
  theme: 'default'
}

export default Button
