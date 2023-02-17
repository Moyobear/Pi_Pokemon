import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getAllPokemons } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const numPokemons = pokemons?.length;
  const poksXpage = 12;
  const [page, setPage] = useState(1);

  return (
    <div className={style.contenedorHome}>
      <CardsContainer page={page} poksXpage={poksXpage} />
      {!pokemons.length ? null : (
        <Paginado
          numPokemons={numPokemons}
          poksXpage={poksXpage}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}
