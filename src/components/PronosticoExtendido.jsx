import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const PronosticoExtendido = ({ fecha, img, temp, desc }) => {
  return (
    <Card style={{ width: "5%" }} className="text-center">
      <Card.Header>{fecha}</Card.Header>
      <Card.Body>
        <Card.Img src={img} />
        <Card.Text>{temp}</Card.Text>
      </Card.Body>
      <Card.Footer>{desc}</Card.Footer>
    </Card>
  );
};

export default PronosticoExtendido;
