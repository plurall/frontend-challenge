import React from 'react'
import { Link } from 'react-router-dom';

import { SubHeader, ButtonLink } from 'components'
import { Heading } from 'plurall-ui'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
import smile from '../../smile.svg'

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
        <div className={styles.wrapper}>
          <Heading>Olá, procure por seus artistas preferidos</Heading>
          <div className={styles.link}>
            <Link to='/search'>
              <ButtonLink>aqui</ButtonLink>
              <div className={styles.smile}>
                <img alt='Smile' src={smile} />
              </div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
