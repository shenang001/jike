import { request } from "@/utils";
export function getChannelAPI(){
return request({
    url:'/channels',
    method:"GET",
})
}
export function createArticleApPI(data){
    return request({
        url:'mp/articles?draft=flase',
        method:'POST',
        data:data
    })
}