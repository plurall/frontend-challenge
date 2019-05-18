import React, {Fragment} from 'react'
import {  Link } from "react-router-dom";
import { SubHeader } from 'components'

import styles from './Home.module.css'

import SomosClient from '../../utils/client'

class Home extends React.Component {
  state = {
    data: {},
  }

  getApi = () => {
    SomosClient(res =>
      this.setState({ data: res.data }))
  }

  render() {
    const { data: { artists } } = this.state
    console.log(artists)

    return (
      <Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <button onClick={this.getApi}>API</button>
        <Link to="/search">Pesquisar Artista</Link>
        <div className={styles.wrapper}>
          <h1>Hi</h1>
        </div>
      </Fragment>
    )
  }
}

export default Home
