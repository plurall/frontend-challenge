import React from 'react'
import { useTransition, animated } from 'react-spring'
import { Artist } from '../../../utils/types'
import ArtistItem from '../ArtistItem'
import * as S from './styles'

type ArtistListProps = {
  artists: Artist[]
}

const ArtistList = ({ artists }: ArtistListProps) => {
  const transitions = useTransition(artists, item => item.id, {
    from: { position: 'absolute', opacity: 0, flex: 0 },
    enter: { position: 'relative', opacity: 1, flex: 0 },
    leave: { position: 'absolute', opacity: 0, flex: 0 }
  })

  return (<S.ListArtistsWrapper>
    {transitions.map(({ item, props, key }) =>
      <animated.div key={key} style={props}>
        <ArtistItem key={item.id} artist={item} />
      </animated.div>
    )}
  </S.ListArtistsWrapper>)
}

export default ArtistList
