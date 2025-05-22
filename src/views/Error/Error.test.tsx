/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement, ReactNode } from 'react'
import { Route, Routes, MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import Error from './Error'

jest.mock(
  '../../components/Layout/Layout.tsx',
  () =>
    ({ children }: { children: ReactNode }): ReactElement => <div>{children}</div>,
)

describe('<Error />', () => {
  test('deve renderizar o componente de erro corretamente', () => {
    const { getByTestId } = render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        initialEntries={['/error']}
      >
        <Routes>
          <Route path='/error' element={<Error />} />
        </Routes>
      </MemoryRouter>,
    )

    const errorComponent = getByTestId('error-message')

    expect(errorComponent).toBeInTheDocument()
  })

  test('deve renderizar o componente com o título e subtítulo padrão', () => {
    const { getByTestId } = render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        initialEntries={['/error?title=custom-title&message=custom-subtitle']}
      >
        <Routes>
          <Route path='/error' element={<Error />} />
        </Routes>
      </MemoryRouter>,
    )
    const title = getByTestId('error-message-title')
    const subTitle = getByTestId('error-message-subtitle')

    expect(title.textContent).toBe('custom-title')
    expect(subTitle.textContent).toBe('custom-subtitle')
  })
})
