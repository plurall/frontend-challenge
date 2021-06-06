import React, { useEffect, useState } from 'react'
import { SomosClient } from '../../utils'
import { Layout, SubHeader, DetailsArtist, CardAlbum } from '../../components'
import noImage from '../../assets/noImage.png'
import styles from './InfoArtist.module.css'

function InfoArtist(props) {
  const [dataArtists, setDataArtists] = useState({})
  const [dataArtistsAlbum, setDataArtistsAlbum] = useState([])

  useEffect(() => {
    const { id } = props.match.params
    getArtists(id)
    getArtistsAlbum(id)
  }, [])

  function getArtists(id) {
    SomosClient.searchDetailsArtists(id).then(({ data }) => {
      setDataArtists(normalizaDate(data))
    })
  }

  function getArtistsAlbum(id) {
    SomosClient.searchDetailsArtistsAlbum(id).then(({ data }) => {
      setDataArtistsAlbum(normalizaDateAlbum(data.items))
    })
  }

  return (
    <Layout>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
          { text: 'Busca', href: '/busca' },
          { text: 'Artista' },
        ]}
        buttonHref="/busca"
        heading={`${dataArtists.name}`}
      />
      <div>
        <div className={styles.content}>
          <DetailsArtist artistDate={dataArtists} />
        </div>
        <div>
          <CardAlbum artistAlbumDate={dataArtistsAlbum} />
        </div>
      </div>
    </Layout>
  )
}

function normalizaDate(data) {
  const { id, name, images, genres, popularity } = data
  const image = images.length ? images[0].url : noImage
  const genre = genres.length ? genres : ['Nao ha genero']

  return { id, name, image, genre, popularity }
}

function normalizaDateAlbum(data) {
  return data.map(item => {
    const { id, name, images, release_date } = item
    const image = images.length ? images[0].url : noImage

    const releaseDate = date(release_date)
    return { id, name, image, releaseDate }
  })
}
function date(date) {
  const arr = date.split('-')
  const year = arr[0]
  const month = arr[1]
  const day = arr[2]

  const dateString = [day, month, year].join('/')
  return dateString
}

export default InfoArtist
