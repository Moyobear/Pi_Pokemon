import {
  CLEAR_DETAIL,
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMON_DETAIL,
  CLEAR_HOME,
  SEARCH_BY_NAME,
  DELETE_POKEMON,
  FILTER_TYPE,
  FILTER_ORIGEN,
  ORDEN_ALFABETICO,
  ORDEN_ATAQUE,
} from "./actions";

const initialState = {
  master: [],
  pokemons: [],
  pokemonsDb: [],
  detail: {},
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        master: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_HOME:
      return {
        ...state,
        pokemons: state.master,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case DELETE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter((item) => item.id !== action.payload),
      };
    case FILTER_TYPE:
      const copyType = [...state.master];
      const filterType =
        action.payload === "all"
          ? state.master
          : copyType.filter((item) => item.type.includes(action.payload));
      return {
        ...state,
        pokemons: filterType,
      };
    case FILTER_ORIGEN:
      const copyOrigen = [...state.master];
      const filterOrigen =
        action.payload === "false"
          ? copyOrigen.filter((item) => !item.inDataBase)
          : action.payload === "true"
          ? copyOrigen.filter((item) => item.inDataBase)
          : state.master;

      return {
        ...state,
        pokemons: filterOrigen,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
