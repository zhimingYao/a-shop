// 
/* export function get(key){
    return localStorage.getItem(key)
}
export function set(key,val){
    return localStorage.setItem(key,val)
}
export function remove(key){
    return localStorage.removeItem(key)
}
export function clear(){
    localStorage.clear()
} */

import Cookies from 'js-cookie'

export function getToken(TokenKey) {
    return Cookies.get(TokenKey)
  }
  
  export function setToken(TokenKey,token) {
    return Cookies.set(TokenKey, token)
  }
  
  export function removeToken() {
    return Cookies.remove(TokenKey)
  }
