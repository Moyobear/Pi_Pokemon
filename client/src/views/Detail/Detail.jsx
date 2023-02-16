import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useEffect } from "react";
// import axios from "axios";
import style from "./Detail.module.css";
import { useDispatch } from "react-redux";
import { getPokemonDetail } from "../../redux/actions";

export default function Detail() {
  const { detailId } = useParams();
  const pokemon = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  console.log(detailId);

  useEffect(() => {
    dispatch(getPokemonDetail(detailId));
  }, [detailId, dispatch]);

  return (
    <div className={style.padre}>
      <div className={style.botonera}>
        <Link to={"/home"}>
          <button className={style.botonAtras}>Inicio</button>
        </Link>

        {pokemon.inDataBase === true ? (
          <Link to={"/update"}>
            <button className={style.botonUpdate}>Actualizar</button>
          </Link>
        ) : null}
      </div>
      {pokemon ? (
        <div className={style.detalles}>
          <div className={style.imagen}>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className={style.info}>
            <h2>Nombre: {pokemon.name}</h2>
            <h5>Vida: {pokemon.hp}</h5>
            <h5>Ataque: {pokemon.attack}</h5>
            <h5>Defensa: {pokemon.defense}</h5>
            <h5>Velocidad: {pokemon.speed}</h5>
            <h5>Altura: {pokemon.height}</h5>
            <h5>Peso: {pokemon.weight}</h5>
            {/* <h5>
              Tipos: {pokemon.types[0]}, {pokemon.types[1] && pokemon.types[1]},
              {pokemon.types[2] && pokemon.types[2]}
            </h5> */}
          </div>
        </div>
      ) : null}
    </div>
  );
}
