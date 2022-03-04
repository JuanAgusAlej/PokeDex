import React from "react";

function CardPokemon({ pokedex }) {
  console.log(pokedex);

  const indiceImagen = (index) => {
    if (index < 9) {
      return "00" + (index + 1);
    } else if (index < 99) {
      return "0" + (index + 1);
    } else {
      return index + 1;
    }
 
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {pokedex.map((pokemon, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indiceImagen(
                  index
                )}.png`}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body">
                        <p className="card-title">#{indiceImagen(index)} - {pokemon.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPokemon;