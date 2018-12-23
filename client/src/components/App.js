import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, PostPage, EditorPage, NotFoundPage } from 'components/pages'
import LoginPage from './pages/LoginPage'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/page/:page" component={HomePage} />
        <Route path="/tag/:tag/:page?" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/editor" component={EditorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default App
