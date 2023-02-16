import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const apidata = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apidata.data;
    dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
  };
};

export const getPokemonDetail = (detailId) => {
  return async function (dispatch) {
    const apidata = await axios.get(
      `http://localhost:3001/pokemons/${detailId}`
    );
    const detail = apidata.data;
    dispatch({ type: GET_POKEMON_DETAIL, payload: detail });
  };
};
