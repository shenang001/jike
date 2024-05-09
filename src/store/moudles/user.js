import { removeToken, request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken,getToken } from '@/utils'

const userStore = createSlice({
    name:"user",
    initialState:{
        token: getToken() || '',
        userInfo:{}
    },
    // 同步修改方法
    reducers:{
        setToken(state,action){
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state,action){
            state.userInfo = action.payload
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
            console.log(state)
        }
    }
})
// 解构出actionCreater
const {setToken,setUserInfo,clearUserInfo} = userStore.actions
const useReducer = userStore.reducer

//  异步方法 完成登录获取token
const fetchLogin = (loginForm) =>{
    return async (dispatch)=>{
       const res = await request.post('/authorizations',loginForm)
       dispatch(setToken(res.data.token))
    }
}
// 异步方法，获取用户信息
const fetchUserInfo = ()=>{
return async (dispatch)=>{
    const res = await request.get('/user/profile')
    dispatch(setUserInfo(res.data))
}
}
export {fetchLogin,setToken,fetchUserInfo,clearUserInfo }
export default useReducer