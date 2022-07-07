import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import { Album } from 'components'
/*
  Por algum motivo esquisito não consegui importar o Custom Arrow direto da
  components, então tive que importar desta forma
*/
import CustomSliderArrow from 'components/CustomSliderArrow'
import { PrevArrow, NextArrow } from 'components/icons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './AlbumsSlider.module.scss'

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <CustomSliderArrow icon={<PrevArrow />} />,
  nextArrow: <CustomSliderArrow icon={<NextArrow />} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const AlbumsSlider = ({ albums }) => {
  return (
    <Slider className={styles.slider} {...settings}>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </Slider>
  )
}

AlbumsSlider.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape()),
}

export default AlbumsSlider
