import React from 'react'
import { shallow } from 'enzyme'
import { ArtistDescription } from 'components'

describe('Test for ArtistDescription', () => {
  test('should render the artist props correctly', () => {
    const artist = {
      images: [{ url: 'http://test.com/image.png' }],
      name: 'nome_do_artista',
      id: 1,
      popularity: 100,
      genres: ['rock', 'pop']
    }

    const wrapper = shallow(<ArtistDescription artist={artist}/>)

    const imageC = wrapper.find('img')
    const nameC = wrapper.find('h1').find('[id="name"]')
    const popularityC = wrapper.find('p').find('[id="popularity"]')
    const genresC = wrapper.find('p').find('[id="genres"]')

    const name = 'nome_do_artista'
    const url = 'http://test.com/image.png'
    const popularityText = "Popularidade: 100"
    const genresText = "Gêneros: rock, pop"

    expect(imageC.prop('src')).toBe(url)
    expect(imageC.prop('alt')).toBe(name)
    expect(nameC.children().text()).toBe(name)
    expect(popularityC.children().text()).toBe(popularityText)
    expect(genresC.children().text()).toBe(genresText)
  })

  test('should render a placeholder when array of images is empty', () => {
    const artist = {
      images: [],
      name: 'nome_do_artista',
      id: 1,
      popularity: 100,
      genres: ['rock', 'pop']
    }

    const wrapper = shallow(<ArtistDescription artist={artist}/>)

    const imageC = wrapper.find('img')
    const url = 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

    expect(imageC.prop('src')).toBe(url)

  })

  test('should not render genres if is empty', () => {
    const artist = {
      images: [],
      name: 'nome_do_artista',
      id: 1,
      popularity: 100,
      genres: []
    }

    const wrapper = shallow(<ArtistDescription artist={artist}/>)

    const genresC = wrapper.find('p').find('[id="genres"]')

    expect(genresC.exists()).toBe(false)

  })
})
