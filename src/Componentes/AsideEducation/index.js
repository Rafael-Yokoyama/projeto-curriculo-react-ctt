import React from "react";

function AsideEducation(props) {
  const { instituicao, curso } = props.resposta;

  return (
    <div className="lista-de-formacao">
      <li>
        <h4>{curso}</h4>
        <p>{instituicao}</p>
      </li>
    </div>
  );
}

export default AsideEducation;
