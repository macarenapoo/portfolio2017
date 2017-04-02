import React from 'react'
import styles from './Header.css'

const Header = () => (
  <div className={ styles.header }>
    <div className={ styles.logoWrapper }>
      <img src="images/macarenapoo2017.png"/>
    </div>
    <div className={ styles.intro }>
      <p className={ styles.h2 }>Hi! I'm Macarena, a UX Designer and Front End Developer.</p>
      <p>Being a hybrid designer and developer allows me to consider all aspects of a problem. I understand users and how they will interact and the technology that makes it possible.</p>
    </div>
  </div>
)

export default Header
