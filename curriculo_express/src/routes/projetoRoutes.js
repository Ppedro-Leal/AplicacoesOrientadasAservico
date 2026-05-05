const express = require("express");
const router = express.Router();

const { Projeto, Pessoa } = require("../models");

router.post("/", async (req, res) => {
  try {
    const projeto = await Projeto.create(req.body);
    res.status(201).json(projeto);
  } catch (error) {
    res.status(400).json({
      erro: "Erro ao criar projeto",
      detalhes: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const projetos = await Projeto.findAll({
      include: [Pessoa],
      order: [["id", "ASC"]],
    });

    res.json(projetos);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao listar projetos",
      detalhes: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id, {
      include: [Pessoa],
    });

    if (!projeto) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    res.json(projeto);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao buscar projeto",
      detalhes: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);

    if (!projeto) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    await projeto.update(req.body);
    res.json(projeto);
  } catch (error) {
    res.status(400).json({
      erro: "Erro ao atualizar projeto",
      detalhes: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);

    if (!projeto) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    await projeto.destroy();
    res.json({ mensagem: "Projeto removido com sucesso" });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao remover projeto",
      detalhes: error.message,
    });
  }
});

module.exports = router;