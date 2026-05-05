const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExperienciaProfissional = sequelize.define("ExperienciaProfissional", {
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  periodo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
});

module.exports = ExperienciaProfissional;