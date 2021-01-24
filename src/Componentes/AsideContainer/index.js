import React, { useState } from "react";
import AsideContact from "../AsideContact";
import AsideEducation from "../AsideEducation";

function AsideContainer(props) {
  const [dados, mostraDados] = useState(false);

  const button = () => {
    mostraDados(!dados);
  };

  return (
    <>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={button}>Mostrar Contatos</button>

          {props.resposta.contatos.map(
            (item) => dados && <AsideContact key={item.id} resposta={item} />
          )}
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          {props.resposta.educacao.map((item) => (
            <AsideEducation key={item.id} resposta={item} />
          ))}
        </div>
      </aside>
    </>
  );
}

export default AsideContainer;
