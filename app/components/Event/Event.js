import React from 'react'
import styles from './Event.css'
import moment from 'moment'
import renderHTML from 'react-render-html'
import cx from 'classnames'
import * as Icons from 'components/Icons/Icons.js'

const Event = ({
  post,
  isActive,
  activePost,
  showDetails,
  onShowDetails,
  onCloseDetails,
  onSetActivePost
}) => {
  let showContent = null,
    eventTypeIcon = ""

  const eventClasses = cx({
      [styles.activeEvent]: isActive,
      [styles.showDetails]: showDetails,
      [styles.projectType]: post.type === "projects",
      [styles.eventType]: post.type === "events"
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
  if(post.type === "events") {
    let icon = _.find( post.metafields, (obj) =>  obj.key === 'icon')

    if(icon && icon.url) {
      eventTypeIcon = (<img className={styles.typeIcon} src={icon.url} />)
    }

  }

  const handleScroll = (ev) => {
    const clickTop = ev.target.offsetParent.offsetTop,
      activeTop = document.getElementById(activePost).offsetParent.offsetTop,
      activeHeight =  document.getElementById(activePost).offsetParent.offsetHeight,
      scrollDiff =  clickTop - activeHeight

    if (clickTop > activeTop) document.body.scrollTop = scrollDiff

  }

  // event created to close details on mobile
  const toggleDetails = (ev) => {
    if(isActive && showDetails) {
      closeDetails()
    } else {
      openDetails(ev)
    }
  }

  const closeDetails = () => {
    onSetActivePost("0"),
    onCloseDetails()
  }

  const openDetails = (ev) => {
    ev.preventDefault()
    if(!showDetails) {
      onShowDetails()
      setTimeout( () => {
        onSetActivePost(post.id)
      }, 500)
    } else {
      handleScroll(ev)
      onSetActivePost(post.id)
    }
  }

  return (
    <div className={ eventClasses }>
      <div onClick={ (ev) => toggleDetails(ev) }>
        <div className={ styles.date }>
         { moment(post.date).format("MMMM YYYY") }
        </div>
        {eventTypeIcon}
        <div className={ styles.bullet }></div>
        <div id={ post.id } className={ styles.title }
          onClick={ (ev) => toggleDetails(ev) }>
          { post.title }
        </div>
      </div>
      <div onClick={ () => closeDetails() } className={ closeClasses }>
        { Icons.Close }
      </div>
      <div className={ contentClasses }>
        { showContent }
      </div>
    </div>
  )
}

export default Event
