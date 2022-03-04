import React, { useEffect, useState } from "react";
import CardPokemon from "./components/CardPokemon";
import { armarListPokemon, pokedexApi } from "./helpers/pokedexApi";

export const App = () => {
  const [pokedex, setPokemondex] = useState([]);

  useEffect(() => {
    let listPokemon = armarListPokemon();
    setPokemondex(listPokemon);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-5">
          <h1>Pokedex</h1>
        </div>
      </div>
      <CardPokemon pokedex={pokedex} />
    </div>
  );
};
