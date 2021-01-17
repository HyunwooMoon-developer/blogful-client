import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorate.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.sessionStorate.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorate.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
