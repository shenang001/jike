// 组合redux子模块 + 导出store实例
import useReducer from "./moudles/user";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
    reducer:{
        user:useReducer
    }
})