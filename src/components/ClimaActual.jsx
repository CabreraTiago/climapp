import React from "react";
import Dato from "./Dato";

const ClimaActual = ({ ciudad, clima }) => {
  return (
    <div className="contenedor-clima-actual">
      <div className="clima-actual">
        <label>{ciudad}</label>
        <label>{Math.round(clima.current.temp)}°</label>
        <img
          src={`http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`}
          alt=""
        />
        <label>{clima.current.weather[0].main}</label>
        <div className="contenedor-datos-clima">
          <Dato dato="Humedad" valor={clima.current.humidity} medida="%" />
          <Dato dato="Viento" valor={clima.current.wind_speed} medida=" Km/h" />
          <Dato
            dato="Visibilidad"
            valor={clima.current.visibility / 1000}
            medida=" Km"
          />
        </div>
      </div>
    </div>
  );
};

export default ClimaActual;
