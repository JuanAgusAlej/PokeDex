export const pokedexApi = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

 
    const {results} = await resp.json()
    
  return results
};
