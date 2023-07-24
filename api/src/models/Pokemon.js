const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemons", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  sequelize.define("Type", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
