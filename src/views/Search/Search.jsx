import React from 'react'

// import { SubHeader } from 'components'
import { SomosClient } from 'utils'

// import styles from './Home.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    // const getArtists = async () => {
    //   const artists = await this.client.getArtists()
    //   console.log(artists)
    // }
    // getArtists()

    return (
      <React.Fragment>
        {/* <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        /> */}
        <div>
          <h1>Busca</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
