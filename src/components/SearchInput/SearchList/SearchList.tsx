import React from 'react'
import CardSearch from '../CardSearch/CardSearch'

type Prop = {
  filterArtist: []
}

const SearchList = ({ filterArtist }: Prop) => {
  return (
    <>
      {filterArtist !== null &&
        filterArtist.map((item: any) => (
          <CardSearch
            key={item.id}
            nameArts={item.name}
            imagesArts={item.images}
            idArts={item.id}
          />
        ))}
    </>
  )
}

export default SearchList
