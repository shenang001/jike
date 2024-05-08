// @ 别名配置
import GeekLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import Demo from "@/pages/Demo";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";
import Article from "@/pages/Article";
import { createBrowserRouter } from "react-router-dom";
import {AuthRoute} from '@/components/AuthRoute'

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthRoute>
             <GeekLayout></GeekLayout>  
            </AuthRoute>,
        children:[
            {
                index:true,
                // path:'home',
                element:<Home/>
            },
            {
                path:'article',
                element:<Article/>
            },
            {
                path:'publish',
                element:<Publish/>
            }
        ]

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