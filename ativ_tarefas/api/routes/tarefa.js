const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController");

router.get("/", tarefaController.listarTarefas);

router.get("/:objectId", tarefaController.buscarTarefaPorId);

router.post("/", tarefaController.criarTarefa);

router.put("/:objectId", tarefaController.atualizarTarefa);

router.delete("/:objectId", tarefaController.deletarTarefa);

module.exports = router;
