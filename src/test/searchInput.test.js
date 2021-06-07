import React from 'react'
import { render } from '@testing-library/react'
import Album from '../components/Album'

const testAlbum = {
  name: 'Trench',
  release_date: '2018-10-05',
  images: [
    {
      url: 'test-image.jpg',
    }
  ]
}

describe('Verify if the album component and it\`s children were rendered succesfuly', () => {
  const { getByTestId } = render(
    <Album album={testAlbum}/>,
  )

  const albumDiv = getByTestId('album');
  const [nameDateDiv, imageEl] = Array.from(albumDiv.children);
  const [name, date] = Array.from(nameDateDiv.children);

  it('should render the Album component with the correct className and number of children', () => {
    expect(albumDiv.className).toBe('single-album');
    expect(albumDiv.children).toHaveLength(2);
  })

  it('should display the correct album name', () => {    
    expect(name.innerHTML).toBe(testAlbum.name);
  })

  it('should display the correct release date', () => {
    expect(date.innerHTML).toBe(testAlbum.release_date);
  })

  it('should display an image with the correct alt attribute', () => {
    expect(imageEl.getAttribute('alt')).toBe(`${testAlbum.name}-album`);
  })
})


