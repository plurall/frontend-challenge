import PropTypes from 'prop-types'
import React from 'react'

export default function ArtistIntro({ artist }){
    if(!artist) return (
        <div className="artist-not-found">
            O artista não foi encontrado.
        </div>
    )

    return(
        <div className="artist-intro" data-testid="artist-intro">
            <div className="avatar">
                <img 
                    alt={`Foto do artista ${artist.name}`} 
                    src={artist.photograph}
                    className="photograph"
                />
            </div>
            <div className="info">
                <span className="name">
                    {artist.name}
                </span>
                <span className="popularity">
                    Popularidade: {artist.popularity}
                </span>
                <span className="genres">
                    Generos: {artist.genres.join(', ')}
                </span>
            </div>
        </div>
    )
}

ArtistIntro.propTypes = {
    artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        photograph: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired
    })
}