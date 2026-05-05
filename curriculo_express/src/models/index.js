require("dotenv").config();
const Sequelize = require("sequelize");

const getPessoaModel = require("./Pessoa");
const getExperienciaAcademicaModel = require("./ExperienciaAcademica");
const getExperienciaProfissionalModel = require("./ExperienciaProfissional");
const getProjetoModel = require("./Projeto");
const getTecnologiaModel = require("./Tecnologia");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: require("pg"),
  logging: false,
});

const models = {
  Pessoa: getPessoaModel(sequelize, Sequelize),
  ExperienciaAcademica: getExperienciaAcademicaModel(sequelize, Sequelize),
  ExperienciaProfissional: getExperienciaProfissionalModel(sequelize, Sequelize),
  Projeto: getProjetoModel(sequelize, Sequelize),
  Tecnologia: getTecnologiaModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { sequelize, ...models };