import { Layout } from 'components'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SomosClient } from 'utils'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import styles from './Artist.module.scss'

const client = new SomosClient()

const Artist = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState({})
  const [album, setAlbum] = useState([])
  useEffect(() => {
    client.getArtist(id).then(result => setArtist(result))
    client.getAlbum(id).then(result => setAlbum(result.items))
  }, [])
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className="d-flex justify-content-center">
          <Card style={{ width: '50rem' }}>
            <Card.Header><h1 className="d-flex justify-content-center">{artist.name}</h1></Card.Header>
            {!!artist.images && artist.images.length > 0 && (
              <Card.Img variant="top" src={artist.images[0].url} />
            )}
            <Card.Body>
              <h5><b>Álbuns:</b></h5>
              <ListGroup variant="flush">
                {album.map(item => (
                  <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Artist
