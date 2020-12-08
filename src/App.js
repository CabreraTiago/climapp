import { Fragment, useState } from "react";
import axios from "axios";
import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import ClimaActual from "./components/ClimaActual/ClimaActual";
import PronosticoExtendido from "./components/PronosticoExtendido/PronosticoExtendido";
import Alerta from "./components/Alerta/Alerta";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState("");
  const [error, setError] = useState({
    error: false,
    mensajeError: "",
  });

  const getClima = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") {
      setError({ error: true, mensajeError: "Debe ingresar una ciudad" });
      return;
    }

    setError({ error: false, mensajeError: "" });

    axios
      .get(
        `${process.env.REACT_APP_API_LOCALIZACION}json?q=${busqueda}&key=${process.env.REACT_APP_KEY_API_LOCALIZACION}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length === 0) {
          setError({
            error: true,
            mensajeError: "La ciudad ingresada no existe",
          });
          return;
        }
        setError({ error: false, mensajeError: "" });
        getDatosMeteorologicos(response.data.results[0]);
      })
      .catch((error) => console.log(error));
  };

  const getDatosMeteorologicos = (localizacion) => {
    axios
      .get(
        `${process.env.REACT_APP_API_CLIMA}onecall?lat=${localizacion.geometry.lat}&lon=${localizacion.geometry.lng}&units=${process.env.REACT_APP_API_CLIMA_UNITS}&exclude=${process.env.REACT_APP_API_CLIMA_EXCLUDE}&lang=es&appid=${process.env.REACT_APP_KEY_API_CLIMA}`
      )
      .then((response) => {
        setClima(response.data);
        setCiudad(
          `${localizacion.components.city || localizacion.components.town}, ${
            localizacion.components.country
          }`
        );
        setBusqueda("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <Buscador
        onChange={(e) => setBusqueda(e.target.value)}
        value={busqueda}
        getClima={getClima}
      />
      {error.error ? <Alerta mensajeError={error.mensajeError} /> : ""}
      {clima.current ? (
        <ClimaActual ciudad={ciudad} climaActual={clima.current} />
      ) : (
        ""
      )}
      <br />
      <PronosticoExtendido pronostico={clima.daily} />
    </Fragment>
  );
}

export default App;
