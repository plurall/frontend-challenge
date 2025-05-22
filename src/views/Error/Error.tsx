import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import queryString from 'query-string'

import { ErrorMessage, Layout } from 'components'

const Error = () => {
  const [title, setTitle] = useState<string | (string | null | undefined)[]>(
    'Ops! Ocorreu um erro.',
  )
  const [subTitle, setSubTitle] = useState<string | (string | null | undefined)[]>(
    'Caso o erro persista, entre em contato com o suporte.',
  )

  const location = useLocation()

  useEffect(() => {
    const { status, message, title: queryTitle } = queryString.parse(location.search)

    if (queryTitle) {
      setTitle(queryTitle)
    }

    if (message) {
      setSubTitle(message)
    }
  }, [location])

  return (
    <Layout>
      <ErrorMessage
        dataTestId='error-message'
        title={title?.toString() || ''}
        subTitle={subTitle?.toString() || ''}
      />
    </Layout>
  )
}

export default Error
