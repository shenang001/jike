// @ 别名配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Demo from "@/pages/Demo";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:'/demo',
        element:<Demo/>
    }
])
export default router;