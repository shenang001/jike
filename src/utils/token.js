const TOKENKEY = 'token_key'

function setToken(token){
localStorage.setItem(TOKENKEY,token)
}
function getToken(){
    localStorage.getItem(TOKENKEY)
    }
function removeToken(){
localStorage.removeItem()
}
export {getToken,setToken,removeToken}