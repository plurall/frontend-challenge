import React from 'react'
import * as styles from './Spinner.module.scss'

const Spinner = () => {
  return <div className={styles.spinner} data-test-id='spinner' aria-label='Loading...' />
}

export default Spinner
