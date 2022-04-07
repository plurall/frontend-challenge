/* eslint-disable linebreak-style */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function NotFound() {
  const history = useHistory()
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    history.push('/')
  }, [])

  return <div> Rota inexistente</div>
}
