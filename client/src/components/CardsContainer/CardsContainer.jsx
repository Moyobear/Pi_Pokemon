import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer() {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className={style.contenedor}>
      {pokemons.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            type={item.types}
          />
        );
      })}
    </div>
  );
}
