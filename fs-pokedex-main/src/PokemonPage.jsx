import { Link } from 'react-router-dom'

const PokemonPage = ({ pokemon, previous, next }) => {
  return (
    <div>
      <div data-testid="stats">
        {pokemon.stats.map(s => (
          <div key={s.name}>
            {s.name} {s.value}
          </div>
        ))}
      </div>

      <div>
        {pokemon.abilities.map(a => (
          <div key={a}>{a}</div>
        ))}
      </div>

      <div>
        {previous && (
          <Link to={`/pokemon/${previous}`} data-testid="previous-link">
            Previous
          </Link>
        )}

        {next && (
          <Link to={`/pokemon/${next}`} data-testid="next-link">
            Next
          </Link>
        )}
      </div>
    </div>
  )
}

export default PokemonPage