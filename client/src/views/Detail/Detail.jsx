import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, clearDetail } from "../../redux/actions";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);

  return (
    <div className={style.padre}>
      <div className={style.botonera}>
        <Link to={"/home"}>
          <button className={style.botonAtras}>Atras</button>
        </Link>

        {detail.inDataBase === true
          ? ((
              <Link to={"/update"}>
                <button className={style.botonUpdate}>Actualizar</button>
              </Link>
            ),
            (
              <Link to={`/${id}/delete`}>
                <button className={style.botonDelete}>Eliminar</button>
              </Link>
            ))
          : null}
      </div>
      {detail ? (
        <div className={style.detalles}>
          <div className={style.imagen}>
            <img className={style.image} src={detail.image} alt={detail.name} />
          </div>
          <div className={style.info}>
            {typeof detail.id === "number" ? (
              <h2 className={style.nombre}>
                Id: {detail.id} - {detail.name}
              </h2>
            ) : (
              <div>
                <h2 className={style.nombre}>{detail.name}</h2>
                <h2 className={style.id}>Id: {detail.id}</h2>
              </div>
            )}
            <h5 className={style.estadistica}>Vida: {detail.hp}</h5>
            <h5 className={style.estadistica}>Ataque: {detail.attack}</h5>
            <h5 className={style.estadistica}>Defensa: {detail.defense}</h5>
            <h5 className={style.estadistica}>Velocidad: {detail.speed}</h5>
            <h5 className={style.estadistica}>Altura: {detail.height}</h5>
            <h5 className={style.estadistica}>Peso: {detail.weight}</h5>
            {/* {detail.type?.map((item, index) => {
              return (
                <h5 key={index} className={style.tipo}>
                  Tipo{detail.type.length > 1 ? "s" : ""}: <em>{item}</em>
                </h5>
              );
            })} */}
            <h5 className={style.tipo}>
              Tipo{detail.type?.length > 1 ? "s" : ""}:
              {detail.type?.map((item, index) => {
                return <em key={index}> {item} </em>;
              })}
            </h5>
          </div>
        </div>
      ) : null}
    </div>
  );
}
