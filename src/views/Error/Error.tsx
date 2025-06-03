import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { ErrorMessage, Layout } from 'components'

const Error: React.FC = () => {
  const [title, setTitle] = useState<string | (string | null | undefined)[]>(
    'Ops! Ocorreu um erro.',
  )
  const [subTitle, setSubTitle] = useState<string | (string | null | undefined)[]>(
    'Caso o erro persista, entre em contato com o suporte.',
  )
  const [showReloadButton, setShowReloadButton] = useState<boolean>(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const { status, message, title: queryTitle } = queryString.parse(location.search)

    if (queryTitle) {
      setTitle(queryTitle)
    }

    if (message) {
      setSubTitle(message)
    }

    setShowReloadButton(status === '401')
  }, [location])

  const handleReload = () => {
    navigate(process.env.REACT_APP_CALLBACK_URL || '/')
  }

  return (
    <Layout>
      <ErrorMessage
        dataTestId='error-message'
        title={title?.toString() || ''}
        subTitle={subTitle?.toString() || ''}
      />
      {showReloadButton && (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleReload}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6B4BA3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Recarregar Página
          </button>
        </div>
      )}
    </Layout>
  )
}

export default Error
