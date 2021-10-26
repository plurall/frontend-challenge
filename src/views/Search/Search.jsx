import React from 'react';

import { ArtistCard, Layout } from 'components';
import styles from './Search.module.css';

const Search = () => (
  <Layout>
    <div className={ styles.container }>
      <h1>Pesquise seu artista</h1>
      <input type="text" />

      <div className={ styles.artistGrid }>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
    </div>
  </Layout>
)

export default Search;