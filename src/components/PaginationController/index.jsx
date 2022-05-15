import React from 'react';
import debounce from 'lodash.debounce';

import arrowSvg from '../../assets/icons/arrow.svg'
import {
  controllers,
  buttonDisabled
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
        className={`${!pagination.prev.hasPage && buttonDisabled}`}
        onClick={debounce(buttonLeft, debounceTime)}
      >
        <img src={arrowSvg} alt="" />
      </button>

      <span>{`${pagination.currentPage} de ${pagination.totalPages}`}</span>

      <button
        className={`${!pagination.next.hasPage && buttonDisabled}`}
        onClick={debounce(buttonRight, debounceTime)}
      >
        <img src={arrowSvg} alt="" />
      </button>
    </nav>
  );
}

export default PaginationController;
