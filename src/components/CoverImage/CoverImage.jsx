import React from 'react'
import styles from './CoverImage.module.css'
import musicCover from '../../images/musicCover.jpg';

function getImage(imageList) {
  if (imageList !== undefined && imageList.length > 0) {
    return imageList[imageList.length - 2].url;
  } else {
    return musicCover
  }
}

function CoverImage({imageList, customCoverClass}) {
  return (
    <img className={customCoverClass != undefined? customCoverClass : styles.coverImage} variant="top" src={getImage(imageList)} alt=" " />
  )
}



export default CoverImage;