import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue, changeAlbums } from './actions'

import style from './Search.module.css'

const Search = ({ api, changeValue, changeAlbums }) => {
  const {
    content,
    list,
    'list-img': listImg,
    'content-item': contentItem,
    input,
    name,
    img,
  } = style

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Nome do Artista"
        onChange={changeValue}
        name="q"
        className={input}
      />
      <div className={content}>
        <ul className={list}>
          {!!api &&
            api.items &&
            api.items.map(todo => (
              <div key={todo.id} className={contentItem}>
                <li className={img}>
                  <Link
                    onClick={() => {
                      changeAlbums(todo.id)
                    }}
                    to="artists"
                  >
                    <img
                      className={listImg}
                      src={
                        todo.images.length === 0
                          ? '/Img/spotify.jpeg'
                          : todo.images[0].url
                      }
                      alt={todo.name}
                    />
                  </Link>
                </li>
                <li className={name}>{todo.name}</li>
              </div>
            ))}
        </ul>
      </div>
    </Fragment>
  )
}

Search.propTypes = {
  changeValue: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  api: state.searchData.artists,
})

const mapDispachToProps = dispatch => {
  return bindActionCreators({ changeValue, changeAlbums }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Search)
