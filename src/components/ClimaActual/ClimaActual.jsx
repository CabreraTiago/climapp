import React from "react";
import Dato from "../Dato/Dato";
import styles from "./ClimaActual.module.css";

const ClimaActual = ({ ciudad, climaActual }) => {
  return (
    <div className={styles.contenedor_clima_actual}>
      <div className={styles.clima_actual}>
        <label className={styles.fuente_clima_actual}>{ciudad}</label>
        <label className={styles.fuente_clima_actual}>
          {Math.round(climaActual.temp)}°
        </label>
        <img
          src={`${process.env.REACT_APP_URL_ICON_INIT}${climaActual.weather[0].icon}${process.env.REACT_APP_URL_ICON_END}`}
          alt=""
        />
        <label style={{ textTransform: "capitalize" }}>
          {climaActual.weather[0].description}
        </label>
        <div className={styles.contenedor_datos_clima}>
          <Dato dato="Humedad" valor={climaActual.humidity} medida="%" />
          <Dato
            dato="Viento"
            valor={Math.round((climaActual.wind_speed * 3600) / 1000)}
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
