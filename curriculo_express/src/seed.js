const sequelize = require("./config/database");

const {
  Pessoa,
  ExperienciaAcademica,
  ExperienciaProfissional,
  Projeto,
  Tecnologia,
} = require("./models");

async function seed() {
  try {
    await sequelize.sync({ force: true });

    const pedro = await Pessoa.create({
      nome: "Pedro Henrique Leal Amaral",
      cargo: "Desenvolvedor Full Stack",
      resumo:
        "Estudante de Sistemas para Internet, apaixonado por tecnologia e desenvolvimento de aplicações web e mobile. Possui experiência com React, React Native, Node.js, Express, bancos de dados relacionais e não relacionais.",
      email: "pedro@email.com",
      telefone: "(81) 99999-9999",
      linkedin: "https://linkedin.com/in/pedrohleal",
      github: "https://github.com/Ppedro-Leal",
    });

    const ana = await Pessoa.create({
      nome: "Ana Beatriz Silva",
      cargo: "Desenvolvedora Front-end",
      resumo:
        "Profissional em formação na área de tecnologia, com foco em desenvolvimento front-end, interfaces responsivas e experiência do usuário.",
      email: "ana@email.com",
      telefone: "(81) 98888-8888",
      linkedin: "https://linkedin.com/in/anabeatriz",
      github: "https://github.com/anabeatriz",
    });

    await ExperienciaAcademica.bulkCreate([
      {
        instituicao: "UNICAP",
        curso: "Sistemas para Internet",
        periodo: "2024 - 2026",
        descricao:
          "Curso superior voltado para desenvolvimento web, mobile, banco de dados, engenharia de software e integração de sistemas.",
        pessoaId: pedro.id,
      },
      {
        instituicao: "Grau Técnico",
        curso: "Técnico em Desenvolvimento de Sistemas",
        periodo: "2022 - 2024",
        descricao:
          "Formação técnica com foco em lógica de programação, banco de dados, desenvolvimento web e criação de APIs.",
        pessoaId: pedro.id,
      },
      {
        instituicao: "UNICAP",
        curso: "Sistemas para Internet",
        periodo: "2024 - 2026",
        descricao:
          "Formação acadêmica com foco em aplicações web, mobile e fundamentos de tecnologia.",
        pessoaId: ana.id,
      },
    ]);

    await ExperienciaProfissional.bulkCreate([
      {
        empresa: "Digital Azul",
        cargo: "Desenvolvedor Full Stack Freelancer",
        periodo: "2023 - 2024",
        descricao:
          "Desenvolvimento de páginas, APIs e banco de dados para sistemas web utilizando tecnologias como Next.js, React, TypeScript, Prisma, MongoDB, PHP, Vue.js e MySQL.",
        pessoaId: pedro.id,
      },
      {
        empresa: "Di Santinni",
        cargo: "Jovem Aprendiz de Logística",
        periodo: "2021 - 2022",
        descricao:
          "Atuação em rotinas administrativas e logísticas, desenvolvendo organização, responsabilidade e trabalho em equipe.",
        pessoaId: pedro.id,
      },
      {
        empresa: "Projeto Acadêmico",
        cargo: "Desenvolvedora Front-end",
        periodo: "2024 - 2025",
        descricao:
          "Criação de interfaces responsivas para projetos acadêmicos utilizando React Native, Expo e componentes reutilizáveis.",
        pessoaId: ana.id,
      },
    ]);

    await Projeto.bulkCreate([
      {
        titulo: "Mente Inclusiva",
        descricao:
          "Aplicativo educacional voltado para pais, educadores e especialistas aprenderem sobre crianças neurodivergentes, com cursos, módulos, acessibilidade e progresso de aprendizado.",
        link: "https://github.com/Ppedro-Leal",
        pessoaId: pedro.id,
      },
      {
        titulo: "Bookly",
        descricao:
          "Aplicação para doação e troca de livros, com autenticação, cadastro de livros, chat entre usuários e integração com Back4App.",
        link: "https://github.com/Ppedro-Leal",
        pessoaId: pedro.id,
      },
      {
        titulo: "Portfólio Mobile",
        descricao:
          "Aplicativo em React Native criado para apresentar currículo, tecnologias, experiências e projetos.",
        link: "https://github.com/anabeatriz",
        pessoaId: ana.id,
      },
    ]);

    await Tecnologia.bulkCreate([
      {
        nome: "React",
        categoria: "Front-end",
        pessoaId: pedro.id,
      },
      {
        nome: "React Native",
        categoria: "Mobile",
        pessoaId: pedro.id,
      },
      {
        nome: "Node.js",
        categoria: "Back-end",
        pessoaId: pedro.id,
      },
      {
        nome: "Express",
        categoria: "Back-end",
        pessoaId: pedro.id,
      },
      {
        nome: "PostgreSQL",
        categoria: "Banco de Dados",
        pessoaId: pedro.id,
      },
      {
        nome: "Sequelize",
        categoria: "ORM",
        pessoaId: pedro.id,
      },
      {
        nome: "Expo",
        categoria: "Mobile",
        pessoaId: ana.id,
      },
      {
        nome: "TypeScript",
        categoria: "Linguagem",
        pessoaId: ana.id,
      },
      {
        nome: "Figma",
        categoria: "Design",
        pessoaId: ana.id,
      },
    ]);

    console.log("Seed executado com sucesso!");
    process.exit();
  } catch (error) {
    console.error("Erro ao executar seed:", error);
    process.exit(1);
  }
}

seed();