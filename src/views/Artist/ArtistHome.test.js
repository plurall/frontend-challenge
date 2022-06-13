import '@testing-library/react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'React'
import ArtistHome from './ArtistHome'

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({
      id: '5eAWCfyUhZtHHtBdNk56l1',
    }),
  }
})

test('Test if page renders correctly with mock id', () => {
  render(<ArtistHome />)
})
