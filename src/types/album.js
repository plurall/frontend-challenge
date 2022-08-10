import PropTypes from 'prop-types'

const albumType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  total_tracks: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
})

export default albumType
