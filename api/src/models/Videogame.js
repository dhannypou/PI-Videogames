const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    released: {
      type: DataTypes.DATEONLY,
    },

    rating: {
      type: DataTypes.FLOAT,
      validate: {
        min: 1.0,
        max: 5
      }
    },

    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },

    background_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }


  },{
    timestamps: false,
  }
  );
};
