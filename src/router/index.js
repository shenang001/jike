// @ 别名配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Demo from "@/pages/Demo";
import { createBrowserRouter } from "react-router-dom";
import {AuthRoute} from '@/components/AuthRoute'

const router = createBrowserRouter([
    {
        path:"/",
        element:(<AuthRoute>
             <Layout>
          
            </Layout>  
            </AuthRoute>)
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