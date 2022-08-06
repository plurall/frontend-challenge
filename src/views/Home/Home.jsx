import React from 'react'

import { SubHeader } from 'components'

import styles from './Home.module.scss'

class Home extends React.Component {
  state = {}

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper} />
      </>
    )
  }
}

export default Home
