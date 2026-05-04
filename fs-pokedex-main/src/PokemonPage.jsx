import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const formatName = (name) => name.replace('-', ' ').toUpperCase()

const PokemonPage = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [name])

  if (!pokemon) return <div>Loading...</div>

  const primaryType = pokemon.types.find((type) => type.slot === 1)
  const typeName = primaryType ? primaryType.type.name : 'normal'

  const stats = [...pokemon.stats]
    .map((stat) => ({
      name: formatName(stat.stat.name),
      value: stat.base_stat,
    }))
    .reverse()

  const normalAbility = pokemon.abilities.find((ability) => !ability.is_hidden)
  const hiddenAbility = pokemon.abilities.find((ability) => ability.is_hidden === true)

  return (
    <div className={`pokemon-page pokemon-type-${typeName}`}>
      <div className="links">
        <Link to="/">Home</Link>
      </div>

      <div
        className="pokemon-image"
        style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}
      />

      <h1>{formatName(pokemon.name)}</h1>
      <p>Type: {typeName}</p>

      <div className="abilities">
        <h3>Abilities</h3>
        <p>Normal: {normalAbility ? normalAbility.ability.name : 'None'}</p>
        <p>Hidden: {hiddenAbility ? hiddenAbility.ability.name : 'None'}</p>
      </div>

      <div className="stats">
        <h3>Base Stats</h3>
        <ul>
          {stats.map((stat) => (
            <li key={stat.name}>
              {stat.name}: {stat.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PokemonPage