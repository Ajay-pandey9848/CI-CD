import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import PokemonPage from './PokemonPage'

const App = () => {
  const [, setPokemon] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then(res => setPokemon(res.data.results))
      .catch(() => setError(true))
  }, [])

  if (error) {
    return <div data-testid="error">Error fetching data</div>
  }

  return (
    <Routes>
      <Route path="/" element={<div>Home page (list of Pokémon goes here)</div>} />
      <Route path="/pokemon/:name" element={<PokemonPage />} />
    </Routes>
  )
}

export default App
