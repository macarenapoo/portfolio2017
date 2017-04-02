import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as Reducer from './reducer'
import App from './App'
import * as CosmicAPI from './cosmicAPI'

require('../src/main.css')

const store = createStore(
  Reducer.reducer,
  Reducer.initialState,
  applyMiddleware(thunk)
)

store.dispatch(CosmicAPI.loadPosts())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("app")
)
