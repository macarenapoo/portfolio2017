import React from 'react'
import styles from './Event.css'
import moment from 'moment'
import renderHTML from 'react-render-html'
import cx from 'classnames'
import * as Icons from 'components/Icons/Icons.js'

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

const closeDetails = (
  onCloseDetails,
  onSetActivePost
) => {
  onSetActivePost("0"),
  onCloseDetails()
}

const Event = ({
  post,
  isActive,
  showDetails,
  onShowDetails,
  onCloseDetails,
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
    }),
    closeClasses = cx({
      [styles.close]: true,
      [styles.closeActive]: isActive
    })

  if(isActive) showContent = renderHTML(post.content)

  return (
    <div className={ eventClasses }>
      <div onClick={ (ev) => openDetails(
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
      </div>
      <div onClick={ () => closeDetails(
          onCloseDetails,
          onSetActivePost
        ) } className={ closeClasses }>
        { Icons.Close }
      </div>
      <div className={ contentClasses }>
        { showContent }
      </div>
    </div>
  )
}

export default Event
