import React from 'react'
import ArtistItem from './ArtistItem'
import { IArtist } from 'interfaces'

interface ArtistListProps {
  artists: IArtist[]
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  if (artists.length === 0) return null

  return (
    <>
      {artists.map(({ id, name, type, images }) => (
        <ArtistItem key={id} id={id} name={name} type={type} imageUrl={images?.[0]?.url || ''} />
      ))}
    </>
  )
}
export default ArtistList
