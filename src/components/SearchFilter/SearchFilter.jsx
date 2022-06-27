import React from 'react'
import PropTypes from 'prop-types'

const SearchFilter = ({ onChange }) => (
  <div>
    <label htmlFor="buscar">
      <input
        id="buscar"
        onChange={(event) => onChange(event.target.value)}
        type="input"
        placeholder="Artistas, músicas ou podcasts"
      />
    </label>
  </div>
)

SearchFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchFilter
