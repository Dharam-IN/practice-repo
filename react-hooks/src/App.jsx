import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hook1 from './components/Hook1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hook1/>
    </>
  )
}

export default App
