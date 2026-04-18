const getTarefaModel = (sequelize, Sequelize) => {
  const Tarefa = sequelize.define(
    "Tarefa",
    {
      objectId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "A descrição não pode ser vazia.",
          },
          notNull: {
            msg: "A descrição é obrigatória.",
          },
        },
      },
      concluida: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "tarefas",
      timestamps: true,
    },
  );

  return Tarefa;
};

module.exports = getTarefaModel;
