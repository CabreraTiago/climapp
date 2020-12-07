import React from "react";
import Dato from "./Dato";

const ClimaActual = ({ ciudad, climaActual }) => {
  return (
    <div className="contenedor-clima-actual">
      <div className="clima-actual">
        <label>{ciudad}</label>
        <label>{Math.round(climaActual.temp)}°</label>
        <img
          src={`http://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`}
          alt=""
        />
        <label>{climaActual.weather[0].main}</label>
        <div className="contenedor-datos-clima">
          <Dato dato="Humedad" valor={climaActual.humidity} medida="%" />
          <Dato
            dato="Viento"
            valor={(climaActual.wind_speed * 3600) / 1000}
            medida=" Km/h"
          />
          <Dato
            dato="Visibilidad"
            valor={climaActual.visibility / 1000}
            medida=" Km"
          />
        </div>
      </div>
    </div>
  );
};

export default ClimaActual;
