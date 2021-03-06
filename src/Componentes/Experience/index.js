import React from "react";

function Experience(props) {
  const { cargo, periodo, empresa, local, conteudo } = props.resposta;

  return (
    <>
      <div className="experience-item">
        <div>
          <h4>{cargo}</h4>
          <span>{periodo}</span>

          <strong>{empresa}</strong>
          <span>{local}</span>
        </div>
        <p>{conteudo}</p>
      </div>
    </>
  );
}

export default Experience;
