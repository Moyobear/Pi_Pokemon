import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.landingContenedor}>
      <h1>
        Bienvenidos a la <strong>PokeApi</strong> de Moyo...
      </h1>

      <Link to="/home">
        <button className={style.resplandor}>Empezar</button>
      </Link>
    </div>
  );
}
