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
  // get the relevant information for each event
  const orderedEvents = _.chain(posts)
      .map((post) => ({
        id: post._id,
        type: post.type_slug,
        title: post.title,
        slug: post.slug,
        date: getDate(post),
        content: post.content}))
      .orderBy(['date'],['desc'])
      .value(),
    // get the range of years for the data set
    years = _.map(orderedEvents,
      (event) => parseInt(moment(event.date).format("Y"))),
    firstYear = _.min(years),
    lastYear = _.max(years),
    timeline = []

  // get the events per year
  for( let i = firstYear; i <= lastYear; i++) {
    const yearEvents = _.filter( orderedEvents,
      (event) => parseInt(moment(event.date).format("Y")) === i )
    let monthEvents = []

    // divide the events per month (for styling purposes)
    for( let j = 12; j >= 1; j-- ) {
      monthEvents.push({
        month: moment(j, "M").format("MMMM"),
        events: _.filter( yearEvents,
          (event) => parseInt(moment(event.date).format("M")) === j)
      })
    }

    timeline.push({
      year: i,
      months: monthEvents
    })
  }

  return _.orderBy(timeline, ['year'], ['desc'])
}

const mapStateToProps = (state) => ({
  timeline: formatTimeLine(state.posts),
  showDetails: state.showDetails
})

const mapDispatchToProps = (dispatch) => ({
   onLoadContent: () => dispatch({type: Actions.LOAD_CONTENT, value: false}),

 })

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)
