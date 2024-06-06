import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import PriceOptions from './Components/Price-Options/PriceOptions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
