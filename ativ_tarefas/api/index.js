const express = require("express");
const cors = require("cors");
require("dotenv").config();

const tarefaRoutes = require("./routes/tarefa");
const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json({
    origin: "*", 
  }));

app.get("/", (req, res) => {
  res.send("API de tarefas funcionando");
});

app.use("/tarefas", tarefaRoutes);

sequelize.sync({ alter: true });

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;