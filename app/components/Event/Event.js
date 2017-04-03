import React from 'react'
import styles from './Event.css'
import moment from 'moment'
import renderHTML from 'react-render-html'
import cx from 'classnames'

const openDetails = (
  ev,
  onShowDetails,
  onSetActivePost,
  showDetails,
  id
) => {
  ev.preventDefault()
  if(!showDetails) {
    onShowDetails()
    setTimeout( () => {
      onSetActivePost(id)
    }, 500)
  } else {
    onSetActivePost(id)
  }
}

const Event = ({
  post,
  isActive,
  showDetails,
  onShowDetails,
  onSetActivePost
}) => {
  let showContent = null
  const eventClasses = cx({
      [styles.event]: true,
      [styles.activeEvent]: isActive
    }),
    contentClasses = cx({
      [styles.content]: true,
      [styles.activeContent]: isActive
    })

  if(isActive) showContent = renderHTML(post.content)

  return (
    <div className={ eventClasses }
      onClick={ (ev) => openDetails(
        ev,
        onShowDetails,
        onSetActivePost,
        showDetails,
        post.id) }>
      <div className={ styles.date }>
       { moment(post.date).format("MMMM YYYY") }
      </div>
      <div className={ styles.bullet }></div>
      <div id={ post.slug } className={ styles.title }>
        { post.title }
      </div>
      <div className={ contentClasses }>
        { showContent }
      </div>
    </div>
  )
}

export default Event
