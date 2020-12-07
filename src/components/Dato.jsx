import React from "react";

const Dato = ({ dato, valor, medida }) => {
  return (
    <div className="dato-clima">
      <label>{dato}</label>
      <label>
        {valor}
        {medida}
      </label>
    </div>
  );
};

export default Dato;
