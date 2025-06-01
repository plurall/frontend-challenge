import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import { Error, Home, LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from './App'
import Search from 'views/Search'

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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <History>
      <Routes>
        <Route path='/login/callback' element={<LoginCallback />} />
        <Route path='/error' element={<Error />} />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </History>
  </BrowserRouter>,
)
