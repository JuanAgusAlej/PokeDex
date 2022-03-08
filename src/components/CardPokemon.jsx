import React, { useEffect, useState } from "react";
import { indiceImagen } from "../helpers/imagenPokemon";
import { pokedexApi } from "../helpers/pokedexApi";
import "../css/style.css"


function CardPokemon({ ubicacion, datos }) {
  
  const [pokedex, setPokedex] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    let empieza;
    let termina;
    if (ubicacion === 1) {
      empieza = 0;
      termina = 151;
    } else {
      empieza = datos[ubicacion - 1];
      termina = datos[ubicacion] - datos[ubicacion - 1];
    }

    pokedexApi(empieza, termina).then((respuesta) => {
      setPokedex({
        loading: false,
        datos: respuesta,
      });
    });
  }, [pokedex]);

  
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 ">
        {pokedex.datos.map((pokemon, index) => (
          <div className="col  cardPokemon"  key={index}>
            <div className="card h-100 pokemon border border-secondary ">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indiceImagen(
                  datos[ubicacion - 1],
                  index
                )}.png`}
                className="card-img-top pokemon "
                alt={pokemon.name}
              />
              <div className="card-body">
                <p className="card-title">
                  #{indiceImagen(datos[ubicacion - 1], index)} - {pokemon.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPokemon;
