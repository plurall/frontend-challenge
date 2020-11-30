import React, { PureComponent } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core'

import DotsBlink from '../DotsBlink'

const styles = theme => {
  const GUTTER_SIZE = theme.spacing(1)

  return {
    text: {
      textTransform: 'uppercase',
    },

    gutterTop1x: { marginTop: `${GUTTER_SIZE * 1}px !important` },
    gutterTop2x: { marginTop: `${GUTTER_SIZE * 2}px !important` },
    gutterTop3x: { marginTop: `${GUTTER_SIZE * 3}px !important` },

    gutterBottom1x: { marginBottom: `${GUTTER_SIZE * 1}px !important` },
    gutterBottom2x: { marginBottom: `${GUTTER_SIZE * 2}px !important` },
    gutterBottom3x: { marginBottom: `${GUTTER_SIZE * 3}px !important` },
  }
}

class Loading extends PureComponent {
  getGutterStyle = () => {
    const { gutterBottom, gutterTop, classes } = this.props
    const gutterTopSize = typeof gutterTop === 'boolean' ? '1x' : gutterTop
    const gutterBottomSize =
      typeof gutterBottom === 'boolean' ? '1x' : gutterBottom
    const classNamesList = []

    if (gutterTop) {
      classNamesList.push(classes[`gutterTop${gutterTopSize}`])
    }

    if (gutterBottom) {
      classNamesList.push(classes[`gutterBottom${gutterBottomSize}`])
    }

    return classNames(classNamesList)
  }

  render() {
    const { circularProgressProps, classes, text, className } = this.props

    return (
      <Typography
        component="div"
        align="center"
        className={classNames(this.getGutterStyle(), className)}
      >
        <CircularProgress size={24} {...circularProgressProps} />
        <Typography gutterTop className={classes.text}>
          {text}
          <DotsBlink />
        </Typography>
      </Typography>
    )
  }
}

Loading.defaultProps = {
  circularProgressProps: null,
  className: '',
  gutterBottom: null,
  gutterTop: null,
  text: 'carregando',
}

Loading.propTypes = {
  circularProgressProps: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  gutterBottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['1x', '2x', '3x']),
  ]),
  gutterTop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['1x', '2x', '3x']),
  ]),
  text: PropTypes.string,
}

export default withStyles(styles)(Loading)
