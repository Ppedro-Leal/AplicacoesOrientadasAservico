const { validate: isUUID } = require("uuid");
const tarefaService = require("../services/tarefaService");

const listarTarefas = async (req, res) => {
  try {
    const tarefas = await tarefaService.listarTarefas();
    return res.status(200).json(tarefas);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
};

const buscarTarefaPorId = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!isUUID(objectId)) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    const tarefa = await tarefaService.buscarTarefaPorId(objectId);

    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    return res.status(200).json(tarefa);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
};

const criarTarefa = async (req, res) => {
  try {
    const { descricao, concluida } = req.body;

    if (!descricao || descricao.trim() === "") {
      return res.status(400).json({ erro: "O campo 'descricao' é obrigatório." });
    }

    const tarefa = await tarefaService.criarTarefa({ descricao, concluida });
    return res.status(201).json(tarefa);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
};

const atualizarTarefa = async (req, res) => {
  try {
    const { objectId } = req.params;
    const { descricao, concluida } = req.body;

    if (!isUUID(objectId)) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    const tarefa = await tarefaService.atualizarTarefa(objectId, {
      descricao,
      concluida,
    });

    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    return res.status(200).json(tarefa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
};

const deletarTarefa = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!isUUID(objectId)) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    const tarefa = await tarefaService.deletarTarefa(objectId);

    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
};

module.exports = {
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};