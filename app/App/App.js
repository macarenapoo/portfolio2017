import React from 'react'
import styles from './App.css'

const App = ({ loader, onLoadContent, onLoader }) => {
  if( loader ) {
    return (
      <div>
        Loading...
        <button onClick={ (ev) => onLoadContent() }>Load</button>
      </div>
    )
  }else{
    return <div>Hello World!<button onClick={ (ev) => onLoader() }>Load</button></div>;
  }
}

export default App;
