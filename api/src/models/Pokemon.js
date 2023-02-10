const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      hp: {
        type: DataTypes.INTEGER,
        defaultValue: 50,
      },
      attack: {
        type: DataTypes.INTEGER,
        defaultValue: 50,
      },
      defense: {
        type: DataTypes.INTEGER,
        defaultValue: 50,
      },
      speed: {
        type: DataTypes.INTEGER,
        defaultValue: 50,
      },
      heigth: {
        type: DataTypes.INTEGER,
        defaultValue: 40,
      },
      weight: {
        type: DataTypes.INTEGER,
        defaultValue: 30,
      },
      image: {
        type: DataTypes.TEXT,
        defaultValue: "https://lorempokemon.fakerapi.it/pokemon",
      },
      inDataBase: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
