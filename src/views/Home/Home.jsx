import React from 'react'

import { SubHeader } from 'components'
import { Button } from 'plurall-ui'
import { A } from 'hookrouter'

import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Hi Welcome our Plurall music platform!! Choose your favorite artist and enjoy it .</h1>
        <A href = {'/search'}>
          <Button className={styles.btnSearch}>
            Search your favorite artist
          </Button>
        </A>  
      </div>
    </>
  )
}

export default Home
