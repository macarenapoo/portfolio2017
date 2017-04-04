import { React } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'reducer.js'
import Event from './Event.js'

const mapStateToProps = (state, props) => ({
  isActive: state.activePost === props.post.id && state.showDetails,
  activePost: state.activePost,
  showDetails: state.showDetails
})

const mapDispatchToProps = (dispatch) => ({
  onShowDetails: (id) => dispatch({
    type: Actions.SHOW_DETAILS
  }),
  onCloseDetails: () => dispatch({
    type: Actions.CLOSE_DETAILS
  }),
  onSetActivePost: (id) => dispatch({
    type: Actions.SET_ACTIVE_POST,
    postID: id
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)
