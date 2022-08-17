import React, { useState } from 'react'
import { Layout } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

import styles from './Search.module.scss'

const client = new SomosClient()

const Search = () => {
  const [artists, setArtists] = useState([])

  const handleChange = event => {
    if (event.target.value.length > 4) {
      client
        .getArtists(event.target.value)
        .then(result => setArtists(result.artists.items))
    } else if (event.target.value.length === 0) {
      setArtists([])
    }
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Busque seu artista</InputGroup.Text>
          <Form.Control
            onChange={handleChange}
            placeholder="Nome do artista"
            aria-label="nomeArtista"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Container fluid>
          <Row>
            {artists.map(item => (
              <Col xs sm={3}>
                <Link to={`/artista/${item.id}`}>
                  <Card>
                    {item.images.length > 0 && (
                      <Card.Img variant="top" src={item.images[0].url} />
                    )}
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.Body>
                  </Card>
                  <br />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Search
