import React from 'react'

import { SubHeader, Profile, LastReleases,LoadingContent } from 'components'
import { SomosClient } from 'utils'


import {
  Link
} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      profile: {},
      lastReleases: []
    };
  }

  client = new SomosClient();

  componentDidMount() {

    const promises = []
    promises.push(this.client.getProfile());
    promises.push(this.client.getLastReleases());

    Promise.all(promises).then((values) => {
      console.log('Valores');
      console.log(values);
      this.setState({
        isLoaded: true,
        profile: values[0],
        lastReleases: values[1]
      });
    });

  }

  render() {
    if (!this.state.isLoaded) {
      return <LoadingContent></LoadingContent>
    } else {
      return (
        <React.Fragment>
          <SubHeader
            breadcrumb={[{ text: 'Home' }]}
            heading="Aplicação Spotify"
          />
          <div className="container">
            <div className="main-body">
              <div className="row">
                <div className="col-sm-12 text-right">
                <Link to="/Pesquisa" className="btn btn-info">Clique aqui para pesquisar artistas</Link>
                </div>         
              </div>
              <div className="row gutters-sm">
                <Profile profile={this.state.profile}></Profile>
                <LastReleases releases={this.state.lastReleases}></LastReleases>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Home
