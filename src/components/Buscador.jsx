import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Buscador = ({ onChange, getClima }) => {
  return (
    <div className="buscador">
      <Form onSubmit={getClima} onChange={onChange}>
        <Form.Group>
          <Form.Control
            style={{
              background: "none",
              color: "white",
              textAlign: "center",
              borderRadius: "24px",
              border: "2px solid white",
              outline: "none",
              transition: "0.25s",
            }}
            type="text"
            placeholder="Ingrese una ciudad"
            className="buscador-input"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Buscador;
