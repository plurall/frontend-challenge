import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'
import moment from 'moment'
import { Image, Layout, SubHeader, Wrapper, Loading } from 'components'
import { SomosClient } from 'utils'
import { isEmptyArray } from 'utils/array'

const cliente = new SomosClient()

const styles = theme => ({
  paper: {
    padding: 16,
    margin: '20px 0',
  },
  artistDetailWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'start',
    },
  },
  artistDetailImage: {
    borderRadius: '100%',
    maxWidth: '100%',
  },
  artistDetailText: {
    color: 'gray',
    marginBottom: 8,
  },
  artistDescriptionDetailWrapper: {
    flexDirection: 'row',
    padding: 30,
  },
  artistGenresWrapper: {
    flexDirection: 'row',
    display: 'flex',
  },
  artistDetailGenres: {
    marginLeft: 5,
  },
  genres: {
    display: 'flex',
    flexDirection: 'column',
  },
  listGenres: {
    marginLeft: 30,
    marginBottom: 10,
    fontSize: 12,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  albumImage: {
    maxWidth: '100%',
    marginBottom: 10,
  },
  albumLink: {
    textDecoration: 'none',
  },
  albumReleaseDate: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
})

class Artist extends Component {
  state = {
    albums: [],
    artistDetail: null,
    loading: true,
  }

  componentDidMount() {
    this.getArtistDetail()
    this.getArtistAlbums()
  }

  getArtistId = () => {
    const {
      match: { params },
    } = this.props

    return params && params.id ? params.id : null
  }

  getArtistDetail = async () => {
    const artistId = this.getArtistId()

    if (artistId) {
      const { data: artistDetail } = await cliente.getArtistDetail(artistId)

      this.setState({ artistDetail })
    }
  }

  getArtistAlbums = async () => {
    const artistId = this.getArtistId()

    if (artistId) {
      const {
        data: { items: albums },
      } = await cliente.getArtistAlbums({
        artistId,
        limit: 10,
      })

      this.setState({ albums, loading: false })
    }
  }

  renderDetailItem = ({ label, value, children, className }) => {
    const { classes } = this.props

    if (value || children) {
      return (
        <div className={className || classes.artistGenresWrapper}>
          <Typography className={classes.artistDetailText}>{label}:</Typography>
          <Typography className={classes.artistDetailGenres}>
            {children || value}
          </Typography>
        </div>
      )
    }
    return null
  }

  render() {
    const { classes } = this.props
    const { albums, artistDetail, loading } = this.state
    const DetailItem = this.renderDetailItem

    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading="Somos Front-end Challange"
        />
        <Wrapper>
          <Link to="/busca">
            <Button variant="contained" color="primary">
              Buscar novamente
            </Button>
          </Link>
          <Grid container spacing={2}>
            {loading ? (
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Loading gutterTop />
                </Paper>
              </Grid>
            ) : (
              <>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    {artistDetail && (
                      <div className={classes.artistDetailWrapper}>
                        <Image
                          src={
                            artistDetail.images[1]
                              ? artistDetail.images[1].url
                              : null
                          }
                          className={classes.artistDetailImage}
                          alt={artistDetail.name}
                        />
                        <div className={classes.artistDescriptionDetailWrapper}>
                          <Typography
                            variant="h4"
                            className={classes.artistDetailText}
                          >
                            {artistDetail.name}
                          </Typography>
                          <DetailItem
                            label="Generos"
                            className={classes.genres}
                          >
                            <ul className={classes.listGenres}>
                              {Array.isArray(artistDetail.genres) &&
                                artistDetail.genres.map(genre => (
                                  <li>{genre.toUpperCase()}</li>
                                ))}
                            </ul>
                          </DetailItem>
                          <DetailItem
                            value={artistDetail.popularity}
                            label="Popularidade"
                          />
                        </div>
                      </div>
                    )}
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" className={classes.artistDetailText}>
                    Albuns
                  </Typography>
                  <Divider />
                </Grid>

                {!isEmptyArray(albums) &&
                  albums.map(album => (
                    <Grid item xs={12} sm={6} md={4}>
                      <a
                        href={album.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.albumLink}
                      >
                        <Paper className={classes.paper}>
                          <Image
                            src={album.images[0] ? album.images[0].url : null}
                            alt={album.name}
                            className={classes.albumImage}
                          />
                          <Typography
                            variant="h6"
                            align="center"
                            className={classes.artistDetailText}
                          >
                            {album.name}
                          </Typography>
                          <DetailItem
                            label="Data de Lançamento"
                            className={classes.albumReleaseDate}
                          >
                            <Typography align="center">
                              {moment(album.release_date).format('DD/MM/YYYY')}
                            </Typography>
                          </DetailItem>
                        </Paper>
                      </a>
                    </Grid>
                  ))}
              </>
            )}
          </Grid>
        </Wrapper>
      </Layout>
    )
  }
}

Artist.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Artist)
