import React, { Component } from 'react';
import RateStar from '../utils/RateStar';

import Card from './card';

export class Perfil extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        profilePhoto: 'https://bit.ly/2PYBAXl'
    }

    componentWillReceiveProps() {
        if(this.props.artista.images){
            this.setState({profilePhoto: this.props.artista.images[0].url})
        }
    }
    
    render() {
        return (
            <>
            <div className="row">
                <div className="wrapper-perfil">
                    <div className="perfil-header">
                        <span className="Profile-name">{this.props.artista.name}</span>
                        <img className="profile-photo" src={this.state.profilePhoto} />
                        <RateStar popularidade={this.props.artista.popularity} />
                    </div>
                    <div className="perfil-body">
                        <span className="album-title">Albuns</span>
                        <div className="album-content">
                        <Card albuns={[...this.props.albuns]} />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Perfil;