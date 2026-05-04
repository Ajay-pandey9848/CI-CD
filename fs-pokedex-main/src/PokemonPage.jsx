import React from 'react';
import { Link } from 'react-router-dom';

const formatName = (name) => name.replace('-', ' ').toUpperCase();

const PokenomPage = ({ pokemon, previous, next }) => {
  if (!pokemon) return <div>No Pokémon data</div>;

  const primaryType = pokemon.types.find((type) => type.slot === 1);
  const typeName = primaryType ? primaryType.type.name : 'normal';

  const stats = [...pokemon.stats]
    .map((stat) => ({
      name: formatName(stat.stat.name),
      value: stat.base_stat,
    }))
    .reverse();

  const normalAbility = pokemon.abilities.find((ability) => !ability.is_hidden);
  const hiddenAbility = pokemon.abilities.find((ability) => ability.is_hidden === true);

  return (
    <div className={`pokemon-page pokemon-type-${typeName}`}>
      <div className="links">
        {previous && <Link to={`/pokemon/${previous.name}`}>Previous</Link>}
        <Link to="/">Home</Link>
        {next && <Link to={`/pokemon/${next.name}`}>Next</Link>}
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
  );
};

export default PokenomPage;