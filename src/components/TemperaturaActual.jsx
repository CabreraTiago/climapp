import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup } from "react-bootstrap";

const TemperaturaActual = ({ ciudad, clima }) => {
  return (
    <div className="temperatura-actual">
      <Card className="card-temperatura-actual text-center" bg="light">
        <Card.Header>{ciudad}</Card.Header>
        <Card.Body>
          <Card.Text>{Math.round(clima.current.temp)}°</Card.Text>
          <Card.Img
            src={`http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`}
            width="30px"
            height="40px"
          />
          <Card.Text>{clima.current.weather[0].main}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Humedad {clima.current.humidity}%</ListGroup.Item>
            <ListGroup.Item>
              Viento {clima.current.wind_speed} Km/h
            </ListGroup.Item>
            <ListGroup.Item>
              Visibilidad {clima.current.visibility} Km
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TemperaturaActual;
