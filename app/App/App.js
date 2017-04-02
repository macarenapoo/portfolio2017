import React from 'react'
import styles from './App.css'

const App = ({
  loader,
  posts,
  onLoadContent,
  onLoader
}) => {
  console.log(posts)
  return (
    <ul>
      { posts.map((post) => {
        return (  <li>{post.title}</li>)
      }) }
    </ul>
  )
}

export default App;
