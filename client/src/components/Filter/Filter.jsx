import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterType,
  filterOrigen,
  ordenAlfabetico,
  ordenAtaque,
  clearHome,
} from "../../redux/actions";
import style from "./Filter.module.css";

export default function Filter({ active }) {
  const dispatch = useDispatch();
  const [reset, setReset] = useState();

  function handlerFilter(e) {
    const { name, value } = e.target;
    if (name === "Tipo") {
      dispatch(filterType(value));
      setReset(value);
    }
    if (name === "Origen") {
      dispatch(filterOrigen(value));
      setReset(value);
    }
    if (name === "Alfabeto") {
      dispatch(ordenAlfabetico(value));
      setReset(value);
    }
    if (name === "Ataque") {
      dispatch(ordenAtaque(value));
      setReset(value);
    }
  }

  function resetFilter(e) {
    setReset("");
    dispatch(clearHome());
  }

  return (
    <div
      className={active ? style.containerFilterActive : style.containerFilter}
    >
      <div className={style.filterByType}>
        <span className={style.segmento}>Selecciona el Tipo:</span>
        <select
          name="Tipo"
          className={style.selectorType}
          onChange={(e) => handlerFilter(e)}
        >
          <option value="">Selecciona...</option>
          <option value="all">Todos</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="water">Water</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="normal">Normal</option>
          <option value="bug">Bug</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="fighting">Fighting</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="ice">Ice</option>
          <option value="ghost">Ghost</option>
          <option value="fairy">Fairy</option>
        </select>
      </div>

      <div className={style.filterByType}>
        <span className={style.segmento}>Selecciona el Origen:</span>
        <select
          name="Origen"
          className={style.selectorType}
          onChange={(e) => handlerFilter(e)}
        >
          <option value="">Selecciona...</option>
          <option value="all">Todos</option>
          <option value="false">Api</option>
          <option value="true">Mis Pokemons</option>
        </select>
      </div>

      <div className={style.filterByType}>
        <span className={style.segmento}>Ordenar Alfabeticamente:</span>
        <select
          name="Alfabeto"
          className={style.selectorType}
          onChange={(e) => handlerFilter(e)}
        >
          <option value="">Selecciona...</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      <div className={style.filterByType}>
        <span className={style.segmento}>Ordenar por Ataque:</span>
        <select
          name="Ataque"
          className={style.selectorType}
          onChange={(e) => handlerFilter(e)}
        >
          <option value="">Selecciona...</option>
          <option value="menor">Más débil</option>
          <option value="mayor">Más fuerte</option>
        </select>
      </div>
      <button onClick={(e) => resetFilter(e)}>Reset</button>
    </div>
  );
}
