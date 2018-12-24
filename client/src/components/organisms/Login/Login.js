import React from 'react'
import './Login.scss'
import { Input } from 'components/atoms'

const Login = ({ password, onChangePassword, onKeyPress }) => {
  return (
    <div className="login__container">
      <div className="login__input">
        <h2>로그인</h2>
        <Input
          onChange={onChangePassword}
          value={password}
          placeholder="비밀번호 입력"
          type="password"
          autoFocus
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  )
}

export default Login
