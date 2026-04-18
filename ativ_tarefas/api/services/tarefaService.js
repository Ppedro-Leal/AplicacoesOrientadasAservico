const { Tarefa } = require("../models");

const listarTarefas = async () => {
  return await Tarefa.findAll();
};

const buscarTarefaPorId = async (objectId) => {
  return await Tarefa.findByPk(objectId);
};

const criarTarefa = async ({ descricao, concluida }) => {
  return await Tarefa.create({ descricao, concluida });
};

const atualizarTarefa = async (objectId, { descricao, concluida }) => {
  const tarefa = await Tarefa.findByPk(objectId);

  if (!tarefa) {
    return null;
  }

  if (descricao !== undefined) {
    tarefa.descricao = descricao;
  }

  if (concluida !== undefined) {
    tarefa.concluida = concluida;
  }

  await tarefa.save();

  return tarefa;
};

const deletarTarefa = async (objectId) => {
  const tarefa = await Tarefa.findByPk(objectId);

  if (!tarefa) {
    return null;
  }

  await tarefa.destroy();
  return tarefa;
};

module.exports = {
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};