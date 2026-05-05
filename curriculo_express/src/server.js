const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

require("dotenv").config();
require("./models");

const pessoaRoutes = require("./routes/pessoaRoutes");
const academicaRoutes = require("./routes/academicaRoutes");
const profissionalRoutes = require("./routes/profissionalRoutes");
const projetoRoutes = require("./routes/projetoRoutes");
const tecnologiaRoutes = require("./routes/tecnologiaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Currículo Express funcionando!",
    rotas: {
      pessoas: "/pessoas",
      experienciasAcademicas: "/experiencias-academicas",
      experienciasProfissionais: "/experiencias-profissionais",
      projetos: "/projetos",
      tecnologias: "/tecnologias",
    },
  });
});

app.use("/pessoas", pessoaRoutes);
app.use("/experiencias-academicas", academicaRoutes);
app.use("/experiencias-profissionais", profissionalRoutes);
app.use("/projetos", projetoRoutes);
app.use("/tecnologias", tecnologiaRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar com o banco:", error);
  });

module.exports = app;