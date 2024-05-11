// 自定义hook函数
import { getChannelAPI } from "@/apis/articles"
import { useState,useEffect } from "react"
function useChannel(){

    const [channels,setChannels] = useState([])
    useEffect(()=>{
       const fetchChannels  = async()=>{
        const res = await getChannelAPI()
        setChannels(res.data.channels)
        console.log(res.data.channels)
       }
       fetchChannels()
    },[]) 
    return {
        channels
    }
}
export {useChannel}