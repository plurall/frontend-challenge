import React from 'react'
import PropTypes from 'prop-types'

const SearchFilter = ({ onChange }) => (
  <div>
    <h1>Search</h1>
    <label htmlFor="buscar">
      <input id="buscar" className="" onChange={(event) => onChange(event.target.value)} type="input" placeholder="Artistas, músicas ou podcasts" />
      <button className="btn btn-secondary btn-sm" >Buscar</button>
    </label>
  </div>
)

SearchFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchFilter
