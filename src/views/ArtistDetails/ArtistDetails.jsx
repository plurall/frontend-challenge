import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import { SubHeader } from 'components';

import userDefault from "../../assets/icons/user-default.svg"
import musicalNote from "../../assets/icons/music.svg"
import playMusic from "../../assets/icons/play.svg"
import popularity from "../../assets/icons/popularity.svg"

import {
  wrapper,
  folder_container as folderContainer,
  albums_container as albumsContainer,
  artist_container as artistContainer,
  artist_name as artistName,
  box_title as boxTitle
} from './ArtistDetails.module.css';
import { BaseRoutes } from 'routes/BaseRoutes';
import { SomosClient } from 'utils';
import GenreMusic from 'components/GenreMusic';
import Card from 'components/Card';

const INIT_ARTIST = {
  id: "",
  name: "",
  popularity: 0,
  genres: [],
  link: "",
  photo: "",
}

const ArtistDetails = (props) => {
  const [artist, setArtist] = useState(INIT_ARTIST)
  const [albums, setAlbums] = useState([])
  const id = props.match.params.id
  const client = new SomosClient()

  const onLoadArtistAndAlbums = async () => {
    try {
      const responses = await Promise.allSettled([
        client.getArtistById(id),
        client.getAlbumsByArtistId(id)
      ])

      if(responses[0] && responses[0].value){
        const data = responses[0].value.data
        const genres = data.genres.length > 5 ? data.genres.slice(0, 5) : data.genres
        setArtist({
          id: data.id,
          name: data.name,
          popularity: data.popularity,
          genres,
          link: data.external_urls.spotify,
          photo: data.images.length ? data.images[0].url : userDefault,
        })
      }

      if(responses[1] && responses[1].value){
        const data = responses[1].value.data
        setAlbums(data.items.map(item => ({
          id: item.id,
          folder: item.images.length ? item.images[0].url : musicalNote,
          title: item.name,
          launch: new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          }).format(new Date(item.release_date))
        })))
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onLoadArtistAndAlbums()
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Detalhes sobre', href: BaseRoutes.artist.replace(":id", artist.id) }]}
        heading={artist.name || "Seu artista favorito"}
        buttonHref={BaseRoutes.search}
      />
      <div className={wrapper}>
        {artist.id &&
          <div className={artistContainer}>

            <div className={folderContainer}>
              <img src={artist.photo} alt="foto do artista" />
              <a target="_blank" href={artist.link}  rel="noopener noreferrer">
                <img src={playMusic} alt="botão play" />
              </a>
              <span>Clique e ouça agora mesmo no Spotify</span>
            </div>

            <div className={boxTitle}>
              {artist.popularity ?
                <p>
                  <img src={popularity} alt="popularidade" />
                  {artist.popularity}
                </p>
                : ""
              }

              <div className={artistName}>
                <span>Artista</span>
                <strong>{artist.name}</strong>
              </div>

              <footer>
                {artist.genres.map(item => (
                  <GenreMusic key={item} genre={item}/>
                ))}
              </footer>
            </div>
          </div>
        }

        <div className={albumsContainer}>
          {albums.map(item => (
            <Card
              id={item.id}
              key={item.id}
              photo={item.folder}
              name={item.title}
              description={item.launch}
              type="albums"
            />
          ))}
        </div>
      </div>
    </>
  );
}

ArtistDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default ArtistDetails
