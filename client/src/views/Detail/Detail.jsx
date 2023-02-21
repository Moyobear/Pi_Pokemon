import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonDetail,
  clearDetail,
  deletePokemon,
  clearHome,
} from "../../redux/actions";
import Loadding from "../../components/Loadding/Loadding";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  const eliminarPok = (id) => {
    dispatch(deletePokemon(id)).then((res) => {
      window.alert("Pokemon borrado exitosamente");
      history.push("/home");
    });
  };

  const detail = useSelector((state) => state.detail);
  return (
    <div className={style.padre}>
      {detail === {} ? (
        <Loadding />
      ) : (
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
            <h5 className={style.estadistica}>
              Vida: <em>{detail.hp}</em>{" "}
            </h5>
            <h5 className={style.estadistica}>
              Ataque: <em>{detail.attack}</em>
            </h5>
            <h5 className={style.estadistica}>
              Defensa: <em>{detail.defense}</em>
            </h5>
            <h5 className={style.estadistica}>
              Velocidad: <em>{detail.speed}</em>
            </h5>
            <h5 className={style.estadistica}>
              Altura: <em>{detail.height} ft</em>
            </h5>
            <h5 className={style.estadistica}>
              Peso: <em>{detail.weight} kg</em>
            </h5>
            <h5 className={style.tipo}>
              Tipo{detail.type?.length > 1 ? "s" : ""}:
              {detail.type?.map((item, index) => {
                return (
                  <em className={style.itemType} key={index}>
                    {" "}
                    {item}{" "}
                  </em>
                );
              })}
            </h5>
          </div>
        </div>
      )}
      {!detail ? null : (
        <div className={style.botonera}>
          <Link to={"/home"}>
            <button className={style.botonAtras}>Atras</button>
          </Link>

          {detail.inDataBase === true ? (
            <div className={style.btnDb}>
              <button
                onClick={() => eliminarPok(detail.id)}
                className={style.botonDelete}
              >
                Eliminar
              </button>
              <Link to={"/update"}>
                <button className={style.botonUpdate}>Actualizar</button>
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
