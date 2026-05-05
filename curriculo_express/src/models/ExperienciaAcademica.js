module.exports = (sequelize, Sequelize) => {
  const ExperienciaAcademica = sequelize.define("ExperienciaAcademica", {
    instituicao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    curso: {
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

  ExperienciaAcademica.associate = (models) => {
    ExperienciaAcademica.belongsTo(models.Pessoa, {
      foreignKey: "pessoaId",
    });
  };

  return ExperienciaAcademica;
};