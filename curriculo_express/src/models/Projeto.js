module.exports = (sequelize, Sequelize) => {
  const Projeto = sequelize.define("Projeto", {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
    },
  });

  Projeto.associate = (models) => {
    Projeto.belongsTo(models.Pessoa, {
      foreignKey: "pessoaId",
    });
  };

  return Projeto;
};