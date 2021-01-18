import React from 'react'
import { SubHeader } from 'components'

import styles from './Artist.module.css'

const Artist = () => {
  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home | Search | Artist' }]}
      /> 
      
      <div className = {styles.wrapper}>
        <h2 className={styles.title}>Welcome to my page</h2>
      </div>
    </>
  )
}

export default Artist