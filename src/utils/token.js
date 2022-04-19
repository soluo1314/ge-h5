import storage from '@/utils/storage'
const TOKEN_KEY = 'GeToken'

export function getToken() {
  return storage.get(TOKEN_KEY)
}

export function setToken(token) {
  return storage.set(TOKEN_KEY, token)
}

export function removeToken() {
  return storage.remove(TOKEN_KEY)
}
