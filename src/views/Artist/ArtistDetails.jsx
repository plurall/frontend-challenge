import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { SomosClient } from '../../utils'
import { AlbumList } from '../../components'
import styles from './Artist.module.css'

function ArtistDetails() {
  const history = useHistory()
  const [artistDetails, setArtistDetails] = useState([])
  const [artistAlbum, setArtistAlbum] = useState([])
  const params = useParams()
  const { images, followers, popularity, name, genres } = artistDetails

  const {
    'artist-details-container': artistDetailsContainer,
    'back-btn': backBtn,
    'artist-header-page': artistHeaderPage,
    'artist-image-header': artistImgHeader,
    'artist-name': artistName,
    'artist-albums-container': artistAlbumsContainer,
    'especific-details': especificDetails,
    'especific-details-box': especificDetailsBox,
    'stadistic-box': stadisticBox,
  } = styles

  function pushUrl(url) {
    history.push(url)
  }

  useEffect(() => {
    async function fetchAPI() {
      const data = await SomosClient(params.id, 'artist')
      setArtistDetails(data.artists[0])
    }
    fetchAPI()
  }, [])

  useEffect(() => {
    async function fetchAPI() {
      const data = await SomosClient(params.id, 'album')
      setArtistAlbum(data.items)
    }
    fetchAPI()
  }, [])

  return (
    <div className={artistDetailsContainer}>
      <button className={backBtn} onClick={() => pushUrl('/search')}>
        &#8249; <span>Back</span>
      </button>
      <div className={artistHeaderPage}>
        <img
          src={!images ? null : images[0].url}
          alt={name}
          className={artistImgHeader}
        />
        <span className={artistName}>{name}</span>
      </div>
      <div className={artistAlbumsContainer}>
        {artistAlbum.map(element => (
          <AlbumList image={element.images} name={element.name} release={element.release_date} />
        ))}
      </div>
      <div className={especificDetails}>
        <span>Numbers of {name}</span>
        <div className={stadisticBox}>
          <div className={especificDetailsBox}>
            <span>{popularity}</span>
            <p>How popular</p>
          </div>
          <div className={especificDetailsBox}>
            <span>{!followers ? null : followers.total}</span>
            <p>Followers</p>
          </div>
          <div className={especificDetailsBox}>
            <p>Genres:</p>
            {!genres
              ? null
              : genres.map((element, index) =>
                  index < 2 ? <p key={element}>{element}</p> : null,
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails
