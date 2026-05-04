import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import PokemonPage from './PokemonPage'

const App = () => {
    // eslint-disable-next-line no-unused-vars
  const match = useMatch('/pokemon/:name')
  // pokemonName removed because it was unused

  return (
    <Routes>
      <Route path="/" element={<div>Home page (list of Pokémon goes here)</div>} />
      <Route path="/pokemon/:name" element={<PokemonPage />} />
    </Routes>
  )
}

export default App