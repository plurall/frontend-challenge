import React from 'react'

import { SubHeader, Info } from 'components'
import { SomosClient } from 'utils';

const client = new SomosClient()
class About extends React.Component {
  state = {
    info: {},
    albums: {}
  }

  componentDidMount(){
    if(this.props.match){
      const { params } = this.props.match;

      this.search(params['id'])
    }
  }

  /* Use results from fetch */
  search = (id) => {
    client.getAboutArtist(id)
      .then((res) => {
        this.setState({ info: res })
    })
      .catch((err) => {
        return alert(err.message)
    });;
    client.getAboutArtistAlbums(id)
      .then((res) => {
        this.setState({ albums: res })
    })
      .catch((err) => {
        return alert(err.message)
      });

  }

  render() {
    const { info, albums } = this.state;

    let image;
    if(info['images'] && info['images'].length > 0){
      image = info['images'][0]['url']
    }

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Sobre' }]}
          heading={info['name']}
        />
        <Info
          name={info['name']}
          popularity={info['popularity']}
          image={image}
          genres={info['genres']}
          albums={albums}
        />
      </React.Fragment>
    )
  }
}

export default About