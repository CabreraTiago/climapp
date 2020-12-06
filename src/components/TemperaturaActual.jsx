import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TemperaturaActual = ({ ciudad, clima }) => {
  return (
    <div className="contenedor-temperatura-actual">
      <div className="temperatura-actual">
        <label>{ciudad}</label>
        <label>{Math.round(clima.current.temp)}°</label>
        <img
          src={`http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`}
          alt=""
        />
        <label>{clima.current.weather[0].main}</label>
        <label>Humedad {clima.current.humidity}%</label>
        <label>Viento {clima.current.wind_speed} Km/h</label>
        <label>Visibilidad {clima.current.visibility} Km</label>
      </div>
    </div>
  );
};

export default TemperaturaActual;
