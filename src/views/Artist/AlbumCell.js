import React, { Component } from 'react'

import { SomosClient } from 'utils'
import { parseMS, formatDate } from 'utils'
import { Button, Text, Link, Heading } from '@plurall/elo'

class AlbumCell extends Component {
    render() {
        var { artists, name, external_urls, images, release_date, total_tracks, uri} = this.props.album
        return (
            <div>
                <div className="d-flex a-ver r-cell">
                    <div><img className="cell-img" src={images[0].url} alt=""/></div>
                    <div className="mar-l-16 album-details">
                        <Heading>{name}</Heading>
                        <p className="mar-t-12">de <span>{artists[0].name}</span></p>
                        <div className="mar-t-10">
                            <p>{formatDate(release_date)} | {total_tracks} músicas</p>
                        </div>
                        <div className="mar-t-10 album-external d-flex">
                            <div className="external-app"><a href={uri}><Button className="mar-r-6">Ouvir pelo Aplicativo</Button></a></div>
                            <div className="external-site"><a href={external_urls.spotify}><Button>Ouvir pelo Site</Button></a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        {this.drawTracks()}
                    </ul>
                </div>
            </div>
        )
    }

    state = {
        tracks: []
    }

    componentDidMount = () => {
        var { id } = this.props.album
        var client = new SomosClient()
        client.getAlbumTracks(id).then(tracks => this.setState({tracks: tracks.data.items}))
    }

    drawTracks = () => {
        var trackList = []
        var spinner = (<div className="d-flex a-hor"><div className="spinner"></div></div>)

        for(var i in this.state.tracks){
            if(i < 3){
                var { track_number, name, uri, duration_ms, artists, external_urls } = this.state.tracks[i]
                var artistsList = artists.map(artist => <span className="mar-r-10"><Link secondary href={'/artista/' + artist.id}>{artist.name}</Link></span>)
    
                trackList.push((
                    <li className="d-flex a-ver a-bet pad-10 cell-border">
                        <div className="d-flex a-ver">
                            <Text>{track_number}</Text>
                            <div className="mar-h-10 d-flex a-ver track-details">
                                <div className="mar-h-10 track-title"><Text>{name}</Text></div>
                                <span>{artistsList}</span>
                            </div>
                        </div>
                        <div className="d-flex a-ver">
                            <span>{parseMS(duration_ms)}</span>
                            <div className="mar-h-10"><Link href={uri}><Button><span className="mdi mdi-play s-24"></span></Button></Link></div>
                            <div><Link href={external_urls.spotify}><Button><span className="mdi mdi-arrow-right s-24"></span></Button></Link></div>
                        </div>
                    </li>
                ))
            }
        }

        return this.state.tracks !== 0 ? trackList : spinner
    }
}

export default AlbumCell;