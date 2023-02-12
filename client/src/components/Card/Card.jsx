import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      <div className={style.contenedorCard}>
        <img src={props.image} className={style.imgCard} alt="Pokemon" />
        <div>
          <p>Nombre: {props.name}</p>
          <p>Tipo: {props.type}</p>
        </div>
      </div>
    </div>
  );
}
