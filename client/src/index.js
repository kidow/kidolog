import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import 'lib/styles/index.scss'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import penderMiddleware from 'redux-pender'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(penderMiddleware()))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
