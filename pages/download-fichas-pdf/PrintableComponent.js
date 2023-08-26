// components/PrintableComponent.js

import React from 'react';

const PrintableComponent = ({ data }) => {
  return (
    <div>
      {/* Renderiza el contenido que deseas imprimir */}
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
};

export default PrintableComponent;
