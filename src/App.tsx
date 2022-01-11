import React from 'react'
import './App.css'


const App = () => {


  const [text, setText] = React.useState<string>('WOW')


  return(
    <div className='App'>
      <h1>{text}!!! It works!</h1>
      <span onClick={()=> {setText('LOL')}}>Click me</span>
    </div>
  )
}

export default App

