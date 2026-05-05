const express = require("express");
const router = express.Router();

const { Tecnologia, Pessoa } = require("../models");

router.post("/", async (req, res) => {
  try {
    const tecnologia = await Tecnologia.create(req.body);
    res.status(201).json(tecnologia);
  } catch (error) {
    res.status(400).json({
      erro: "Erro ao criar tecnologia",
      detalhes: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const tecnologias = await Tecnologia.findAll({
      include: [Pessoa],
      order: [["id", "ASC"]],
    });

    res.json(tecnologias);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao listar tecnologias",
      detalhes: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tecnologia = await Tecnologia.findByPk(req.params.id, {
      include: [Pessoa],
    });

    if (!tecnologia) {
      return res.status(404).json({ erro: "Tecnologia não encontrada" });
    }

    res.json(tecnologia);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao buscar tecnologia",
      detalhes: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tecnologia = await Tecnologia.findByPk(req.params.id);

    if (!tecnologia) {
      return res.status(404).json({ erro: "Tecnologia não encontrada" });
    }

    await tecnologia.update(req.body);
    res.json(tecnologia);
  } catch (error) {
    res.status(400).json({
      erro: "Erro ao atualizar tecnologia",
      detalhes: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tecnologia = await Tecnologia.findByPk(req.params.id);

    if (!tecnologia) {
      return res.status(404).json({ erro: "Tecnologia não encontrada" });
    }

    await tecnologia.destroy();
    res.json({ mensagem: "Tecnologia removida com sucesso" });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao remover tecnologia",
      detalhes: error.message,
    });
  }
});

module.exports = router;