import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { Container } from "react-bootstrap";
import styles from "./IndicadorCarga.module.css";

const IndicadorCarga = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <Container className={styles.contenedor_indicador}>
        <Loader type="ThreeDots" color="#e66109" height="100" width="100" />
      </Container>
    )
  );
};

export default IndicadorCarga;
