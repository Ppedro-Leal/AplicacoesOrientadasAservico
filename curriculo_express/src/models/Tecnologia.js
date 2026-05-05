module.exports = (sequelize, Sequelize) => {
  const Tecnologia = sequelize.define("Tecnologia", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Tecnologia.associate = (models) => {
    Tecnologia.belongsTo(models.Pessoa, {
      foreignKey: "pessoaId",
    });
  };

  return Tecnologia;
};