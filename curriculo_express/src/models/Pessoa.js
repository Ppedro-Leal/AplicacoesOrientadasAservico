module.exports = (sequelize, Sequelize) => {
  const Pessoa = sequelize.define("Pessoa", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    resumo: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
    },
    linkedin: {
      type: Sequelize.STRING,
    },
    github: {
      type: Sequelize.STRING,
    },
  });

  Pessoa.associate = (models) => {
    Pessoa.hasMany(models.ExperienciaAcademica, {
      foreignKey: "pessoaId",
      onDelete: "CASCADE",
    });

    Pessoa.hasMany(models.ExperienciaProfissional, {
      foreignKey: "pessoaId",
      onDelete: "CASCADE",
    });

    Pessoa.hasMany(models.Projeto, {
      foreignKey: "pessoaId",
      onDelete: "CASCADE",
    });

    Pessoa.hasMany(models.Tecnologia, {
      foreignKey: "pessoaId",
      onDelete: "CASCADE",
    });
  };

  return Pessoa;
};