import React from 'react'
import './Login.scss'
import { Input } from 'components/atoms'

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__input">
        <h2>로그인</h2>
        <Input placeholder="비밀번호 입력" type="password" autoFocus />
      </div>
    </div>
  )
}

export default Login
