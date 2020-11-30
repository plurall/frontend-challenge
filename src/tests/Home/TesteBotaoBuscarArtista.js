import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Home from '../../views/Home';

afterEach(cleanup);

it('Url troca após apertar botão', () => {
    handleClick = jest.fn();
    render(<Home />);
    fireEvent.click(screen.getByText(/buscar artistas/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});