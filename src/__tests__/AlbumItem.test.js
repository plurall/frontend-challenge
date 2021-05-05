import React from 'react'
import { shallow } from 'enzyme'
import AlbumItem from 'components/AlbumItem/AlbumItem'
import { dateConvert } from 'utils/date'

describe('Test for AlbumItem', () => {
  test('should render image, name and date correctly', () => {
    const item = {
      images: [{ url: 'http://test.com/image.png' }],
      name: 'nome',
      id: 1,
      release_date: '2020-11-01',
    }

    const wrapper = shallow(<AlbumItem item={item} />)

    const imageC = wrapper.find('img')
    const nameC = wrapper.find('p').find('[id="name"]')
    const dateC = wrapper.find('p').find('[id="date"]')

    const url = 'http://test.com/image.png'
    const name = 'nome'
    const date = dateConvert('2020-11-01')

    expect(imageC.prop('src')).toBe(url)
    expect(imageC.prop('alt')).toBe(name)
    expect(nameC.children().text()).toBe(name)
    expect(dateC.children().text()).toBe(date)
  })

  test('should render a placeholder when array of images is empty', () => {
    const item = {
      images: [],
      name: 'nome',
      id: 1,
      release_date: '2020-11-01',
    }

    const wrapper = shallow(<AlbumItem item={item} />)

    const imageC = wrapper.find('img')
    const url = 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

    expect(imageC.prop('src')).toBe(url)

  })
})
