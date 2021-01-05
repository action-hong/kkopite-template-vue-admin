// import Cookies from 'js-cookie'

// const TokenKey = 'vue_admin_template_token'

const TOKEN_KEY = 'cl_admin_token'
const ID_KEY = 'cl_admin_id'

export function getToken() {
  const token = localStorage.getItem(TOKEN_KEY)
  const id = localStorage.getItem(ID_KEY)
  return {
    token,
    id
  }
}

export function setToken(token, id) {
  // return Cookies.set(TokenKey, token)
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(ID_KEY, id)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(ID_KEY)
}
