import {
  faTemperatureHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import capitalize from "capitalize";
import styles from "./PronosticoExtendido.module.css";

const PronosticoExtendido = ({ pronostico }) => {
  return (
    <div className={styles.contenedor_pronostico}>
      {pronostico &&
        pronostico.map((dia, i) => (
          <div className={styles.pronostico} key={i}>
            <label style={{ textTransform: "capitalize" }}>
              {new Date(dia.dt * 1000).toLocaleDateString("es-AR", {
                weekday: "short",
                day: "numeric",
              })}
            </label>
            <img
              src={`${process.env.REACT_APP_URL_ICON_INIT}${dia.weather[0].icon}${process.env.REACT_APP_URL_ICON_END}`}
              alt=""
            />
            <label>
              <FontAwesomeIcon icon={faTemperatureLow} />
              {Math.round(dia.temp.min)} / {Math.round(dia.temp.max)}
              <FontAwesomeIcon icon={faTemperatureHigh} />
            </label>
            <label>{capitalize(dia.weather[0].description)}</label>
          </div>
        ))}
    </div>
  );
};

export default PronosticoExtendido;
