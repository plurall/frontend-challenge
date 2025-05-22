import { useState } from 'react'
import { setToken } from 'utils/token'

export const useSpotifyAuthentication = () => {
  const [erro, setError] = useState<string>('')
  /*
   * Gera um código de verificação e um desafio de código para autenticação OAuth 2.0
   * usando o PKCE (Proof Key for Code Exchange).
   * Mais detalhes: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
   */
  const generateCodeVerifier = (length = 128): string => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const values = crypto.getRandomValues(new Uint8Array(length))
    return values.reduce((acc, x) => acc + possible[x % possible.length], '')
  }

  const sha256 = async (plain?: string) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

  const base64encode = (input: ArrayBuffer) => {
    return btoa(
      Array.from(new Uint8Array(input))
        .map(byte => String.fromCharCode(byte))
        .join(''),
    )
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }

  /*
   * Gera um código de desafio a partir do código de verificação usando SHA-256
   * e codifica o resultado em Base64 URL Safe.
   * O código de desafio é usado para verificar a autenticidade do código de verificação
   * durante o processo de autenticação.
   * Mais detalhes: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
   */
  const generateCodeChallenge = async (verifier: string): Promise<string> => {
    const digest = await sha256(verifier)
    return base64encode(digest)
  }

  /*
   * A função login é chamada quando o usuário deseja iniciar o processo de autenticação.
   * Ela gera um código de verificação e um desafio de código, armazena o código de verificação
   * no localStorage e redireciona o usuário para a página de autorização do Spotify.
   */
  const login = async () => {
    const verifier = generateCodeVerifier()
    const challenge = await generateCodeChallenge(verifier)

    localStorage.setItem('code_verifier', verifier)

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.REACT_APP_CLIENT_ID || '',
      scope: 'user-read-private',
      code_challenge_method: 'S256',
      code_challenge: challenge,
      redirect_uri: process.env.REACT_APP_CALLBACK_URL || '',
    })

    window.location.href = `${process.env.REACT_APP_AUTHORIZATION_URL}?${params.toString()}`
  }

  // Get code parameter from URL
  const getCodeFromUrl = (): string => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('code') || ''
  }

  /**
   * Deve ser usada na rota de callback da API.
   * Esta função é o fim do processo de autenticação, resgatando da URL o argumento
   * code_verifier e usando ele para criar o token baseado no método PKCE (Proof Key for Code Exchange).
   *
   * Mais detalhes: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
   */
  const getToken = async () => {
    const code = getCodeFromUrl()
    const codeVerifier = localStorage.getItem('code_verifier') || ''

    const url = process.env.REACT_APP_ACCESS_TOKEN_URL || ''
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.REACT_APP_CLIENT_ID || '',
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.REACT_APP_CALLBACK_URL || '',
        code_verifier: codeVerifier,
      }),
    }

    const body = await fetch(url, payload)
    const response = await body.json()

    if (response.error) {
      setError(response.error_description)
      return
    }

    setToken(response.access_token)
  }

  return { login, getToken, erro }
}
