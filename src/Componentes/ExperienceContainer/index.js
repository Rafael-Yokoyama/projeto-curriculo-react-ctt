import React from "react";

import Experience from "../Experience";

function ExperienceContainer(props) {
  const { experiencia } = props.resposta;

  return (
    <div className="experience">
      <h2>Experiência Profissional</h2>

      {experiencia.map((i) => (
        <Experience resposta={i} key={i.id} />
      ))}
    </div>
  );
}

export default ExperienceContainer;
