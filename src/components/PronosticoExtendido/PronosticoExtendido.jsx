import React from "react";

const PronosticoExtendido = ({ pronostico }) => {
  return (
    <div className="pronostico">
      <label style={{ textTransform: "capitalize" }}>
        {new Date(pronostico.dt * 1000).toLocaleDateString("es-AR", {
          weekday: "short",
          day: "numeric",
        })}
      </label>
      <img
        src={`${process.env.REACT_APP_URL_ICON_INIT}${pronostico.weather[0].icon}${process.env.REACT_APP_URL_ICON_END}`}
      />
      <label>
        {Math.round(pronostico.temp.min)}° / {Math.round(pronostico.temp.max)}°
      </label>
      <label style={{ textTransform: "capitalize" }}>
        {pronostico.weather[0].description}
      </label>
    </div>
  );
};

export default PronosticoExtendido;
