const express = require("express");
const router = express.Router();

const { ExperienciaProfissional, Pessoa } = require("../models");

router.post("/", async (req, res) => {
  try {
    const experiencia = await ExperienciaProfissional.create(req.body);
    res.status(201).json(experiencia);
  } catch (error) {
    res.status(400).json({
      erro: "Erro ao criar experiência profissional",
      detalhes: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const experiencias = await ExperienciaProfissional.findAll({
      include: [Pessoa],
      order: [["id", "ASC"]],
    });

    res.json(experiencias);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao listar experiências profissionais",
      detalhes: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const experiencia = await ExperienciaProfissional.findByPk(req.params.id, {
      include: [Pessoa],
    });

    if (!experiencia) {
      return res.status(404).json({ erro: "Experiência profissional não encontrada" });
    }

    res.json(experiencia);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao buscar experiência profissional",
      detalhes: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const experiencia = await ExperienciaProfissional.findByPk(req.params.id);

    if (!experiencia) {
      return res.status(404).json({ erro: "Experiência profissional não encontrada" });
    }

    await experiencia.update(req.body);
    res.json(experiencia);
  } catch (error) {
    res.status(400).json({
      erro: "Erro ao atualizar experiência profissional",
      detalhes: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const experiencia = await ExperienciaProfissional.findByPk(req.params.id);

    if (!experiencia) {
      return res.status(404).json({ erro: "Experiência profissional não encontrada" });
    }

    await experiencia.destroy();
    res.json({ mensagem: "Experiência profissional removida com sucesso" });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao remover experiência profissional",
      detalhes: error.message,
    });
  }
});

module.exports = router;