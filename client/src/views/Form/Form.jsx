import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import pokebola from "../../Imgs/pokeball.png";
import style from "./Form.module.css";
import axios from "axios";
import { getAllTypes } from "../../redux/actions";
import Loadding from "../../components/Loadding/Loadding";

export default function Form() {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [pokemonData, setPokemonData] = useState({
    name: "",
    hp: 50,
    attack: 50,
    defense: 50,
    speed: 50,
    height: 50,
    weight: 50,
    image: "",
    type: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    type: "",
  });

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  function changeHandler(e) {
    setErrors(
      validate({
        ...pokemonData,
        [e.target.name]: e.target.value,
      })
    );

    setPokemonData({
      ...pokemonData,
      [e.target.name]: e.target.value,
    });
  }

  function selectHandler(e) {
    setPokemonData({
      ...pokemonData,
      type:
        pokemonData.type.length < 2
          ? [...pokemonData.type, e.target.value]
          : pokemonData.type,
    });
  }

  function validate(input) {
    let errors = {};
    if (!input.name) errors.name = "El nombre del pokemon es requerido";
    if (!/[A-Za-z]{3,10}/.test(input.name))
      errors.name = "El nombre debe tener de 3 a 10 caracteres";
    if (input.type === "") errors.type = "El tipo del pokemon es requerido";

    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const arrayErrors = Object.values(errors);
    if (arrayErrors.length === 0) {
      setPokemonData({
        name: "",
        hp: 50,
        attack: 50,
        defense: 50,
        speed: 50,
        height: 50,
        weight: 50,
        image: "",
        type: [],
      });

      setErrors({
        name: "",
        type: "",
      });
      console.log(...pokemonData);
      // window.alert("Pokemon creado exitosamente");

      const request = await axios
        .post("http://localhost:3001/pokemons", pokemonData)
        .then((res) => alert(res.data))
        .catch((error) => console.log(error.message));
      return request;
    }
  }

  function getImage() {
    let value = Math.floor(Math.random() * 100);
    let urlImage = `https://lorempokemon.fakerapi.it/pokemon/400/${value}`;
    setImage(urlImage);
    return urlImage;
  }

  return (
    <div className={!types.length ? style.loadding : null}>
      {!types.length ? (
        <Loadding />
      ) : (
        <div className={style.containerForm}>
          <div>
            <div className={style.legend}>
              <legend>Vamos a crear nuestro</legend>
              <legend>
                propio <em> PoKeMon</em>
              </legend>
            </div>
            {!image ? (
              <img
                className={style.pokebola}
                src={pokebola}
                alt="Imagen Pokebola"
              />
            ) : (
              <img className={style.pokemon} src={image} alt="Imagen Pokemon" />
            )}
          </div>
          <form className={style.formulario} onSubmit={handleSubmit}>
            <div className={style.grupo}>
              <label htmlFor="name">Nombre: </label>

              <input
                name="name"
                id="name"
                type="text"
                value={pokemonData.name}
                onChange={changeHandler}
                required
              />
              {errors.name && <p className={style.danger}>{errors.name}</p>}
            </div>

            <div className={style.grupo}>
              <label htmlFor="image">Imagen:</label>
              <input
                name="image"
                id="image"
                type="text"
                value={pokemonData.image}
                onChange={changeHandler}
                required
              />
              {image ? (
                <input
                  className={style.fake}
                  name="value_image"
                  id="value_image"
                  type="text"
                  value={image}
                  readOnly
                />
              ) : null}
              {image ? (
                <p className={style.info}>copia este enlace y pégalo arriba</p>
              ) : null}
            </div>

            <div className={style.grupo}>
              <label htmlFor="type">Tipos: </label>
              <div>
                <select onChange={selectHandler} multiple>
                  <option value="disable">
                    Selecciona los tipos de tu Pokemon:
                  </option>
                  {types?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              {errors.type && <p className={style.danger}>{errors.type}</p>}
            </div>

            <div className={style.mainBotones}>
              {pokemonData.name && pokemonData.type && pokemonData.image ? (
                <button className={style.btnCrear} type="submit">
                  Crear Pokemon
                </button>
              ) : (
                ""
              )}

              <button className={style.btnImagen} onClick={getImage}>
                {!image ? "Generar Imagen" : "Cambiar imágen"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
