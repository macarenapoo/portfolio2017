import React from 'react'
import styles from './Footer.css'

const Footer = () => (
  <div className={ styles.footer }>
    <p>Interested in working with me? Drop me a line!</p>
    <a className={ styles.h2 } href="mailto:m@macarenapoo.com">m@macarenapoo.com</a>
    <div className={ styles.socialIcons }>
      <a className={ styles.email } href="mailto:m@macarenapoo.com" target="_new"></a>
      <a className={ styles.linkedIn } href="https://ca.linkedin.com/in/macarena-poo-291b2670" target="_new"></a>
      <a className={ styles.twitter } href="https://twitter.com/macarenapoo" target="_new"></a>
    </div>
  </div>
)

export default Footer