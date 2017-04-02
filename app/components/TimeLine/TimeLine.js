import React from 'react'
import _ from 'lodash'
import styles from './TimeLine.css'
import renderHTML from 'react-render-html'
import moment from 'moment'

const TimeLine = ({
  timeline
}) => {
  return (
    <div className={ styles.timeLine }>
      { timeline.map( (year) => (
       <div className={ styles.yearWrapper }>
          <div className={ styles.yearEvents }>
           { year.months.map( (month) => (
             <div className={ styles.month }>
               { month.events.map( (event) => (
                 <div className={ styles.event }>
                   <div className={ styles.date }>
                    { moment(event.date).format("MMMM YYYY")}
                   </div>
                   <div className={ styles.bullet }></div>
                   <div className={ styles.title }>{event.title}</div>
                 </div>
               ))}
             </div>
           ))}
          </div>
          <div className={ styles.year }>{ year.year }</div>
       </div>
      ) )}
    </div>
  )
}

export default TimeLine

/*
timeline = [
  { year: "2016", events: [] }
  { year: "2005", events: [] }
]

<div>{ renderHTML(event.content) }</div>
*/
