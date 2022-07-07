import React from 'react'
import Slider from 'react-slick'

/*
  Por algum motivo esquisito não consegui importar o Custom Arrow direto da
  components, então tive que importar desta forma
*/
import { Album } from 'components'
import CustomSliderArrow from 'components/CustomSliderArrow'
import { PrevArrow, NextArrow } from 'components/icons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './AlbumsSlider.module.scss'

const settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomSliderArrow icon={<PrevArrow />} />,
  nextArrow: <CustomSliderArrow icon={<NextArrow />} />,
}

const AlbumsSlider = () => {
  return (
    <Slider className={styles.slider} {...settings}>
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
    </Slider>
  )
}

export default AlbumsSlider
