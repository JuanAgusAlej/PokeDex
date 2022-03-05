// export const pokedexApi = async () => {
//   const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251");

//   const { results } = await resp.json();

//   return results;
// };
export const pokedexApi = async (offset, limit) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

  const { results } = await resp.json();

  return results;
};
