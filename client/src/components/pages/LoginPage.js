import React from 'react'
import { LoginContainer } from 'containers/organisms'
import PropTypes from 'prop-types'

const LoginPage = ({ history }) => {
  return <LoginContainer history={history} />
}

LoginPage.propTypes = {
  history: PropTypes.object
}

export default LoginPage
