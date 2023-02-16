import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      <div className={style.contenedorCard}>
        <Link to={`/detail/${props.id}`} className={style.link}>
          <img src={props.image} className={style.imgCard} alt="Pokemon" />
        </Link>
        <div className={style.titulos}>
          <p className={style.titulo}>{props.name}</p>
          <p className={style.titulo}>{props.type}</p>
        </div>
      </div>
    </div>
  );
}
