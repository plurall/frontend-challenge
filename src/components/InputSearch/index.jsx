import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import {
  label_search as labelSearch,
  label_span as labelSpan,
  input_search as inputSearch,
} from './InputSearch.module.css';

const InputSearch = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder
}) => {
  return (
    <label className={labelSearch} htmlFor={id}>
      <span className={labelSpan}>{label}</span>

      <DebounceInput
        id={id}
        className={inputSearch}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={4}
        debounceTimeout={400}
      />
    </label>
  );
}

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default InputSearch;
