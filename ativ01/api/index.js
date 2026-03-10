const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// rota inicial
app.get("/", (req, res) => {
  res.send("API de Atividade 01 - Aplicações Orientadas a Serviço funcionando perfeitamente");
});

// rota numero aleatorio
app.get("/random", (req, res) => {
  const numero = Math.floor(Math.random() * 100) + 1;
  res.send(`Número aleatório: ${numero} - Gerado com sucesso!... toda vez que atualizar a página um novo número será gerado`);
});

// rota do dado
app.get("/dado", (req, res) => {
  const dado = Math.floor(Math.random() * 6) + 1;
  res.send(`Resultado do dado: ${dado} - toda vez que atualizar a página um novo resultado será gerado`);
});

const citacoes = [
  { autor: "Albert Einstein", citacao: "Deus não joga dados com o universo." },
  { autor: "Isaac Newton", citacao: "Se vi mais longe foi por estar sobre ombros de gigantes." },
  { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
  { autor: "Galileu Galilei", citacao: "Eppur si muove." },
  { autor: "Nikola Tesla", citacao: "Se você quer encontrar os segredos do universo, pense em energia." },
  { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta." },
  { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar às mudanças." },
  { autor: "Carl Sagan", citacao: "Somos feitos de poeira das estrelas." },
  { autor: "Richard Feynman", citacao: "A ciência é a crença na ignorância dos especialistas." },
  { autor: "Niels Bohr", citacao: "Prever é muito difícil, especialmente o futuro." },
  { autor: "Max Planck", citacao: "A ciência avança funeral a funeral." },
  { autor: "Werner Heisenberg", citacao: "O que observamos não é a natureza em si." },
  { autor: "Alan Turing", citacao: "Podemos ver apenas um pouco do futuro." },
  { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem ser separadas." },
  { autor: "James Clerk Maxwell", citacao: "A ciência é incompetente para raciocinar sobre valores." },
  { autor: "Gregor Mendel", citacao: "Minha pesquisa me trouxe grande satisfação." },
  { autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada." },
  { autor: "Michael Faraday", citacao: "Nada é maravilhoso demais para ser verdade." },
  { autor: "Edwin Hubble", citacao: "Equipados com seus cinco sentidos." },
  { autor: "Jane Goodall", citacao: "O que você faz faz diferença." },
  { autor: "Ada Lovelace", citacao: "A máquina analítica tece padrões algébricos." },
  { autor: "Tim Berners-Lee", citacao: "A web é para todos." },
  { autor: "Katherine Johnson", citacao: "Gostava de aprender coisas novas." },
  { autor: "Enrico Fermi", citacao: "Nunca subestime o poder da curiosidade." },
  { autor: "Paul Dirac", citacao: "A beleza matemática é importante." },
  { autor: "Dmitri Mendeleev", citacao: "Sonhei com a tabela periódica." },
  { autor: "Erwin Schrödinger", citacao: "A tarefa não é ver o que ninguém viu." },
  { autor: "Johannes Kepler", citacao: "A natureza usa a matemática." },
  { autor: "Antoine Lavoisier", citacao: "Nada se cria, nada se perde." },
  { autor: "Blaise Pascal", citacao: "O coração tem razões que a razão desconhece." }
];

// rota de citações
app.get("/citacoes", (req, res) => {
  const index = Math.floor(Math.random() * citacoes.length);
  res.send(citacoes[index]);
});


//
const PORT = process.env.PORT || 3000;

// 
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;