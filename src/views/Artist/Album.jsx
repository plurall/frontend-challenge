import React from 'react'

const Album = ({ album }) => {
  const { images, name, release_date } = album;

  const imageSrc = images[0] ? images[0].url : '';

  return (
    <div className="single-album">
      <div className="name-date">
        <h3>{name}</h3>
        <h4>{release_date}</h4>
      </div>
      <img src={imageSrc} alt={`${name}-album-picture`} />
    </div>
  )
}

export default Album
