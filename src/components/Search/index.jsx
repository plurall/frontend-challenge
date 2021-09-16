import React from 'react'

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  )
}

export default Search