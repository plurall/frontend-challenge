import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Artist  from '../Artist/Artist'
import  Search  from '../Search/Search'

import { SomosClient } from 'utils'

import styles from './Home.module.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {
    user: []
  }

  client = new SomosClient()


  
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <Switch>
            <Route exact  path="/" render={props => (
            <Fragment>
              <div className={styles.wraphome}>
                <div>
                  <h2 className={styles.texthome}>Encontre aqui os todos artistas do Spotify</h2>
                  <Link className={styles.btnhome} to="/busca">Ir para Busca</Link>
                </div>
              </div>
            </Fragment>
            )}
            />
            <Route 
              exact 
              component={Search} 
              path="/busca" 
              render={props => 
              <Search {...props} />}
              />
            <Route 
              exact 
              path="/artista/:id" 
              render={props => 
                <Artist {...props} 
                  getArtist={this.getArtist} 
                  user={user} 
                />} 
              />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
