import { Container } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import React from 'react';
import styles from './IndicadorCarga.module.css';
import { usePromiseTracker } from 'react-promise-tracker';

const IndicadorCarga = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <Container className={styles.contenedor_indicador}>
        <Loader type="ThreeDots" color="#ffffff" height="70" width="70" />
      </Container>
    )
  );
};

export default IndicadorCarga;
