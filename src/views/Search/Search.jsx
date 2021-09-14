import { Input } from 'components'
import React from 'react'

// import { SubHeader } from 'components'
// import { SomosClient } from 'utils'

// import styles from './Home.module.css'

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        /> */}
        <div>
          <h1>Busca</h1>
          <Input />
        </div>
      </React.Fragment>
    )
  }
}

export default Search
