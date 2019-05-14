import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

import ArtistsList from './ArtistsList'

Enzyme.configure({ adapter: new Adapter() })

describe('<ArtistsList />', () => {
  const artists = [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
      },
      followers: {
        href: null,
        total: 10032480,
      },
      genres: [
        'pop',
      ],
      href: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm',
      id: '3fMbdgg4jU18AjLCKBhRSm',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/51dad9aaabe5643818840207a9a8957c2ad91bf2',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/2e6f35b90c131c137669d06e3c36b1a5d3172864',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/4ba613bd55b4954a027377b70b8c6d48639fd70b',
          width: 160,
        },
      ],
      name: 'Michael Jackson',
      popularity: 85,
      type: 'artist',
      uri: 'spotify:artist:3fMbdgg4jU18AjLCKBhRSm',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3',
      },
      followers: {
        href: null,
        total: 3104983,
      },
      genres: [
        'adult standards',
        'canadian pop',
        'lounge',
      ],
      href: 'https://api.spotify.com/v1/artists/1GxkXlMwML1oSg5eLPiAz3',
      id: '1GxkXlMwML1oSg5eLPiAz3',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/6bf4c3c955399c4c45cd0677a860a42f39b6a508',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/87c11cf100dc95936eaa0c4486ee9f5ca0ccfc6c',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/d5308b295fd53042e5fd5498505695e9362549e9',
          width: 160,
        },
      ],
      name: 'Michael Bublé',
      popularity: 78,
      type: 'artist',
      uri: 'spotify:artist:1GxkXlMwML1oSg5eLPiAz3',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/6ghiFYcwn2Vzl6K50U0UPz',
      },
      followers: {
        href: null,
        total: 173552,
      },
      genres: [
        'contemporary country',
        'country pop',
        'country road',
        'modern country rock',
      ],
      href: 'https://api.spotify.com/v1/artists/6ghiFYcwn2Vzl6K50U0UPz',
      id: '6ghiFYcwn2Vzl6K50U0UPz',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/656a6837c367925df0116ec7c28c0a2ee29c25c8',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/a2ac311fb9e77a98d1d5088fb3f0a764fa28f1ff',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/73673358ff1714d06f27f710ea48bbf720d5591d',
          width: 160,
        },
      ],
      name: 'Michael Ray',
      popularity: 65,
      type: 'artist',
      uri: 'spotify:artist:6ghiFYcwn2Vzl6K50U0UPz',
    },
  ]

  it('should render artists list when mount', () => {
    const wrapper = shallow(<ArtistsList artists={artists} />)
    expect(wrapper.find('li')).toHaveLength(3)
  })
})
