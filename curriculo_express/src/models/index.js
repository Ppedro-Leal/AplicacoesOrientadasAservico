const Pessoa = require("./Pessoa");
const ExperienciaAcademica = require("./ExperienciaAcademica");
const ExperienciaProfissional = require("./ExperienciaProfissional");
const Projeto = require("./Projeto");
const Tecnologia = require("./Tecnologia");

Pessoa.hasMany(ExperienciaAcademica, {
  foreignKey: "pessoaId",
  onDelete: "CASCADE",
});
ExperienciaAcademica.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
});

Pessoa.hasMany(ExperienciaProfissional, {
  foreignKey: "pessoaId",
  onDelete: "CASCADE",
});
ExperienciaProfissional.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
});

Pessoa.hasMany(Projeto, {
  foreignKey: "pessoaId",
  onDelete: "CASCADE",
});
Projeto.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
});

Pessoa.hasMany(Tecnologia, {
  foreignKey: "pessoaId",
  onDelete: "CASCADE",
});
Tecnologia.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
});

module.exports = {
  Pessoa,
  ExperienciaAcademica,
  ExperienciaProfissional,
  Projeto,
  Tecnologia,
};