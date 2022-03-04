import React, { useEffect, useState } from "react";
import { pokedexApi } from "./helpers/pokedexApi";

export const App = () => {
  const [pokedex, setPokemondex] = useState({
    loading: true,
    pokemones: [],
  });
    let listPokemon = pokedex.pokemones.map((pokemon, index) => {
        let id 
        if (index < 9) {
            id='00'+ (index+1)
        } else if (index < 99) {
            id='0'+(index+1)
        } else {
            id=index+1
        }

        pokemon = {
            id: id,
            name: pokemon.name,
            url: pokemon.url
      }
        return pokemon
    })
    console.log(listPokemon)
  useEffect(() => {
    pokedexApi().then((respuesta) => {
      setPokemondex({
        loading: false,
        pokemones: respuesta,
      });
    });
  }, []);

  let imagen =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-5">
          <h1>Pokedex</h1>
        </div>
      </div>
          <div className="row row-cols-1 row-cols-md-6 g-4">
              {listPokemon.map((pokemon) => (
              
        <div className="col">
          <div className="card">
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
              <h5 className="card-title">{pokemon.id} - {pokemon.name}</h5>
              
            </div>
          </div>
        </div>
              ))}
        {/* <table className="table">
            <thead>
              <tr>
                <th>#Rank</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
                
              {listPokemon.map((pokemon, index) => (
                <tr key={index}>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name}</td>

                  <td>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                    ></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
      </div>
    </div>
  );
};
