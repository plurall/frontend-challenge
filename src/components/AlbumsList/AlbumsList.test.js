import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

import AlbumsList from './AlbumsList'

Enzyme.configure({ adapter: new Adapter() })

describe('<AlbumsList />', () => {
  const albums = [
    {
      album_group: 'single',
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
          },
          href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
          id: '0TnOYISbd1XYRBk9myaseg',
          name: 'Pitbull',
          type: 'artist',
          uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6iSZjc4kOoKZKiBXK5HbwD',
          },
          href: 'https://api.spotify.com/v1/artists/6iSZjc4kOoKZKiBXK5HbwD',
          id: '6iSZjc4kOoKZKiBXK5HbwD',
          name: 'El Chombo',
          type: 'artist',
          uri: 'spotify:artist:6iSZjc4kOoKZKiBXK5HbwD',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla',
          },
          href: 'https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla',
          id: '790FomKkXshlbRYZFtlgla',
          name: 'Karol G',
          type: 'artist',
          uri: 'spotify:artist:790FomKkXshlbRYZFtlgla',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/37InwR6blT60hbEYACdZ6S',
      },
      href: 'https://api.spotify.com/v1/albums/37InwR6blT60hbEYACdZ6S',
      id: '37InwR6blT60hbEYACdZ6S',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/17bd2d3ebb07c01a49dc5b3ded7e071e2201fba2',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/664281239d1b7c234b68455e3214d554c07752bb',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/761c63f3d421d3c50fb172a8f0ccd7dbd006ca8c',
          width: 64,
        },
      ],
      name: 'Dame Tu Cosita (feat. Cutty Ranks) [Radio Version]',
      release_date: '2018-08-29',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:37InwR6blT60hbEYACdZ6S',
    },
    {
      album_group: 'single',
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51',
          },
          href: 'https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51',
          id: '1ackd5XprZEkH3McKbQD51',
          name: 'Juan Magán',
          type: 'artist',
          uri: 'spotify:artist:1ackd5XprZEkH3McKbQD51',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
          },
          href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
          id: '0TnOYISbd1XYRBk9myaseg',
          name: 'Pitbull',
          type: 'artist',
          uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1pPmIToKXyGdsCF6LmqLmI',
          },
          href: 'https://api.spotify.com/v1/artists/1pPmIToKXyGdsCF6LmqLmI',
          id: '1pPmIToKXyGdsCF6LmqLmI',
          name: 'Rich The Kid',
          type: 'artist',
          uri: 'spotify:artist:1pPmIToKXyGdsCF6LmqLmI',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0pSoTEjs0sMEUoyhUijJtL',
      },
      href: 'https://api.spotify.com/v1/albums/0pSoTEjs0sMEUoyhUijJtL',
      id: '0pSoTEjs0sMEUoyhUijJtL',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/1a01f8c6927db2b2a1cb909e270fb24b69f0aeae',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/52b3681fa4a513b7975a67871821a52a9c7c8ad1',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/c8af983b09cf07d91af9ad2a745f488774d73e69',
          width: 64,
        },
      ],
      name: 'Echa Pa Aca',
      release_date: '2018-08-03',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:0pSoTEjs0sMEUoyhUijJtL',
    },
  ]

  it('should render albums list when mount', () => {
    const wrapper = shallow(<AlbumsList albums={albums} />)
    expect(wrapper.find('li')).toHaveLength(2)
  })
})
