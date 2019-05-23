import React, { Fragment } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import style from './Artista.module.css'

const Artista = ({ artists, albums }) => {
  if (!!artists) {
    const {
      content,
      list,
      'list-img': listImg,
      'content-item': contentItem,
      artist,
      description,
      date,
    } = style
    const { name, popularity } = artists[0]
    return (
      <Fragment>
        <div className={content}>
          <h1 className={artist}>{name}</h1>
          <h4>
            Popularidade: <strong className={popularity}>{popularity}</strong>
          </h4>
        </div>

        <div className={content}>
          <ul className={list}>
            {albums.map(todo => (
              <div key={todo.id}>
                <li className={contentItem}>
                  <img
                    src={
                      todo.images.length === 0
                        ? '/Img/spotify.jpeg'
                        : todo.images[1].url
                    }
                    alt={todo.name}
                    className={listImg}
                  />
                  <div className={description}>
                    <strong>{todo.name}</strong>{' '}
                    <span className={date}>
                      {moment(todo.release_date).format('DD/MM/YYYY')}
                    </span>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </Fragment>
    )
  }
  return <Redirect to="/search" />
}

Artista.propTypes = {
  artists: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  albums: state.searchData.albums,
  artists: state.searchData.filter_artists,
})

export default connect(mapStateToProps)(Artista)
