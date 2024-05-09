import { request } from "@/utils";
// 用户登录接口
export function loginApi(loginForm){
  return  request({
        url:'/authorizations',
        method:'POST',
        data:loginForm
    })
}
// 用户信息接口
export function getProfileApi(){
   return request({
        url:'/user/profile',
        method:'GET',
      
    })
}
