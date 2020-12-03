import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const PronosticoExtendido = ({ pronostico }) => {
  return (
    <Card style={{ width: "5%" }} className="text-center">
      <Card.Header>
        {new Date(pronostico.dt * 1000).toLocaleDateString("es")}
      </Card.Header>
      <Card.Body>
        <Card.Img
          src={`http://openweathermap.org/img/wn/${pronostico.weather[0].icon}@2x.png`}
        />
        <Card.Text>
          {Math.round(pronostico.temp.min)}° / {Math.round(pronostico.temp.max)}
          °
        </Card.Text>
      </Card.Body>
      <Card.Footer>{pronostico.weather[0].main}</Card.Footer>
    </Card>
  );
};

export default PronosticoExtendido;
