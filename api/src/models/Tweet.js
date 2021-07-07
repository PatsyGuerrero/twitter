const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tweet', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tweet: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING
    }
  });

};
