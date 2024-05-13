import { request } from "@/utils";
export function getChannelAPI(){
return request({
    url:'/channels',
    method:"GET",
})
}
// 新建文章接口
export function createArticleApPI(data){
    return request({
        url:'mp/articles?draft=flase',
        method:'POST',
        data:data
    })
}
// 获取文章列表
export function getArticleListAPI(data){
return request({
    url:'/mp/articles',
    method:'GET',
    data
})
}