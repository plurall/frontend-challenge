import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import arrowSvg from '../../assets/icons/arrow.svg'
import {
  controllers,
  button_disabled as buttonDisabled
} from './PaginationController.module.css';

const PaginationController = ({
  id,
  name,
  pagination,
  debounceTime,
  buttonLeft,
  buttonRight
}) => {
  return (
    <nav id={id} name={name} className={controllers}>
      <button
        name="prev_page"
        className={`${!pagination.prev.hasPage ? buttonDisabled : ""}`}
        onClick={debounce(buttonLeft, debounceTime)}
      >
        <img src={arrowSvg} alt="seta para esquerda" />
      </button>

      <span>{`${pagination.currentPage} de ${pagination.totalPages}`}</span>

      <button
        name="next_page"
        className={`${!pagination.next.hasPage ? buttonDisabled : ""}`}
        onClick={debounce(buttonRight, debounceTime)}
      >
        <img src={arrowSvg} alt="seta para direita" />
      </button>
    </nav>
  );
}

PaginationController.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    prev: PropTypes.shape({
      hasPage: PropTypes.bool.isRequired,
      prevPage: PropTypes.string,
    }),
    next: PropTypes.shape({
      hasPage: PropTypes.bool.isRequired,
      nextPage: PropTypes.string,
    })
  }),
  debounceTime: PropTypes.number.isRequired,
  buttonLeft: PropTypes.func.isRequired,
  buttonRight: PropTypes.func.isRequired,
}

export default PaginationController;
