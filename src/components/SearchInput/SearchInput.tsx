import React from 'react'
import * as styles from './SearchInput.module.scss'

interface SearchInputProps {
  value: string
  changeValue: (value: string) => void
  label?: string
}

const SearchInput = ({
  value,
  changeValue,
  label = 'Buscar artista',
  ...props
}: SearchInputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor='search-input' className={styles.visuallyHidden}>
        {label}
      </label>
      <input
        id='search-input'
        type='text'
        placeholder={label + '...'}
        value={value}
        onChange={e => changeValue(e.target.value)}
        className={styles.searchInput}
        aria-label={label}
        {...props}
      />
    </div>
  )
}

export default SearchInput
