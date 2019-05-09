import React, { Component, Fragment } from 'react';

import { SomosClient, capitalize } from 'utils'
import AlbumComponent from './AlbumComponent'
import { Heading, Text } from '@plurall/elo'

import styles from '../Home/Home.module.css'

class ArtistPage extends Component {
    render() {
        var { name, images, uri, href, external_urls, popularity, genres } = this.state.artist
        var portrait = images ? images[2].url : ''
        var { items } = this.state.albums
        var genreList = genres ? genres.map((item, index) => <Text element="span">{capitalize((index ? ', ': '') + item)}</Text>) : ""
        
        return (
            <div>
                <div className="bg-white">
                    <div className={styles.wrapper + " d-flex a-ver"}>
                        <img src={portrait} alt=""/>
                        <div className="mar-l-20">
                            <Heading>{name}</Heading>
                            <Text className="mar-t-10">Popularidade: {popularity}º</Text>
                            <div className="mar-t-10">{genreList}</div>
                        </div>
                    </div> 
                </div>
                <div className={styles.wrapper}>
                    <AlbumComponent list={items}/>
                </div>
            </div>
        );
    }

    state = {
        albums: {},
        artist: {}
    }

    componentDidMount = () => {
        var { id } = this.props.match.params
        var client = new SomosClient()

        client.getAlbums(id)
            .then(albums => this.setState({albums: albums.data}))
            .then(client.getSingleArtist(id)
            .then(artist => this.setState({artist: artist.data})))
    }
}

export default ArtistPage;