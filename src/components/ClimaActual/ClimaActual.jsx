import React, { Fragment } from "react";

import Dato from "../Dato/Dato";
import capitalize from "capitalize";
import styles from "./ClimaActual.module.css";

const ClimaActual = ({ ciudad, climaActual }) => {
  return (
    <Fragment>
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
          <label>{capitalize(climaActual.weather[0].description)}</label>
        </div>
      </div>
      <div className={styles.contenedor_padre_datos_clima}>
        <div className={styles.contenedor_hijo_datos_clima}>
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
    </Fragment>
  );
};

export default ClimaActual;
