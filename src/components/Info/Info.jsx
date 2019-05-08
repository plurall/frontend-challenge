import React from 'react';

import { Heading, Text } from 'plurall-ui'

import styles from './Info.module.css'

const Info = ({ name, popularity, image, genres, albums }) => {
	return (
	  <div className={styles.wrapper}>
	    <div className={styles.info} style={{ backgroundImage: `url(${image})` }}>
	    	<Heading>{name}</Heading>
	    	<Heading>Popularidade: {popularity}</Heading>
	    	<Genres genres={genres}/>
	    </div>
	    <div className={styles.albums}>
	    	<Albums albums={albums}/>
	    </div>
	  </div>
	)
}

const Genres = ({ genres }) => (
	<Text className={styles.genres}>{genres ? genres.join(', ') : null }</Text>
)

const Albums = ({ albums }) => {
	const list = albums['items'] || []; // Return the fethed list or empty
	return (
		<React.Fragment>
			<Heading>Álbuns</Heading>
			<div className={styles.list}>
			{list.length > 0 ? list.map((e, k) => {
				let image;

				if(e['images'].length > 0){
					image = e['images'][0]['url']
				}
				return (
					<div className={styles.album} key={k}>
						<div className={styles.date}>
							<Text secondary size="small">{FormatDate(e['release_date'], e['release_date_precision'])}</Text>
						</div>
						<div className={styles.cover} style={{ backgroundImage: `url(${image})` }}></div>
						<div className={styles.title}>
							<Text bold>{e['name']}</Text>
						</div>
					</div>
			)}) : null }
			</div>
		</React.Fragment>
	)
}

const FormatDate = (date, precision) => {
	switch(precision){
		case 'year': {

			return date;
		}
		case 'month':{
			const split = date.split('-');
			const month = split[1], year = split[0];

			return `${month}/${year}`
		}
		case 'day': {
			const split = date.split('-');
			const day = split[2], month = split[1], year = split[0];

			return `${month}/${day}/${year}`
		}
		default:
			return date
	}
}

export default Info