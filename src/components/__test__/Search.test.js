import React from 'react';
import {render, screen} from '@testing-library/react';

import "@testing-library/jest-dom"
import { Search } from 'views';

test('should render input text', () => {
  render(<Search/>);
  const inputElement = screen.queryByPlaceholderText('Nome do artista');
  expect(inputElement).toBeInTheDocument();
});

