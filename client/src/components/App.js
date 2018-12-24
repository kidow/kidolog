import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, PostPage, EditorPage, NotFoundPage, LoginPage } from 'components/pages'

class App extends Component {
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

export default App
