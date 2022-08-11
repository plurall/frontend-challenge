import { SpotifyClient, setToken } from 'utils'

describe('SpotifyClient test suite', () => {
  beforeEach(async () => {
    setToken(process.env.REACT_APP_CLIENT_TEST_TOKEN)
  })

  it('should create a client instance with the default config', async () => {
    const token = `token-${Math.random()}`
    setToken(token)

    const client = new SpotifyClient()

    expect(client.baseURL).toBe(process.env.REACT_APP_API_URL)
    expect(client.token).toBe(token)
  })

  it('should create a client instance with the given config', async () => {
    const baseURL = `some-base-url-${Math.random()}`
    const token = `some-token-${Math.random()}`

    const client = new SpotifyClient({ baseURL, token })

    expect(client.baseURL).toBe(baseURL)
    expect(client.token).toBe(token)
  })

  // TODO: Fix this failed test (Requests are being blocked by CORS policy)
  // it('should list artists by name', async () => {
  //   const token = process.env.REACT_APP_CLIENT_TEST_TOKEN
  //   const client = new SpotifyClient({ token })

  //   const artists = await client.getArtistsByName('Bob Dylan')
  //   expect(artists.items.length).toBeGreaterThan(0)
  // })

  // TODO: test all public methods from the spotify client
})
