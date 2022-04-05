import {
  clearToken
} from 'utils'

class ErrorHandler {
  static handleRequestError(error) {
    if (error.status === 401) {
      clearToken();
      window.location = '/'
    }
  }
}

export default ErrorHandler;
