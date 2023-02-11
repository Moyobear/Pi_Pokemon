const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Type",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        autoincrement: true,
        unique: true,
      },
      naturaleza: {
        type: DataTypes.STRING,
        // defaultValue: "normal",
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
