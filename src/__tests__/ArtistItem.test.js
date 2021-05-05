import React from 'react'
import { shallow } from 'enzyme'
import ArtistItem from 'components/ArtistItem/ArtistItem'

describe('Test for ArtistItem', () => {
  test('should render name and image of an artist correctly', () => {
    const item = {
      images: [{ url: 'http://test.com/image.png' }],
      name: 'artista',
      id: 1,
    }

    const wrapper = shallow(<ArtistItem item={item} />)

    const imageC = wrapper.find('img')
    const nameC = wrapper.find('p')

    const url = 'http://test.com/image.png'
    const name = 'artista'

    expect(imageC.prop('src')).toBe(url)
    expect(imageC.prop('alt')).toBe(name)
    expect(nameC.children().text()).toBe(name)
  })

  test('should render a placeholder when array of images is empty', () => {
    const item = {
      images: [],
      name: 'teste',
      id: 1,
    }

    const wrapper = shallow(<ArtistItem item={item} />)

    const imageC = wrapper.find('img')
    const url =
      'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

    expect(imageC.prop('src')).toBe(url)
  })
})
