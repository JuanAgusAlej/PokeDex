import React from "react";

function CardPokemon(props) {
  const { pokedex, empieza } = props

  console.log(pokedex);
  const indiceImagen = (index, sum) => {
    if (index < 9) {
      return "00" + (index + 1 + sum);
    } else if (index < 99) {
      return "0" + (index + 1 + sum);
    } else {
      return index + 1 + sum;
    }
 
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {pokedex.map((pokemon,index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indiceImagen(
                  empieza, index
                )}.png`}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body">
                        <p className="card-title">#{indiceImagen(empieza,index)} - {pokemon.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPokemon;