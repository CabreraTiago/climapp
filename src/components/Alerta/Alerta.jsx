import React from "react";
import { Alert, Container } from "react-bootstrap";
import styles from "./Alerta.module.css";

const Alerta = ({ mensajeError }) => {
  return (
    <Container className={styles.contenedor_alerta}>
      <Alert variant="danger">{mensajeError}</Alert>
    </Container>
  );
};

export default Alerta;
