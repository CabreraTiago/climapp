import { Fragment, useState } from "react";
import axios from "axios";
import { CardGroup } from "react-bootstrap";
import "./App.css";
import Buscador from "./components/Buscador";
import PronosticoExtendido from "./components/PronosticoExtendido";
import TemperaturaActual from "./components/TemperaturaActual";

const apiLocalizacion = {
  base: "https://api.opencagedata.com/geocode/v1/",
  key: "3433608c06dc4df79f650519ec5e89e4",
};

const apiClima = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "331ae48f5388a37219c7c9dd37667b27",
  iconInit: "http://openweathermap.org/img/wn/",
  iconEnd: "@2x.png",
  units: "metric",
  exclude: "hourly,minutely,alerts",
};

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState("");

  const getClima = (e) => {
    e.preventDefault();
    axios
      .get(
        `${apiLocalizacion.base}json?q=${busqueda}&key=${apiLocalizacion.key}`
      )
      .then((response) => {
        let ciudad =
          response.data.results[0].components.city ||
          response.data.results[0].components.town;

        setCiudad(`${ciudad}, ${response.data.results[0].components.country}`);
        let coordenadas = response.data.results[0].geometry;
        axios
          .get(
            `${apiClima.base}onecall?lat=${coordenadas.lat}&lon=${coordenadas.lng}&units=${apiClima.units}&exclude=${apiClima.exclude}&appid=${apiClima.key}`
          )
          .then((response) => {
            setClima(response.data);
          });
      });
  };

  return (
    <Fragment>
      <Buscador
        onChange={(e) => setBusqueda(e.target.value)}
        getClima={getClima}
      />
      {typeof clima.current != "undefined" ? (
        <TemperaturaActual ciudad={ciudad} clima={clima} />
      ) : (
        ""
      )}
      {/* <CardGroup>
        {pronostico.map((pr) => (
          <PronosticoExtendido  />
        ))}
      </CardGroup> */}
    </Fragment>
  );
}

export default App;
