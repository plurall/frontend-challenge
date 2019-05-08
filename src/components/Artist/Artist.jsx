import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Artist.module.css'

const Artist = ({ image, name, id }) => (
	<Link to={`/artist/${id}`}>
	  <div className={styles.artist}>
	    <div className={styles.cover} style={{ backgroundImage: `url(${image})` }}></div>
	    <div className={styles.info}>
	      <span>{name}</span>
	    </div>
	  </div>
	</Link>
)

export default Artist