// @ 别名配置
import GeekLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import Demo from "@/pages/Demo";
// import Home from "@/pages/Home";
// import Publish from "@/pages/Publish";
// import Article from "@/pages/Article";
import { createBrowserRouter } from "react-router-dom";
import {AuthRoute} from '@/components/AuthRoute'
import { Suspense, lazy } from "react";
const Home = lazy(() => import( "@/pages/Home"))
const Publish = lazy(() => import( "@/pages/Publish"))
const Article = lazy(() =>import( "@/pages/Article"))
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
                element:<Suspense fallback={'Loading'}><Home/></Suspense>
            },
            {
                path:'article',
                element:<Suspense fallback={'Loading'}><Article/></Suspense>
            },
            {
                path:'publish',
                element:<Suspense fallback={'Loading'}><Publish/></Suspense>
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