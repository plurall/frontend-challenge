import React from 'react'
import { Layout } from 'components'
import { Home, Busca, Artista, Error, LoginCallback, NotFound } from 'views'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { PrivateRoute } from 'components'
import './App.module.scss'

const callbackHistory: Array<(callback: (location: any) => void) => void> = []
window.PLURALL_CUSTOM_HISTORY = {
  listen: callback => {
    if (!callbackHistory.find(c => c === callback)) {
      callbackHistory.push(callback)
    }
  },
}

const History = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  React.useEffect(() => {
    callbackHistory.forEach(callback => {
      callback(location as any)
    })
  }, [location])

  return children
}

const MainContent = () => (
  <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/busca' element={<Busca />} />
      <Route path='/artista/:id' element={<Artista />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Layout>
)

const App = () => {
  return (
    <BrowserRouter>
      <History>
        <Routes>
          <Route path='/login/callback' element={<LoginCallback />} />
          <Route path='/error' element={<Error />} />
          <Route
            path='*'
            element={
              <PrivateRoute>
                <MainContent />
              </PrivateRoute>
            }
          />
        </Routes>
      </History>
    </BrowserRouter>
  )
}

export default App
