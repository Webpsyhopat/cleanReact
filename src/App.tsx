import React from 'react'
import './scss/App.scss'


const App: React.FC = () => {


  const [text, setText] = React.useState<string>('WOW')


  return(
    <div className='App'>
      <h1>
        {text}
        !!! It works!
      </h1>

      <span onClick={() => { setText('LOL') }}>
        Click me
      </span>
    </div>
  )
}

export default App

