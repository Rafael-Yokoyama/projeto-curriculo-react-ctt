import React, { useState } from "react";
import Header from "./Componentes/Header";
import AsideContainer from "./Componentes/AsideContainer";
import ExperienceContainer from "./Componentes/ExperienceContainer";

import "./App.css";

function App() {
  const fakeAPI = {
    nome: "Lisa Simpson",
    ocupacao: "Developer Front",
    resumo: "8 anos e já sei React",
    perfilProfissional: "Faço miojo bom demais ",
    contatos: [
      {
        id: 1,
        tipo: "telefone",
        contato: "19 0000-0000",
      },
      {
        id: 2,
        tipo: "email",
        contato: "nome@dev.com",
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: "EMEF",
        curso: "Ensino basico",
      },
      {
        id: 2,
        instituicao: "ETEC",
        curso: "Como ser dev",
      },
    ],
    experiencia: [
      {
        id: 1,
        cargo: "Front",
        periodo: "Agosto 2019 - Atualmente",
        empresa: "NASA",
        local: "Nova York",
        conteudo: "Fazia nada e ganhava bem",
      },
      {
        id: 2,
        cargo: "Back",
        periodo: "Agosto 2018 - Agosto 2019",
        empresa: "CIA",
        local: "Boston",
        conteudo: "Fazia nada e ganhava mal",
      },
    ],
  };

  const [resposta] = useState(fakeAPI);

  return (
    <main>
      <Header resposta={resposta} />
      <AsideContainer resposta={resposta} />
      <ExperienceContainer resposta={resposta} />
    </main>
  );
}

export default App;
