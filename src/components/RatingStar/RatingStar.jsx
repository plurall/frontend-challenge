/* eslint-disable linebreak-style */

import React from 'react'
import PropTypes from 'prop-types'
import { StarIcon } from '../StarIcon'

const RatingIcon = ({ index, rating, hoverRating }) => {
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow'
    } else if (!hoverRating && rating >= index) {
      return 'yellow'
    }
    return 'none'
  }, [rating, hoverRating, index])
  return (
    <div className="cursor-pointer">
      <StarIcon fill={fill} />
    </div>
  )
}
RatingIcon.propTypes = {
  index: PropTypes.number,
  rating: PropTypes.number,
  hoverRating: PropTypes.number,
}
export default RatingIcon
