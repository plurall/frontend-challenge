import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SomosClient } from 'utils'

import Logo from '../../images/Logo.png'
//mui
import { Grid, Typography, Rating, Tooltip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Footer from '../../components/Footer/Footer'

import './ArtistHome.css'

const ArtistHome = () => {
  const [albums, setAlbums] = useState()
  const [artist, setArtist] = useState()
  const { id } = useParams()

  useEffect(() => {
    const client = new SomosClient()
    const loadArtistInformation = () => {
      client.getAlbumsByArtist(id).then(res => {
        if (res.name === 'AxiosError') window.location.href = '/busca'
        setAlbums(res)
      })
      client.getInfoById(id).then(res => {
        if (res.name === 'AxiosError') window.location.href = '/busca'
        setArtist(res)
      })
    }
    loadArtistInformation()
  }, [])

  return (
    <>
      {artist && albums ? (
        <Grid className="container">
          <Grid
            container
            item
            className="header"
            alignItems="center"
            justifyContent="space-between"
            minHeight="5vh"
            data-testid="logoHeader"
          >
            <Grid container item lg={4} xs={5} color="white">
              <KeyboardBackspaceIcon
                className="back-icon"
                onClick={() => (window.location.href = '/busca')}
              />
              <Typography className="back-icon-text" ml={2}>
                Buscar outros artistas
              </Typography>
            </Grid>
            <Grid container item lg={8} xs={7} justifyContent="flex-end">
              <img
                data-testid="logoImg"
                src={Logo}
                alt="Spotifly Logo, green circle with three white birds flying"
                width={25}
                height={25}
              />
              <Typography className="artists-spotify-text">
                Spotifly®
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              lg={5}
              container
              item
              p={3}
              direction="column"
              height="100%"
              className="artist-general-container"
            >
              <Grid
                className="photo-container"
                container
                item
                minHeight="50vh"
                sx={{
                  backgroundImage: `url(${
                    artist && artist.images[0] ? artist.images[0].url : ''
                  })`,
                  backgroundColor: artist && !artist.images ? '' : '#ffffff',
                }}
              />
              <Grid
                mt={1}
                container
                alignSelf="flex-end"
                alignItems="center"
                className="photo-results"
              >
                {artist ? (
                  <Grid container item direction="column" xs={12} sm={6}>
                    <Typography
                      sx={{ color: artist && !artist.images ? '' : '#000000' }}
                      className="photo-results-text"
                    >
                      {artist.name}
                    </Typography>

                    <Rating
                      className="ratings"
                      name="simple-controlled"
                      value={artist.popularity / 10}
                      precision={0.1}
                      max={10}
                      readOnly
                      emptyIcon={
                        <StarIcon
                          style={{
                            backgrooundColor: '#000000',
                          }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </Grid>
                ) : null}
                <Grid
                  container
                  item
                  sm={6}
                  xs={12}
                  direction="column"
                  alignItems="flex-end"
                  className="followers-container"
                >
                  <Typography className="photo-results-text">
                    Total de seguidores:
                  </Typography>
                  <Typography
                    className="photo-results-text"
                    textAlign="center"
                    width="50%"
                  >
                    {artist ? artist.followers.total : 0}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                mt={0.5}
                className="genres-header"
                bgcolor="#282626 "
                sx={{
                  '&:hover': {
                    backgroundColor: '#1d1b1b',
                  },
                }}
                textAlign="center"
              >
                <Typography
                  ml={2}
                  sx={{
                    color: '#ffffff',
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                  }}
                >
                  Talvez você goste de ouvir:
                </Typography>
              </Grid>
              <Grid item xs={2.25} mt={0.5} className="genres-container">
                {artist &&
                  artist.genres.map(e => {
                    return (
                      <Typography
                        key={e}
                        px={2}
                        my={1}
                        sx={{
                          color: '#ffffff',
                          fontFamily: 'Montserrat',
                          fontWeight: 'bold',
                          scroll: 'auto',
                          '&:hover': {
                            backgroundColor: '#3e3e3e',
                          },
                        }}
                      >
                        {e}
                      </Typography>
                    )
                  })}
              </Grid>
            </Grid>
            <Grid
              lg={7}
              xs={12}
              container
              item
              p={3}
              height={'100%'}
              direction="column"
              className="albums"
            >
              <Grid container justifyContent="space-between">
                {albums
                  ? albums.map(e => {
                      return (
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          xs={12}
                          sm={5.7}
                          mb={2}
                          key={e.id}
                          p={1}
                          className="albums-container"
                        >
                          <Grid
                            item
                            xs={4}
                            sx={{
                              backgroundImage: `url(${
                                albums && e.images.length > 0
                                  ? e.images[e.images.length - 1].url
                                  : ''
                              })`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% 100%',
                              backgroundPosition: 'center',
                              height: '120px',
                              borderRadius: '5px',
                            }}
                          ></Grid>
                          <Grid
                            container
                            item
                            xs={7}
                            direction="column"
                            justifyContent="space-between"
                          >
                            <Tooltip title={`${e.name}`} placement="bottom-end">
                              <Typography ml={-1} className="album-header">
                                {e.name}
                              </Typography>
                            </Tooltip>
                            <Typography ml={-1} className="album-footer">
                              {`${e.release_date
                                .split('-')
                                .reverse()
                                .join('-')} - Álbum`}
                            </Typography>
                          </Grid>
                        </Grid>
                      )
                    })
                  : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid container item height="7%" data-testid="footer">
            <Footer />
          </Grid>
        </Grid>
      ) : null}
    </>
  )
}

export default ArtistHome
