const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExperienciaAcademica = sequelize.define("ExperienciaAcademica", {
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curso: {
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

module.exports = ExperienciaAcademica;