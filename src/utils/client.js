import { getToken } from 'utils'

class SomosClient {
   onError = error => { }

  async getArtists() {
    const token = getToken();
    console.log(token);
    const ids = [
      "1qIAsl3tIpnX0j4BMi0l5g",
      "4laQz4PaKeh2Hu6QL6evVD",
      "3Bnq7jiU506HcPjRgQ43TM",
      "1mZbRiSVb2ExneAlDbBiiT",
      "6mdiAmATAx73kdxrNrnlao",
      "5eAWCfyUhZtHHtBdNk56l1",
      "0XHiH53dHrvbwfjYM7en7I",
      "4adpoL1QBRZW6jWjRVMB04",
    ];
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists?ids=${ids}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  };

  async getArtistAlbumsById(id) {
    // clearToken()
    const token = getToken()
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      return data;
    }
    catch (err) {
      return err
    }
  }

};


export default SomosClient
