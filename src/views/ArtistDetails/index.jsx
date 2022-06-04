import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'


import styles from './ArtistDetails.module.css'

class ArtistDetails extends React.Component {
  state = { data: [] }

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Artists' }]}
          heading=""
        />
        <div className={styles.wrapper}>
          <h1>Artistas</h1>
        </div>

      </>
    )
  }
}

export default ArtistDetails
