import { Card, Container, ListGroup } from 'react-bootstrap';

import React from 'react';
import capitalize from 'capitalize';
import convert from 'convert-units';

const ClimaActual = ({ ciudad, climaActual }) => {
  const { temp, humidity, wind_speed, visibility } = climaActual;
  const { icon, description } = climaActual.weather[0];

  return (
    <Container className="d-flex justify-content-center font-italic">
      <Card className="text-white text-center bg-transparent border-0">
        <Card.Header className="h5">{ciudad}</Card.Header>
        <Card.Body>
          <Card.Text className="h5">{Math.round(temp)}°</Card.Text>
          <Card.Img
            src={`${process.env.REACT_APP_URL_ICON_INIT}${icon}${process.env.REACT_APP_URL_ICON_END}`}
            style={{ width: '100px' }}
          />
          <Card.Text>{capitalize(description)}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <ListGroup horizontal>
            <ListGroup.Item className="bg-transparent">
              Humedad {humidity}%
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Viento {Math.round(convert(wind_speed).from('m/s').to('km/h'))}{' '}
              Km/h
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Visibilidad {convert(visibility).from('m').to('km')} Km
            </ListGroup.Item>
          </ListGroup>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ClimaActual;
