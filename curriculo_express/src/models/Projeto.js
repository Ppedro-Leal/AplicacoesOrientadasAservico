const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Projeto = sequelize.define("Projeto", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
  },
});

module.exports = Projeto;