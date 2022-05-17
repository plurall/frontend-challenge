import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import arrowLeftSvg from '../../assets/icons/arrow-left.svg'
import arrowRightSvg from '../../assets/icons/arrow-right.svg'
import {
  controllers
} from './PaginationController.module.css';
import ButtonNavigate from 'components/ButtonNavigate';

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
      <ButtonNavigate
        id="prev_page"
        name="prev_page"
        disabled={!pagination.prev.hasPage}
        onClick={debounce(buttonLeft, debounceTime)}
        image={{url: arrowLeftSvg, alt: "seta para esquerda"}}
      />

      <span>{`${pagination.currentPage} de ${pagination.totalPages}`}</span>

      <ButtonNavigate
        id="next_page"
        name="next_page"
        disabled={!pagination.next.hasPage}
        onClick={debounce(buttonRight, debounceTime)}
        image={{url: arrowRightSvg, alt: "seta para direita"}}
      />
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
