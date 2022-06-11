/**
 * @jest-environment jsdom
 */
import React from 'react'
import {render, cleanup} from '@testing-library/react';

import { CardAlbum } from '.';

afterEach(cleanup);

describe('<CardAlbum />', () => {
  render(<CardAlbum />);
  it('should render correctly', () => {
    expect(getByTestId('page-title').textContent).toBe('Ramones');
  })
})