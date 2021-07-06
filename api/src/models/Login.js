const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('login', {
    id_login:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login_date: {
      type:DataTypes.STRING,
    validate: { 
   isDate: true
        }
    },
  });

};