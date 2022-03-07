import React, { useEffect, useState } from "react";
import { pokedexApi } from "../helpers/pokedexApi";

function CardPokemon({ ubicacion, datos }) {
  // const { ubicacion, datos} = generacion
  console.log(ubicacion);
  const [pokedex, setPokedex] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    let empieza;
    let termina;
    if (ubicacion == 1) {
      empieza = 1;
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
  }, []);

  console.log(pokedex);
  const indiceImagen = (index, sum) => {
    index += sum;
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
        {pokedex.datos.map((pokemon, index) => (
          <div className="col" key={index}>
            <div className="card h-100 border border-secondary ">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indiceImagen(
                  datos[ubicacion - 1],
                  index
                )}.png`}
                className="card-img-top "
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
