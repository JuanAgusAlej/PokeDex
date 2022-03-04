 const pokedexApi = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

 
    const {results} = await resp.json()
    
  return results
};

export const armarListPokemon = () => {

  let listPokemon = []
  pokedexApi().then((respuesta) => {
    respuesta.map((pokemon, index) => {
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
      listPokemon.push(pokemon)
  })
  });
  
  return listPokemon;

}
