import React from 'react'
import styles from './App.css'
import Header from 'components/Header'
import TimeLine from 'components/TimeLine'

const App = ({
  loader,
  posts,
  onLoadContent,
  onLoader
}) => {
  console.log(posts)
  return (
    <div className={ styles.container }>
      <Header />
      <TimeLine />
    </div>
  )
}

export default App;
