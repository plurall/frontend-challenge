import PropTypes from 'prop-types'
import React from 'react'

import { Link, Button } from 'plurall-ui'

import styles from './ButtonLink.module.css'

const ButtonLink = ({ buttonHref, children }) => (
  <Link href={buttonHref}>
		<Button className={styles.link}>
	    {children}
		</Button>
  </Link>
)

ButtonLink.propTypes = {
  buttonHref: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default ButtonLink
