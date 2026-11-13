
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const App = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then(res => {
        const pokemon = res.data.results.map(p => ({
          name: p.name,
          id: Number(p.url.split('/').filter(Boolean).pop())
        }))
        setPokemonList(pokemon)
      })
      .catch(() => setError(true))
  }, [])

  if (error) {
    return <div data-testid="error">Error fetching data</div>
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<PokemonList pokemonList={pokemonList} />}
      />
      <Route
        path="/pokemon/:name"
        element={<PokemonPage />}
      />
    </Routes>
  )
}

export default App
