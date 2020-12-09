import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Form } from "react-bootstrap";

import React from "react";
import styles from "./Buscador.module.css";

const Buscador = ({ onChange, value, getClima }) => {
  return (
    <Container className={styles.contenedor_buscador}>
      <Form onChange={onChange} onSubmit={getClima}>
        <Form.Group>
          <Form.Control
            type="text"
            value={value}
            className={styles.buscador}
            placeholder="Ingrese una ciudad"
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Buscador;
