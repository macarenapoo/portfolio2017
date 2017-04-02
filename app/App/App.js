import React from 'react'
import styles from './App.css'
import Header from 'components/Header'
import TimeLine from 'components/TimeLine'
import Footer from 'components/Footer'

const App = ({
  loader,
  posts,
  onLoadContent,
  onLoader
}) => {
  return (
    <div className={ styles.container }>
      <Header />
      <TimeLine />
      <Footer />
    </div>
  )
}

export default App;
