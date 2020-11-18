import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.module.css';


class ArtistAlbumItem extends React.Component {
  static propTypes = {
    album: PropTypes.object,
  };

  render() {
    const {
      props: { album },
    } = this;

    return (
      <>
        <div className={styles.item} key={album.id}>
          <img src={album.images[0].url} alt={album.name} />
          <div className={styles.albumName}>
            <p>{album.name}</p>
          <div className={styles.albumDate}>
            <p><b>Lançamento:</b></p>
            <small>
              {new Intl.DateTimeFormat('pt-BR', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
              }).format(new Date(album.release_date))}
            </small>
          </div>
          </div>
        </div>
      </>
    );
  };
};

export default ArtistAlbumItem
