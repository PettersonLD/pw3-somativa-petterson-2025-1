import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BookCard from './BookCard'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>PW3-WebApp-Livraria</h1>
        <BookCard
        Titulo = "As Cavernas de Aço"
        Autor = "Isaac Azimov"
        />
      </div>
    </>
  )
}

export default App
