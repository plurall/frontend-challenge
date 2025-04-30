/*
* Gera um código de verificação e um desafio de código para autenticação OAuth 2.0
* usando o PKCE (Proof Key for Code Exchange).
* Mais detalhes: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
* e https://datatracker.ietf.org/doc/html/rfc7636#section-4.1
*/
export function generateCodeVerifier(length = 128): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let verifier = '';
  for (let i = 0; i < length; i++) {
    verifier += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return verifier;
}

/*
* Gera um código de desafio a partir do código de verificação usando SHA-256
* e codifica o resultado em Base64 URL Safe.
* O código de desafio é usado para verificar a autenticidade do código de verificação
* durante o processo de autenticação.
* Mais detalhes: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
*/
export async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
