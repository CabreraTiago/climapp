import React from "react";
import styles from "./Dato.module.css";

const Dato = ({ dato, valor, medida }) => {
  return (
    <div className={styles.dato_clima}>
      <label>{dato}</label>
      <label>
        {valor}
        {medida}
      </label>
    </div>
  );
};

export default Dato;
