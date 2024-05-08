import { Navigate } from "react-router-dom";
import { getToken } from "@/utils";
// 根据token控制路由跳转
export function AuthRoute ({ children }) {
    const token = getToken()
    return token ? children : <Navigate to={"/login"} replace />;  
    // if (token) {
    //   return <>{children}</>
    // } else {
    //   return <Navigate to={'/login'} replace />
    // }
  }