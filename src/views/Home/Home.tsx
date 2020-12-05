import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import SubHeader from '../../components/SubHeader'

import styles from './Home.module.css'

const Home: React.FC = () => {

  // useEffect used to remove the data from artists in local storage
  useEffect(() => {
    localStorage.removeItem('@SomosEducacaoTesteFront: Artists');
  }, []);


  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challenge"
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Olá, seja bem vindo ao teste resolvido pelo Felipe Monteiro!</h1>
        <h4 className={styles.paragraph}>Para ir até a página de busca por artistas, clique no link abaixo:</h4>
        <Link to='/busca' >Buscar Artista</Link>
      </div>
    </>
  );
}

export default Home
