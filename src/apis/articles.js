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
// 编辑文章接口
export function updateArticleApPI(data){
    return request({
        url:`mp/articles/${data.id}?draft=flase`,
        method:'PUT',
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
// 删除文章根据id
export function deleteArticlesAPI(target){
return request({
    url:`/mp/articles/${target}`,
    method:'DELETE'
})
}
export function getArticleById(id){
    return request({
        url:`/mp/articles/${id}`,
        method:'GET'
    })
}