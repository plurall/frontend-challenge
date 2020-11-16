import React from 'react'

import { SubHeader, ArtistInfo, ArtistAlbums,LoadingContent } from 'components'
import { SomosClient } from 'utils'



class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      artist: {},
      albums: []
    };
  }

  client = new SomosClient()

  componentDidMount() {
    const artistId = this.props.match.params.id
    console.log(artistId);

    const promises = []
    promises.push(this.client.getArtist(artistId));
    promises.push(this.client.getAlbumsByArtist(artistId));

    Promise.all(promises).then((values) => {
      console.log('Valores');
      console.log(values);
      this.setState({
        isLoaded: true,
        artist: values[0],
        albums: values[1]
      });
    });

  }



  render() {
    const { isLoaded, artist, albums } = this.state;
    if (!isLoaded) {
      return <LoadingContent></LoadingContent>
    } else {
      return (
        <React.Fragment>
          <SubHeader
            breadcrumb={[{ text: 'Home > Pesquisa > Artista' }]}
            buttonHref="/Pesquisa"
            heading="Artista"
          />
          <div className="container">
            <div className="">
              <div className="py-5 px-4">
                <ArtistInfo artist={artist}>
                  <ArtistAlbums albums={albums}></ArtistAlbums>
                </ArtistInfo>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }

  }
}

export default Artist