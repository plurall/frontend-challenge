import React from 'react';
import Home from '../../views/Home';
import { fireEvent, render, waitFor } from '@testing-library/react';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),

  };
});

describe('Home page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  })

  it('should be able to go to the Search page', async () => {
    const { getByText } = render(<Home />);
    const link = getByText('Buscar Artista');

    fireEvent.click(link);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/busca');
    });
  });
});
