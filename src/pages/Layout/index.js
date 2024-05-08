import { request } from "@/utils"
import { useEffect } from "react"
// import './index.scss'
const Layout =()=>{
    useEffect(() =>{
        request.get('/user/profile')
    },[])
return(
    <div>this is Layout pages</div>
)
}
export default Layout