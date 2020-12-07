import { Fragment, useState } from "react";
import axios from "axios";
import "./App.css";
import Buscador from "./components/Buscador";
import PronosticoExtendido from "./components/PronosticoExtendido";
import ClimaActual from "./components/ClimaActual";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState("");

  const getClima = (e) => {
    e.preventDefault();
    axios
      .get(
        `${process.env.REACT_APP_API_LOCALIZACION}json?q=${busqueda}&key=${process.env.REACT_APP_KEY_API_LOCALIZACION}`
      )
      .then((response) => {
        getDatosMeteorologicos(response.data.results[0]);
      });
  };

  const getDatosMeteorologicos = (localizacion) => {
    axios
      .get(
        `${process.env.REACT_APP_API_CLIMA}onecall?lat=${localizacion.geometry.lat}&lon=${localizacion.geometry.lng}&units=${process.env.REACT_APP_API_CLIMA_UNITS}&exclude=${process.env.REACT_APP_API_CLIMA_EXCLUDE}&appid=${process.env.REACT_APP_KEY_API_CLIMA}`
      )
      .then((response) => {
        setClima(response.data);
        setCiudad(
          `${localizacion.components.city || localizacion.components.town}, ${
            localizacion.components.country
          }`
        );
      });
  };

  return (
    <Fragment>
      <Buscador
        onChange={(e) => setBusqueda(e.target.value)}
        getClima={getClima}
      />
      <br />
      {typeof clima.current != "undefined" ? (
        <ClimaActual ciudad={ciudad} climaActual={clima.current} />
      ) : (
        ""
      )}
      <br />
      <div className="contenedor-pronostico">
        {clima.daily &&
          clima.daily.map((pronostico, i) => (
            <PronosticoExtendido key={i} pronostico={pronostico} />
          ))}
      </div>
    </Fragment>
  );
}

export default App;
