import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import Wrapper from '../../components/Wrapper'
import styles from './Home.module.css'


class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challenge"
        />
        <Wrapper>
          <Link className={styles.searchButton} to="/busca">Buscar</Link>

          <div className={styles.container}>
            <div className={styles.serviceBox}>
              <div className={styles.icon} style={{ backgroundColor: 'var(--color-vivid-blue)' }}><p>P</p></div>
              <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ipsum et metus fringilla
                  semper nec vel elit.
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.icon} style={{ backgroundColor: 'var(--color-vidid-light-pink)' }}><p>L</p></div>
              <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ipsum et metus fringilla
                  semper nec vel elit.
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.icon} style={{ backgroundColor: 'var(--color-vidid-green)' }}><p>U</p></div>
              <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ipsum et metus fringilla
                  semper nec vel elit.
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.icon} style={{ backgroundColor: 'var(--color-vidid-yellow)' }}><p>R</p></div>
              <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ipsum et metus fringilla
                  semper nec vel elit.
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.icon} style={{ backgroundColor: 'var(--color-vidid-dark-green)' }}><p>A</p></div>
              <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ipsum et metus fringilla
                  semper nec vel elit.
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.icon} style={{ backgroundColor: 'var(--color-vidid-pink)' }}><p>LL</p></div>
              <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ipsum et metus fringilla
                  semper nec vel elit.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Home
