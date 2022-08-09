import React from 'react'
import { SomosClient } from 'utils'

import styles from './Spinner.module.scss'

class Spinner extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <div className={styles.wrapper}>
        <img src="./spinner.svg" alt="" />
      </div>
    )
  }
}

export default Spinner
