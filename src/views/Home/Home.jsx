import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@plurall/elo'
import { SubHeader } from 'components'

import styles from './Home.module.css'

var Home = () => (
	<Fragment>
		<SubHeader
		breadcrumb={[{ text: 'Home' }]}
		heading="Somos Front-end Challange"
		/>
		<div className={styles.wrapper + ' d-flex a-hor'}>
			<Button>
				<Link className="s-16 c-white" to="/busca">Buscar</Link>
			</Button>
		</div>
	</Fragment>
)

export default Home
