import "./App.css";

import { Fragment, useEffect, useState } from "react";

import Alerta from "./components/Alerta/Alerta";
import Buscador from "./components/Buscador/Buscador";
import ClimaActual from "./components/ClimaActual/ClimaActual";
import IndicadorCarga from "./components/IndicadorCarga/IndicadorCarga";
import PronosticoExtendido from "./components/PronosticoExtendido/PronosticoExtendido";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState("");
  const [error, setError] = useState({
    error: false,
    mensajeError: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      trackPromise(
        axios
          .get(
            `${process.env.REACT_APP_API_LOCALIZACION}json?q=${position.coords.latitude}+${position.coords.longitude}&key=${process.env.REACT_APP_KEY_API_LOCALIZACION}`
          )
          .then((response) => {
            getDatosMeteorologicos(response.data.results[0]);
          })
          .catch((error) => console.log(error))
      );
    });
  }, []);

  const getClima = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") {
      setError({ error: true, mensajeError: "Debe ingresar una ciudad" });
      return;
    }

    setError({ error: false, mensajeError: "" });

    trackPromise(
      axios
        .get(
          `${process.env.REACT_APP_API_LOCALIZACION}json?q=${busqueda}&key=${process.env.REACT_APP_KEY_API_LOCALIZACION}`
        )
        .then((response) => {
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
        .catch((error) => console.log(error))
    );
  };

  const getDatosMeteorologicos = (localizacion) => {
    trackPromise(
      axios
        .get(
          `${process.env.REACT_APP_API_CLIMA}onecall?lat=${localizacion.geometry.lat}&lon=${localizacion.geometry.lng}&units=${process.env.REACT_APP_API_CLIMA_UNITS}&exclude=${process.env.REACT_APP_API_CLIMA_EXCLUDE}&lang=es&appid=${process.env.REACT_APP_KEY_API_CLIMA}`
        )
        .then((response) => {
          setClima(response.data);
          setCiudad(
            `${
              localizacion.components.city ||
              localizacion.components.town ||
              localizacion.components.state
            }, ${localizacion.components.state} (${
              localizacion.components["ISO_3166-1_alpha-3"]
            })`
          );
          setBusqueda("");
        })
        .catch((error) => console.log(error))
    );
  };

  return (
    <Fragment>
      <Buscador
        onChange={(e) => setBusqueda(e.target.value)}
        value={busqueda}
        getClima={getClima}
      />
      {error.error ? <Alerta mensajeError={error.mensajeError} /> : ""}
      <IndicadorCarga />
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
