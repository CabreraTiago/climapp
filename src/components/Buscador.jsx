import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Buscador = ({ onChange, getClima }) => {
  return (
    <div className="buscador">
      <Form style={{ width: "20%" }} onSubmit={getClima} onChange={onChange}>
        <Form.Group>
          <Form.Control type="text" placeholder="Ingrese una ciudad" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Buscador;
