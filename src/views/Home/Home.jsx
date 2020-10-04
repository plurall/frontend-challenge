import React, {Component} from 'react'

import { Link } from 'react-router-dom';
import { SomosClient } from 'utils'
import logoURL from '../../assets/logo-spotify.png'

export default class Home extends Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        {/* <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        /> */}
        <div className="home">
          <Link to="/busca">
            <img src={logoURL} alt="Spotify" className="logo-spotify" />
          </Link>
        </div>
      </>
    )
  }
}

