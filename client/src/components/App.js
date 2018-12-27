import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, PostPage, EditorPage, NotFoundPage, LoginPage } from 'components/pages'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

class App extends Component {
  componentDidMount() {
    this.checkLogged()
  }

  checkLogged = async () => {
    const { AuthActions } = this.props
    AuthActions.check()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/tag/:tag" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/editor" component={EditorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(App)
