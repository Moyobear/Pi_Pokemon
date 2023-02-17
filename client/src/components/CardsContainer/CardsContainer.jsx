import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import Loadding from "../Loadding/Loadding";

export default function CardsContainer({ page, poksXpage }) {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className={style.contenedor}>
      {!pokemons.length ? (
        <Loadding />
      ) : (
        pokemons
          .slice((page - 1) * poksXpage, (page - 1) * poksXpage + poksXpage)
          .map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                type={item.type}
              />
            );
          })
      )}
    </div>
  );
}
