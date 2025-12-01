import { useState } from 'react'
import './App.css'
import FortyGame from './fortygame.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FortyGame />
   </>
  )
}

export default App
