import React, { Component } from 'react';
import SomosClient from '../../utils/client';
import { Perfil } from '../../components/';

export class Detalhe extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.spotifyRequest = new SomosClient();
    }

    state = {
        albuns : [],
        artista : []
    }

    async componentDidMount() {
        let {name, popularity, images, genres} = await this.spotifyRequest.getArtist(this.id)
        this.setState({artista : {name, popularity, images, genres}})
        let {items : albuns} = await this.spotifyRequest.getAlbuns(this.id)
        this.setState({albuns})
    }
    
    render() {
        return(
            <div>
                <Perfil {...this.state} />
            </div>
        )
    }
}

export default Detalhe;