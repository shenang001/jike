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
// params 的对象{}参数名和值， axios 源码会把参数和值，拼接在 url? 后面给后台
export function getArticleListAPI(params){
return request({
    url:'/mp/articles',
    method:'GET',
    params
})
}