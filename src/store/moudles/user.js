import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken,getToken } from '@/utils'

const userStore = createSlice({
    name:"user",
    initialState:{
        token: getToken() || ''
        
    },
    // 同步修改方法
    reducers:{
        setToken(state,action){
            state.token = action.payload
            _setToken(action.payload)
        }
    }
})
// 解构出actionCreater
const {setToken} = userStore.actions
const useReducer = userStore.reducer

//  异步方法 完成登录获取token
const fetchLogin = (loginForm) =>{
    return async (dispatch)=>{
       const res = await request.post('/authorizations',loginForm)
       dispatch(setToken(res.data.token))
    }
}
export {fetchLogin,setToken }
export default useReducer