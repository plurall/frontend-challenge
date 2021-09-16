import React from 'react';
import { render } from '@testing-library/react'
import App from '../App';

describe('Página Home', () => {
  test('Possui a palavra início', () => {
    const myApp = render(<App />)
    const home = myApp.getAllByText('Início');
    expect(home.length).toBe(2);
  })
})