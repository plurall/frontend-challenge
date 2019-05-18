
import axios from 'axios'
import { getToken } from './token';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


// Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
// retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
const SomosClient = (url, params, callback) => (
  axios({
    method: 'get',
    url,
    params,
    headers: {
      scope: 'user-read-private user-read-email',
    }
  })
  .then(callback)
  .catch(function (error) {
    console.log(error.response);
  })
)

export default SomosClient;
