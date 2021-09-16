import React from 'react'
import CardHome from '../../components/Card/CardHome';
import styles from './Home.module.css'
import mock from '../../mock/mock'

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <img className={styles.image} src="images/bg2.jpg" alt="bg" />
        <h1 className={styles.title}>Início</h1>
        {CardHome(mock)} 
      </div>
    </React.Fragment>
  )
}

export default Home
