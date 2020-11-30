import React, { PureComponent } from 'react'

import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = () => ({
  root: {
    color: 'inherit',
    fontSize: '1.2em',
    lineHeight: 'inherit',

    '& > span': {
      animationDuration: '1.4s',
      animationFillMode: 'both',
      animationIterationCount: 'infinite',
      animationName: 'XDotsBlink',

      '&:nth-child(2)': {
        animationDelay: '.2s',
      },

      '&:nth-child(3)': {
        animationDelay: '.4s',
      },
    },
  },
  '@global': {
    '@keyframes XDotsBlink': {
      '0%': {
        opacity: 0.2,
      },
      '20%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0.2,
      },
    },
  },
})

class DotsBlink extends PureComponent {
  render() {
    const { classes } = this.props

    return (
      <span className={classes.root}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    )
  }
}

DotsBlink.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DotsBlink)
