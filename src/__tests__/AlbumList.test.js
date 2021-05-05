import React from 'react'
import { shallow } from 'enzyme'
import AlbumItem from 'components/AlbumItem/AlbumItem'
import { AlbumList } from 'components'

describe('Test for AlbumList', () => {
  test('the list should have the correct size', () => {
    const album = [
      {
        album_group: 'album',
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN',
            },
            href: 'https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN',
            id: '7vk5e3vY1uw9plTHJAMwjN',
            name: 'Alan Walker',
            type: 'artist',
            uri: 'spotify:artist:7vk5e3vY1uw9plTHJAMwjN',
          },
        ],
        available_markets: ['JP'],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1CLDNcfuwhl9KUrervfOQu',
        },
        href: 'https://api.spotify.com/v1/albums/1CLDNcfuwhl9KUrervfOQu',
        id: '1CLDNcfuwhl9KUrervfOQu',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b2738270e49a0de52091e0d8eb94',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e028270e49a0de52091e0d8eb94',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d000048518270e49a0de52091e0d8eb94',
            width: 64,
          },
        ],
        name: 'Live Fast (Japan Exclusive)',
        release_date: '2019-08-09',
        release_date_precision: 'day',
        total_tracks: 8,
        type: 'album',
        uri: 'spotify:album:1CLDNcfuwhl9KUrervfOQu',
      },
      {
        album_group: 'album',
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN',
            },
            href: 'https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN',
            id: '7vk5e3vY1uw9plTHJAMwjN',
            name: 'Alan Walker',
            type: 'artist',
            uri: 'spotify:artist:7vk5e3vY1uw9plTHJAMwjN',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3nzuGtN3nXARvvecier4K0',
        },
        href: 'https://api.spotify.com/v1/albums/3nzuGtN3nXARvvecier4K0',
        id: '3nzuGtN3nXARvvecier4K0',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d00004851a108e07c661f9fc54de9c43a',
            width: 64,
          },
        ],
        name: 'Different World',
        release_date: '2018-12-14',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:3nzuGtN3nXARvvecier4K0',
      },
    ]

    const wrapper = shallow(<AlbumList data={album} />)

    const items = wrapper.find(AlbumItem)

    expect(items.length).toBe(2)
  })
})
