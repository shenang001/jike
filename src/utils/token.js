const TOKENKEY = 'token_key'

// 一定要把token返回出去
function setToken(token){
return localStorage.setItem(TOKENKEY,token)
}
function getToken(){
   return localStorage.getItem(TOKENKEY)
    }
function removeToken(){
return localStorage.removeItem()
}
export {getToken,setToken,removeToken}