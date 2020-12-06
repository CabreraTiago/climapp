import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PronosticoExtendido = ({ pronostico }) => {
  return (
    <div className="pronostico">
      <label>{new Date(pronostico.dt * 1000).toLocaleDateString("es")}</label>
      <img
        src={`http://openweathermap.org/img/wn/${pronostico.weather[0].icon}@2x.png`}
      />
      <label>
        {Math.round(pronostico.temp.min)}° / {Math.round(pronostico.temp.max)}°
      </label>
      <label>{pronostico.weather[0].main}</label>
    </div>
  );
};

export default PronosticoExtendido;
