import { React, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'reducer.js'
import TimeLine from './TimeLine.js'
import _ from 'lodash'
import moment from 'moment'

function getDate(post) {
  var date = _.find( post.metafields, (obj) =>  obj.key === 'date')
  if (date) return date.value

  return null
}

function formatTimeLine(posts) {
  console.log(posts)
  const orderedEvents = _.chain(posts)
      .map((post) => ({
        type: post.type_slug,
        title: post.title,
        date: getDate(post),
        content: post.content}))
      .orderBy(['date'],['desc'])
      .value(),
    years = _.map(orderedEvents,
      (event) => parseInt(moment(event.date).format("Y"))),
    firstYear = _.min(years),
    lastYear = _.max(years),
    timeline = []

  for( let i = firstYear; i <= lastYear; i++) {
    timeline.push({
      year: i,
      events: _.filter( orderedEvents,
        (event) => parseInt(moment(event.date).format("Y")) === i )
    })
  }

  return _.orderBy(timeline, ['year'], ['desc'])
}

const mapStateToProps = (state) => ({
  timeline: formatTimeLine(state.posts)
})

const mapDispatchToProps = (dispatch) => ({
   onLoadContent: () => dispatch({type: Actions.LOAD_CONTENT, value: false})
 })

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)
