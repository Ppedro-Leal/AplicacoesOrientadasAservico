module.exports = (sequelize, Sequelize) => {
  const ExperienciaProfissional = sequelize.define("ExperienciaProfissional", {
    empresa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    periodo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
    },
  });

  ExperienciaProfissional.associate = (models) => {
    ExperienciaProfissional.belongsTo(models.Pessoa, {
      foreignKey: "pessoaId",
    });
  };

  return ExperienciaProfissional;
};