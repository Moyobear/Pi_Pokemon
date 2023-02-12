import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.mainContainer}>
      <Link to="/home" className={style.link}>Inicio</Link>
      <Link to="/create" className={style.link}>Crear Pokemon</Link>
      <Link to="/about" className={style.link}>Acerca de</Link>
    </div>
  );
}
