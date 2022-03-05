import React, { useEffect, useState } from "react";
import CardPokemon from "./components/CardPokemon";

import { pokedexApi } from "./helpers/pokedexApi";

export const App = () => {
  const [pokedex, setPokedex] = useState({
    loading: true,
    datos: [],
  });

  let primeraGeneracionFin = 151;
  let segundaaGeneracionFin = 251;
  let terceraGeneracionFin = 386;
  let cuartaGeneracionFin = 493;
  let quintaGeneracionFin = 649;
  let sextaGeneracionFin = 721;
  let septimaGeneracionFin = 809;
  let octavaGeneracionFin = 898;

  useEffect(() => {
    // obtenerPokemones();
    pokedexApi(segundaaGeneracionFin,(terceraGeneracionFin-segundaaGeneracionFin)).then((respuesta) => {
      setPokedex({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-5">
          <h1>Pokedex</h1>
        </div>
      </div>
      {pokedex.loading ? (
        <h3>Cargando...</h3>
      ) : (
          <CardPokemon pokedex={pokedex.datos}
            empieza={251}/>
      )}
    </div>
  );
};