const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tecnologia = sequelize.define("Tecnologia", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tecnologia;