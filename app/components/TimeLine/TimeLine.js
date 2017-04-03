import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import styles from './TimeLine.css'
import cx from 'classnames'

import Event from 'components/Event'

const TimeLine = ({
  timeline,
  showDetails,
  onToggleDetails
}) => {
  const wrapperClasses = cx({
    [styles.yearWrapper]: true,
    [styles.yearWrapperDetails]: showDetails
  })

  return (
    <div className={ styles.timeLine }>
      { timeline.map( (year) => (
       <div className={ wrapperClasses }>
          <div className={ styles.yearEvents }>
           { year.months.map( (month) => (
             <div className={ styles.month }>
               { month.events.map( (event) => (
                 <Event post={event}/>
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


*/
