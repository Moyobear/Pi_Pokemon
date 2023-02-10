const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { itemFilter } = require("./pokemonsControllers");

// *Este controller permite realizar una consulta a la Api para traerme los pokemon por tipo y guardarlos enla base de datos:
const searchByType = async () => {
  const request = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0")
    .then((res) => res.data.results);

  const subRequest = request.map((item) => axios.get(item.url));
  const urls = await axios.all(subRequest);
  const details = urls.map((item) => item.data);

  // *apiPokemons es el array de objetos ya estructurado que se va a la base de datos:
  const apiPokemons = details
    .map((item) => itemFilter(item))
    .map((item) => item.types)
    .flat();

  // *Guardamos todos los tipos obtenidos de la request (muchos se repiten):
  // let innerDB = await apiPokemons.map((item) =>
  //   Type.findOrCreate({ where: { naturaleza: item } })
  // );

  // *Ó tambien podemos guardar valores únicos... (que no esten repetidos):
  const clearTypes = new Set(apiPokemons);
  clearTypes.forEach(function (item) {
    Type.findOrCreate({ where: { naturaleza: item } });
  });

  const pokemonDatabase = await Type.findAll();
  return pokemonDatabase;
};

module.exports = {
  searchByType,
};
