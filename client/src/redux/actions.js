import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const apidata = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apidata.data;
    dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
  };
};

export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    const apidata = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const detail = apidata.data;
    dispatch({ type: GET_POKEMON_DETAIL, payload: detail });
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    const apidata = await axios.get("http://localhost:3001/types");
    const types = apidata.data;
    dispatch({ type: GET_ALL_TYPES, payload: types });
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: {},
  };
};
