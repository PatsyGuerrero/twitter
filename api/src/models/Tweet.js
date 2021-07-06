const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tweet', {
    id_tweet:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tweet: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    update_date: {
      type:DataTypes.STRING,
    validate: { 
   isDate: true
              }
    },
    url: {
      type: DataTypes.STRING,
      allowNull:false,
    }
  });

};
