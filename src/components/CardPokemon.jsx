import React from "react";

function CardPokemon(props) {
  const { pokedex } = props;

    const { id, name } = pokedex;
    
    console.log(props)
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {pokedex.map((pokemon) => (
          <div className="col" key={pokemon.id}>
            <div className="card">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {pokemon.id} - {pokemon.name}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row row-cols-1 row-cols-md-6 g-4">
          {pokedex.map((pokemon) => (    
              
        <div className="col" key={pokemon.id}>
          <div className="card">
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
              <h5 className="card-title">{pokemon.id} - {pokemon.name}</h5>
              
            </div>
          </div>
        </div>
              ))}
    </div> */}
    </div>
  );
}

export default CardPokemon;
