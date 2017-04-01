import { React, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'reducer.js'
import App from './App.js'

const mapStateToProps = (state) => ({
  loader: state.loader
})

const mapDispatchToProps = (dispatch) => ({
   onLoadContent: () => dispatch({type: Actions.LOAD_CONTENT, value: false}),
   onLoader: () =>dispatch({type: Actions.LOAD_CONTENT, value: true})
 })

export default connect(mapStateToProps, mapDispatchToProps)(App)
