import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import Loading from '../components/Loading'

describe('<Loading />', () => {
  it('should render Loading component', () => {
    const wrapper = render(<Loading loading={false} />);
    expect(wrapper.findByText('Carregando...'))
  });
});

