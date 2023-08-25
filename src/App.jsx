import { useState } from 'react'
import './App.css'

//components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'

function App() {

  const { loading } = useGlobalContext()

  if(loading) {
    return (
      <div classname='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
