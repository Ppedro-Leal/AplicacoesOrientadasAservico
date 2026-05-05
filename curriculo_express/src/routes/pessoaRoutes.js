const express = require("express");
const router = express.Router();

const {
  Pessoa,
  ExperienciaAcademica,
  ExperienciaProfissional,
  Projeto,
  Tecnologia,
} = require("../models");

router.post("/", async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar pessoa", detalhes: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll({
      include: [
        ExperienciaAcademica,
        ExperienciaProfissional,
        Projeto,
        Tecnologia,
      ],
    });

    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar pessoas", detalhes: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id, {
      include: [
        ExperienciaAcademica,
        ExperienciaProfissional,
        Projeto,
        Tecnologia,
      ],
    });

    if (!pessoa) {
      return res.status(404).json({ erro: "Pessoa não encontrada" });
    }

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar pessoa", detalhes: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if (!pessoa) {
      return res.status(404).json({ erro: "Pessoa não encontrada" });
    }

    await pessoa.update(req.body);
    res.json(pessoa);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao atualizar pessoa", detalhes: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if (!pessoa) {
      return res.status(404).json({ erro: "Pessoa não encontrada" });
    }

    await pessoa.destroy();
    res.json({ mensagem: "Pessoa removida com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao remover pessoa", detalhes: error.message });
  }
});

module.exports = router;