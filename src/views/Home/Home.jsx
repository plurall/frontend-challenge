import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

class Home extends React.Component {
  render() {
    return ( 
      <>
        <div className={styles.wrapper}>
          <div className={styles.wrapHome}>
            <h2 className={styles.titleHome}>Faça aqui a sua busca por artistas do Spotify!!</h2>
            <Link 
              data-testid="form-btn"
              to="/busca" 
              className={styles.buttonHome}>
              Buscar por artistas
          </Link>
          </div>
        </div>
      </>
    );
  };
};

export default Home
