import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as Reducer from './reducer'
import App from './App'


const store = createStore(Reducer.reducer, Reducer.initialState)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("app")
)
