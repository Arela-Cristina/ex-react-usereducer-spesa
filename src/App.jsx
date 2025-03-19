import { useState } from 'react'
import './App.css'
import ListaDellaSpessa from './pages/Lista-Spessa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaDellaSpessa />
    </>
  )
}

export default App
