const { Router } = require("express");
const {
  getPokemonsHandler,
  getPokemonHandler,
  createPokemonHandler,
  updatePokemonsHandler,
  deletePokemonsHandler,
  rutaDePrueba,
} = require("../handlers/pokemonsHandlers");

const {
  validadorCreate,
  validadorUpdate,
} = require("../middlewares/validadores");
// ?Acá están definidas las rutas de pokemons:
const pokemonRouter = Router();

// !ESTA RUTA ES DE PRUEBA:
pokemonRouter.get("/pokemondb", rutaDePrueba);

pokemonRouter.get("/", getPokemonsHandler);

pokemonRouter.get("/:idPokemon", getPokemonHandler);

pokemonRouter.post("/", validadorCreate, createPokemonHandler);

pokemonRouter.put("/", validadorUpdate, updatePokemonsHandler);

pokemonRouter.delete("/:id/delete", deletePokemonsHandler);

module.exports = pokemonRouter;
