import React from "react";

function AsideContact(props) {
  const { tipo, contato } = props.resposta;

  return (
    <div className="lista-de-contatos">
      <li>
        <div className="item-contato">
          <h4>{tipo}</h4>
          <p>{contato}</p>
        </div>
      </li>
    </div>
  );
}

export default AsideContact;
