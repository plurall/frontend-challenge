import { SubHeader } from 'components'
import { FadeWrapper } from 'components/FadeWrapper'
import React from 'react'
import { SiSpotify } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Desafio Front-end do Plurall"
      />

      <FadeWrapper>
        <div className={styles.wrapper}>
          <h1>Visualize os seus artistas favoritos!</h1>

          <Link to="/search/artists">
            <button className={styles.button}>
              <span className={styles.textButton}>
                <SiSpotify /> Buscar artistas
              </span>
            </button>
          </Link>
        </div>
      </FadeWrapper>
    </>
  )
}

export default Home
