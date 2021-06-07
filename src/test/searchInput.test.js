import React from 'react'
import { render } from '@testing-library/react'
import Search from '../views/Search/index'


describe('Verify if search input was rendered successfuly', () => {
  const { getByTestId } = render(
    <Search />,
  )

  const searchContainer = getByTestId('search-container');
  const [input, imageEl] = Array.from(searchContainer.children);

  it('should render a search container with 2 children', () => {
    expect(searchContainer.children).toHaveLength(2);
  })

  it('should render input element', () => {
    expect(input.id).toBe('main-search');
  })

  it('should render spotify logo', () => {    
    expect(imageEl.getAttribute('alt')).toBe('spotify-search');
  })
})


